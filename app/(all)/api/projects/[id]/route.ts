import connectdb from "@/database/connection";
import Project from "@/models/project";
import { NextRequest, NextResponse } from "next/server";
import { cachedJsonResponse } from "@/utils/apiCache";

export const revalidate = 60;

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  const { id } = await params;
  const {
    newtitle: title,
    newinfo: info,
    newtechnology: technology,
    newdetail: detail,
    newgithub: github,
    newsummary: summary,
    newimage: image,
    newlivedemo: livedemo,
    newarchived: archived,
  } = await request.json();

  await connectdb();
  await Project.findByIdAndUpdate(id, {
    title,
    info,
    technology,
    detail,
    github,
    summary,
    image,
    livedemo,
    archived,
  });

  return NextResponse.json({ message: "Project updated" }, { status: 200 });
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  const { id } = await params;
  await connectdb();
  const project = await Project.findOne({ _id: id });
  return cachedJsonResponse({ data: project }, { request });
}
