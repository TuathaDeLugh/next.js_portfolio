import connectdb from "@/database/connection";
import Skill from "@/models/skills";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
  const { lang } = await request.json();
  await connectdb();
  await Skill.create({ lang });
  return NextResponse.json({ message: "Skill created" }, { status: 201 });
}

export async function GET(): Promise<NextResponse> {
  await connectdb();
  const skill = await Skill.find();
  return NextResponse.json({ data: skill }, { status: 200 });
}

export async function DELETE(request: NextRequest): Promise<NextResponse> {
  const id = request.nextUrl.searchParams.get("id");
  await connectdb();
  await Skill.findByIdAndDelete(id);
  return NextResponse.json({ message: "Skill Deleted" }, { status: 200 });
}
