import connectdb from "@/database/connection";
import Email from "@/models/mail";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  const { id } = await params;
  await connectdb();
  const emailItem = await Email.findOne({ _id: id });
  return NextResponse.json({ data: emailItem }, { status: 200 });
}
