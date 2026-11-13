import connectdb from "@/database/connection";
import About from "@/models/about";
import { NextRequest, NextResponse } from "next/server";
import { cachedJsonResponse } from "@/utils/apiCache";

export const revalidate = 60;

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    await connectdb();
    const about = await About.find();
    return cachedJsonResponse({ data: about }, { request });
  } catch (error) {
    console.error("Failed to load about:", error);
    return NextResponse.json(
      {
        message: "failed to load about",
      },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest): Promise<NextResponse> {
  try {
    await connectdb();
    const {
      _id,
      aboutme,
      noofprojects,
      yearofexperience,
      noofclients,
      skills,
      heading,
      summary,
    } = await request.json();

    await About.findOneAndUpdate(
      {
        _id: _id,
      },
      {
        aboutme,
        noofprojects,
        yearofexperience,
        noofclients,
        skills,
        heading,
        summary,
      }
    );

    return NextResponse.json(
      {
        message: "About updated",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to update about:", error);
    return NextResponse.json(
      {
        message: "failed to load about",
      },
      { status: 500 }
    );
  }
}
