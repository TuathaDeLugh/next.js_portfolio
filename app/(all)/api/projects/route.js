import connectdb from "@/database/connection";
import Project from "@/models/project"
import { NextResponse } from "next/server"

export async function POST (request){
    const{title,info,technology,github,summary,image,livedemo,archived} = await request.json();
    await connectdb();
    await Project.create({title,info,technology,github,summary,image,livedemo,archived});
    return NextResponse.json({message:"Project created"},{status:201});
}

export async function GET (request){
    const sort = request.nextUrl.searchParams.get('sort')
    const all = request.nextUrl.searchParams.get('all')
    await connectdb();
    
    let query = {};
    if (all !== 'true') {
        query.archived = { $ne: true };
    }
    
    const projects  = await Project.find(query).sort({createdAt : sort ,updatedAt : sort});
    return NextResponse.json({data:projects});
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get('id');
    await connectdb();
    await Project.findByIdAndDelete(id);
    return NextResponse.json({message:"Project Deleted"},{status:200});
}