import mongoose from "mongoose";
import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";

export async function GET(){

    try{
        await dbConnect();

        const isConnected = mongoose.connection.readyState === 1;
        
        return NextResponse.json({ status:isConnected ? "Connected" : "Not Connected" });
        //success: true, message: 'Database connected successfully!!!!'

    }catch(error){
        return NextResponse.json({ status: "Error", message: error.message });
    }
}