import connectdb from "@/database/connection";
import Experience from "@/models/experience";
import { NextResponse } from "next/server"

export async function POST (request){
    const{orgName,address,position,duration,summary} = await request.json();
    await connectdb();
    await Experience.create({orgName,address,position,duration,summary});
    return NextResponse.json({message:"Experience created"},{status:201});
}

export async function GET (){
    await connectdb();
    const experience  = await Experience.find();
    return NextResponse.json({data:experience});
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get('id');
    await connectdb();
    await Experience.findByIdAndDelete(id);
    return NextResponse.json({message:"Experience Deleted"},{status:200});
}