import connectdb from "@/database/connection";
import Skill from "@/models/skills";
import { NextResponse } from "next/server"

export async function POST (request){
    const{lang} = await request.json();
    await connectdb();
    await Skill.create({lang});
    return NextResponse.json({message:"Skill created"},{status:201});
}

export async function GET (){
    await connectdb();
    const skill  = await Skill.find();
    return NextResponse.json({data:skill});
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get('id');
    await connectdb();
    await Skill.findByIdAndDelete(id);
    return NextResponse.json({message:"Skill Deleted"},{status:200});
}