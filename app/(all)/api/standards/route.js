import connectdb from "@/database/connection";
import Standard from "@/models/standard";
import { NextResponse } from "next/server"

export async function POST (request){
    const{title, desc} = await request.json();
    await connectdb();
    await Standard.create({title, desc});
    return NextResponse.json({message:"Standard created"},{status:201});
}

export async function GET (){
    await connectdb();
    const standard  = await Standard.find();
    return NextResponse.json({data:standard});
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get('id');
    await connectdb();
    await Standard.findByIdAndDelete(id);
    return NextResponse.json({message:"Standard Deleted"},{status:200});
}
