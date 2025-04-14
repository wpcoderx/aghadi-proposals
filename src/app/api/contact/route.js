import Contact from "@/models/Contact";
import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";


export async function POST(request) {
  try {
    await dbConnect();

    const body = await request.json();
    const { contactName, contactEmail, contactMessage } = body;

    if (!contactName || !contactEmail) {
      return NextResponse.json(
        { status: false, message: "Name and email are required." },
        { status: 400 }
      );
    }

    const newContact = new Contact({
      contactName,
      contactEmail,
      contactMessage,
    });

    await newContact.save();

    return NextResponse.json(
      { status: true, message: "Thanks! We will contact you soon.", data: newContact },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { status: false, message: "There is some issue on contact.." },
      { status: 500 }
    );
  }
}

export async function GET() {
  await dbConnect();

  try {
    const list = await Contact.find({}).sort({ createdAt: -1 }); // Sort by newest first
    return NextResponse.json(
      { 
        status: true, 
        message: "Contact list retrieved successfully", 
        data: list 
      },
      { status: 200 }
    );
  } catch(error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { 
        status: false, 
        message: "Failed to retrieve contact submissions",
        error: error.message 
      },
      { status: 500 }
    );
  }
}
