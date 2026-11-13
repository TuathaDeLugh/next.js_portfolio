import connectdb from "@/database/connection";
import Email from "@/models/mail";
import { NextRequest, NextResponse } from "next/server";
import { cachedJsonResponse } from "@/utils/apiCache";

// Admin Panel API: strictly dynamic, no caching
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  const { id } = await params;
  await connectdb();
  const emailItem = await Email.findOne({ _id: id });
  return cachedJsonResponse({ data: emailItem }, { status: 200, isAdminOnly: true, request });
}
