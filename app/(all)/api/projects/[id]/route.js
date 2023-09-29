import connectdb from "@/database/connection";
import Project from "@/models/project";
import { NextResponse } from "next/server"

export async function PUT(request,{params}){
    const { id } = params;
    const { 
        newtitle: title,
        newinfo :info,
        newtechnology:technology,
        newdetail:detail,
        newgithub:github,
        newsummary:summary,
        newimage:image,
        newlivedemo:livedemo
    } 
    = await request.json();
    await connectdb();
    await Project.findByIdAndUpdate(id, { title,info,technology,detail,github,summary,image,livedemo });
    return NextResponse.json({message:"Project updated"},{status:200});
} 
  export async function GET(request, { params }) {
    const { id } = params;
    await connectdb();
    const project = await Project.findOne({ _id: id });
    return NextResponse.json({ data:project }, { status: 200 });

}