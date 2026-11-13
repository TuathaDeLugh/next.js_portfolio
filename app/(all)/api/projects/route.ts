import connectdb from "@/database/connection";
import Project from "@/models/project";
import { NextRequest, NextResponse } from "next/server";
import { cachedJsonResponse } from "@/utils/apiCache";

export const revalidate = 60;

export async function POST(request: NextRequest): Promise<NextResponse> {
  const {
    title,
    info,
    technology,
    github,
    summary,
    image,
    livedemo,
    archived,
  } = await request.json();
  await connectdb();
  await Project.create({
    title,
    info,
    technology,
    github,
    summary,
    image,
    livedemo,
    archived,
  });
  return NextResponse.json({ message: "Project created" }, { status: 201 });
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  const sortParam = request.nextUrl.searchParams.get("sort");
  const all = request.nextUrl.searchParams.get("all");
  await connectdb();

  const query: Record<string, unknown> = {};
  if (all !== "true") {
    query.archived = { $ne: true };
  }

  const sortOrder = sortParam === "-1" || sortParam === "desc" ? -1 : 1;
  const projects = await Project.find(query).sort({
    createdAt: sortOrder,
    updatedAt: sortOrder,
  });
  return cachedJsonResponse({ data: projects }, { request });
}

export async function DELETE(request: NextRequest): Promise<NextResponse> {
  const id = request.nextUrl.searchParams.get("id");
  await connectdb();
  await Project.findByIdAndDelete(id);
  return NextResponse.json({ message: "Project Deleted" }, { status: 200 });
}
