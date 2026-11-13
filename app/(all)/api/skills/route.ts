import connectdb from "@/database/connection";
import Skill from "@/models/skills";
import { NextRequest, NextResponse } from "next/server";
import { cachedJsonResponse } from "@/utils/apiCache";

export const revalidate = 60;

export async function POST(request: NextRequest): Promise<NextResponse> {
  const { lang } = await request.json();
  await connectdb();
  await Skill.create({ lang });
  return NextResponse.json({ message: "Skill created" }, { status: 201 });
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  await connectdb();
  const skill = await Skill.find();
  return cachedJsonResponse({ data: skill }, { request });
}

export async function DELETE(request: NextRequest): Promise<NextResponse> {
  const id = request.nextUrl.searchParams.get("id");
  await connectdb();
  await Skill.findByIdAndDelete(id);
  return NextResponse.json({ message: "Skill Deleted" }, { status: 200 });
}
