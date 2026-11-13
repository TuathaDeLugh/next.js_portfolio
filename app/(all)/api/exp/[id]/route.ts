import connectdb from "@/database/connection";
import Experience from "@/models/experience";
import { NextRequest, NextResponse } from "next/server";
import { cachedJsonResponse } from "@/utils/apiCache";

export const revalidate = 60;

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  const { id } = await params;
  const {
    newOrgName: orgName,
    newAddress: address,
    newPosition: position,
    newDurationStart,
    newDurationEnd,
    newSummary: summary,
  } = await request.json();

  await connectdb();
  await Experience.findByIdAndUpdate(id, {
    orgName,
    address,
    position,
    duration: { start: newDurationStart, end: newDurationEnd },
    summary,
  });

  return NextResponse.json({ message: "Experience updated" }, { status: 200 });
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  const { id } = await params;
  await connectdb();
  const exp = await Experience.findOne({ _id: id });
  return cachedJsonResponse({ data: exp }, { request });
}
