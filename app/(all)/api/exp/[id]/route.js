import connectdb from "@/database/connection";
import Experience from "@/models/experience";
import { NextResponse } from "next/server"

export async function PUT(request, { params }) {
    const { id } = params;
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

export async function GET(request, { params }) {
    const { id } = params;
    await connectdb();
    const exp = await Experience.findOne({ _id: id });
    return NextResponse.json({ data: exp }, { status: 200 });
}
