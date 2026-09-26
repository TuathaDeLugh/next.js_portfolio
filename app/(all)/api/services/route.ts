import connectdb from "@/database/connection";
import Service from "@/models/service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
  const { title, desc, icon, color } = await request.json();
  await connectdb();
  await Service.create({ title, desc, icon, color });
  return NextResponse.json({ message: "Service created" }, { status: 201 });
}

export async function GET(): Promise<NextResponse> {
  await connectdb();
  const service = await Service.find();
  return NextResponse.json({ data: service }, { status: 200 });
}

export async function DELETE(request: NextRequest): Promise<NextResponse> {
  const id = request.nextUrl.searchParams.get("id");
  await connectdb();
  await Service.findByIdAndDelete(id);
  return NextResponse.json({ message: "Service Deleted" }, { status: 200 });
}
