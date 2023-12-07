import connectdb from "@/database/connection";
import Project from "@/models/project"
import { NextResponse } from "next/server"

export async function POST (request){
    const{title,info,technology,github,summary,image,livedemo} = await request.json();
    await connectdb();
    await Project.create({title,info,technology,github,summary,image,livedemo});
    return NextResponse.json({message:"Project created"},{status:201});
}

export async function GET (request){
    const sort = request.nextUrl.searchParams.get('sort')
    await connectdb();
    const projects  = await Project.find().sort({createdAt : sort ,updatedAt : sort});
    return NextResponse.json({data:projects});
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get('id');
    await connectdb();
    await Project.findByIdAndDelete(id);
    return NextResponse.json({message:"Project Deleted"},{status:200});
}