import connectdb from "@/database/connection";
import Experience from "@/models/experience";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
  const { orgName, address, position, duration, summary } =
    await request.json();
  await connectdb();
  await Experience.create({ orgName, address, position, duration, summary });
  return NextResponse.json({ message: "Experience created" }, { status: 201 });
}

export async function GET(): Promise<NextResponse> {
  await connectdb();
  const experience = await Experience.find().sort({ "duration.end": -1 });
  return NextResponse.json({ data: experience }, { status: 200 });
}

export async function DELETE(request: NextRequest): Promise<NextResponse> {
  const id = request.nextUrl.searchParams.get("id");
  await connectdb();
  await Experience.findByIdAndDelete(id);
  return NextResponse.json({ message: "Experience Deleted" }, { status: 200 });
}
