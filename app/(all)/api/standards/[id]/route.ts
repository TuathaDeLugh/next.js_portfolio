import connectdb from "@/database/connection";
import Standard from "@/models/standard";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  const { id } = await params;
  const { newTitle: title, newDesc: desc } = await request.json();

  await connectdb();
  await Standard.findByIdAndUpdate(id, {
    title,
    desc,
  });

  return NextResponse.json({ message: "Standard updated" }, { status: 200 });
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  const { id } = await params;
  await connectdb();
  const standard = await Standard.findOne({ _id: id });
  return NextResponse.json({ data: standard }, { status: 200 });
}
