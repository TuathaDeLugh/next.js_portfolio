import connectdb from "@/database/connection";
import Standard from "@/models/standard";
import { NextRequest, NextResponse } from "next/server";
import { cachedJsonResponse } from "@/utils/apiCache";

export const revalidate = 60;

export async function POST(request: NextRequest): Promise<NextResponse> {
  const { title, desc } = await request.json();
  await connectdb();
  await Standard.create({ title, desc });
  return NextResponse.json({ message: "Standard created" }, { status: 201 });
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  await connectdb();
  const standard = await Standard.find();
  return cachedJsonResponse({ data: standard }, { request });
}

export async function DELETE(request: NextRequest): Promise<NextResponse> {
  const id = request.nextUrl.searchParams.get("id");
  await connectdb();
  await Standard.findByIdAndDelete(id);
  return NextResponse.json({ message: "Standard Deleted" }, { status: 200 });
}
