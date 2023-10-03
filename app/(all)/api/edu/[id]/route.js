import connectdb from "@/database/connection";
import Education from "@/models/education";
import { NextResponse } from "next/server"

export async function PUT(request,{params}){
    const { id } = params;
    const { 
        newdegree:degree,
        newplace:place,
        newmarks:marks
    } 
    = await request.json();
    await connectdb();
    await Education.findByIdAndUpdate(id, { degree,place,marks });
    return NextResponse.json({message:"Project updated"},{status:200});
} 
  export async function GET(request, { params }) {
    const { id } = params;
    await connectdb();
    const education = await Education.findOne({ _id: id });
    return NextResponse.json({ data:education }, { status: 200 });

}
