import connectdb from "@/app/database/connection";
import Project from "@/models/project"
import { NextResponse } from "next/server"

export async function POST (request){
    const{title,info,technology,github,summary} = await request.json();
    await connectdb();
    await Project.create({title,info,technology,github,summary});
    return NextResponse.json({message:"Project created"},{status:201});
}

export async function GET (){
    await connectdb();
    const projects  = await Project.find();
    return NextResponse.json({data:projects});
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get('id');
    await connectdb();
    await Project.findByIdAndDelete(id);
    return NextResponse.json({message:"Project Deleted"},{status:200});
}