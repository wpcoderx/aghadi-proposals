import Contact from "@/models/Contact";
import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { cleanInput } from "@/lib/sanitize";

export async function POST(request) {
  try {
    await dbConnect();

    const body = await request.json();
    const { contactName, contactEmail, contactMessage } = body;

    const sanitizedContactName = cleanInput(contactName);
    const sanitizedContactEmail = cleanInput(contactEmail);
    const sanitizedContactMessage = cleanInput(contactMessage);

    if (!sanitizedContactName || !sanitizedContactEmail) {
      return NextResponse.json(
        { success: false, message: "Name and email are required." },
        { status: 400 }
      );
    }

    // email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(sanitizedContactEmail)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address." },
        { status: 400 }
      );
    }

    const newContact = new Contact({
      contactName: sanitizedContactName,
      contactEmail: sanitizedContactEmail,
      contactMessage: sanitizedContactMessage,
    });

    await newContact.save();

    return NextResponse.json(
      { success: true, message: "Thanks! We will contact you soon.", data: newContact },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, message: "There was an issue submitting the contact form.", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();

    const list = await Contact.find({}).sort({createdAt:-1});
    return NextResponse.json(
      { 
        success: true, 
        message: "Contact list retrieved successfully", 
        data: list 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to retrieve contact submissions", 
        error: error.message 
      },
      { status: 500 }
    );
  }
}
