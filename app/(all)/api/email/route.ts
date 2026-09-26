import connectdb from "@/database/connection";
import { sendEmail } from "@/database/mailer";
import Email from "@/models/mail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { fullname, email, subject, details } = await request.json();
    await connectdb();

    try {
      await sendEmail({ fullname, email, subject, details });
    } catch (e) {
      console.error("mailer error:", e);
    }

    await Email.create({ fullname, email, subject, details });

    return NextResponse.json(
      {
        message: "load mail",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to load mail:", error);
    return NextResponse.json(
      {
        message: "failed to load mail",
      },
      { status: 500 }
    );
  }
}

export async function GET(): Promise<NextResponse> {
  try {
    await connectdb();
    const emails = await Email.find();
    return NextResponse.json(
      {
        data: emails,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to load mail:", error);
    return NextResponse.json(
      {
        message: "failed to load mail",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest): Promise<NextResponse> {
  try {
    const id = request.nextUrl.searchParams.get("id");
    await connectdb();
    await Email.findByIdAndDelete(id);
    return NextResponse.json({ message: "Email Deleted" }, { status: 200 });
  } catch (error) {
    console.error("Delete email error:", error);
    return NextResponse.json({ message: "Failed to delete email" }, { status: 500 });
  }
}
