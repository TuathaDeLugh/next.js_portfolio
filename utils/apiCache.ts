import { NextRequest, NextResponse } from "next/server";

/**
 * 1-minute caching configuration (60 seconds)
 * Stale-while-revalidate grace window: 30 seconds
 */
export const CACHE_1_MIN_SECONDS = 60;

export const CACHE_HEADERS_1_MIN: Record<string, string> = {
  "Cache-Control": "public, max-age=60, s-maxage=60, stale-while-revalidate=30",
  "CDN-Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
  Vary: "Accept-Encoding, Referer",
};

export const NO_CACHE_HEADERS: Record<string, string> = {
  "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
  Pragma: "no-cache",
  Expires: "0",
};

/**
 * Determines whether the incoming request is originating from the admin panel
 * or requesting administrative data (e.g. unarchived + archived items).
 */
export function isAdminRequest(request?: NextRequest | Request): boolean {
  if (!request) return false;

  // 1. Check Referer header for admin routes
  const referer = request.headers.get("referer") || "";
  if (referer.includes("/admin")) {
    return true;
  }

  // 2. Check query parameters if it's a NextRequest or standard Request
  try {
    const url =
      request instanceof NextRequest
        ? request.nextUrl
        : new URL(request.url);

    if (
      url.searchParams.get("all") === "true" ||
      url.searchParams.get("admin") === "true" ||
      url.pathname.includes("/admin")
    ) {
      return true;
    }
  } catch {
    // URL parsing fallback
  }

  return false;
}

/**
 * Returns either 1-minute cache headers for public GET requests
 * or no-cache headers for admin panel requests.
 */
export function getApiCacheHeaders(
  request?: NextRequest | Request,
  forceNoCache = false
): Record<string, string> {
  if (forceNoCache || isAdminRequest(request)) {
    return NO_CACHE_HEADERS;
  }
  return CACHE_HEADERS_1_MIN;
}

/**
 * Creates a JSON NextResponse with 1-minute caching for public traffic,
 * while automatically bypassing cache for admin panel traffic.
 */
export function cachedJsonResponse(
  data: unknown,
  options: {
    status?: number;
    request?: NextRequest | Request;
    isAdminOnly?: boolean;
    headers?: Record<string, string>;
  } = {}
): NextResponse {
  const { status = 200, request, isAdminOnly = false, headers = {} } = options;
  const cacheHeaders = getApiCacheHeaders(request, isAdminOnly);

  return NextResponse.json(data, {
    status,
    headers: {
      ...cacheHeaders,
      ...headers,
    },
  });
}

