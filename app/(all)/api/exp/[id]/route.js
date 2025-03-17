import connectdb from "@/database/connection";
import Experience from "@/models/experience";
import { NextResponse } from "next/server"

export async function PUT(request,{params}){
    const { id } = params;
    const { 
        newOrgNAme:orgName,
        newAddress:address,
        newDuration:duration
    } 
    = await request.json();
    await connectdb();
    await Experience.findByIdAndUpdate(id, {orgName,address,duration });
    return NextResponse.json({message:"Project updated"},{status:200});
} 
  export async function GET(request, { params }) {
    const { id } = params;
    await connectdb();
    const Experience = await Experience.findOne({ _id: id });
    return NextResponse.json({ data:Experience }, { status: 200 });

}
