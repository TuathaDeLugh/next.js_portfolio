import connectdb from "@/database/connection";
import Education from "@/models/education";
import { NextResponse } from "next/server"

export async function POST (request){
    const{degree,place,marks} = await request.json();
    await connectdb();
    await Education.create({degree,place,marks});
    return NextResponse.json({message:"edjucation created"},{status:201});
}

export async function GET (){
    await connectdb();
    const education  = await Project.find();
    return NextResponse.json({data:education});
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get('id');
    await connection();
    await Education.findByIdAndDelete(id);
    return NextResponse.json({message:"edjucation Deleted"},{status:200});
}