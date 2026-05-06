import connectdb from "@/database/connection";
import Standard from "@/models/standard";
import { NextResponse } from "next/server"

export async function PUT(request, { params }) {
    const { id } = params;
    const {
        newTitle: title,
        newDesc: desc,
    } = await request.json();
    await connectdb();
    await Standard.findByIdAndUpdate(id, {
        title,
        desc
    });
    return NextResponse.json({ message: "Standard updated" }, { status: 200 });
}

export async function GET(request, { params }) {
    const { id } = params;
    await connectdb();
    const standard = await Standard.findOne({ _id: id });
    return NextResponse.json({ data: standard }, { status: 200 });
}
