import connectdb from "@/database/connection";
import Service from "@/models/service";
import { NextResponse } from "next/server"

export async function PUT(request, { params }) {
    const { id } = params;
    const {
        newTitle: title,
        newDesc: desc,
        newIcon: icon,
        newColor: color,
    } = await request.json();
    await connectdb();
    await Service.findByIdAndUpdate(id, {
        title,
        desc,
        icon,
        color
    });
    return NextResponse.json({ message: "Service updated" }, { status: 200 });
}

export async function GET(request, { params }) {
    const { id } = params;
    await connectdb();
    const service = await Service.findOne({ _id: id });
    return NextResponse.json({ data: service }, { status: 200 });
}
