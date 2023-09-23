import connectdb from "@/app/database/connection";
import Education from "@/models/education";
import { NextResponse } from "next/server"

export async function POST (request){
    const{title,info,technology,detail,github} = await request.json();
    await connectdb();
    await Education.create({title,info,technology,detail,github});
    return NextResponse.json({message:"Project created"},{status:201});
}

export async function GET (){
    await connectdb();
    const education  = await Project.find();
    return NextResponse.json({education});
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get('id');
    await connection();
    await Education.findByIdAndDelete(id);
    return NextResponse.json({message:"Project Deleted"},{status:200});
}