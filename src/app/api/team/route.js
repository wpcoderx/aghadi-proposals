import User from "@/models/User";
import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();

    const user = await User.find();

    return NextResponse.json(
      { success: true, message: "Users fetched successfully", data: user },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET /api/team error:", error);
    return NextResponse.json(
      { success: false, message: "Error fetching users" },
      { status: 500 }
    );
  }
}
