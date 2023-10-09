import connectMongoDB from "@/libs/mongodb"
import Topic from "@/models/topic"
import { NextResponse } from "next/server"

export async function POST(requset) {
    const { title, description } = await requset.json()
    await connectMongoDB()
    await Topic.create({title, description})
    return NextResponse.json({message: "Top created"},{status:201})
}

export async function GET(requset) {
    await connectMongoDB()
    const topics = await Topic.find()
    return NextResponse.json({topics})
}

export async function DELETE(requset) {
    const id = requset.nextUrl.searchParams.get("id")
    await connectMongoDB()
    await Topic.findByIdAndDelete(id)
    return NextResponse.json({message:"Topic deleted"},{status:200})
}