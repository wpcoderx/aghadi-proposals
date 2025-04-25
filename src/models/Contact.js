import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  contactName: {
    type: String,
    required: true,
    trim: true,
  },
  contactEmail: {
    type: String,
    required: true,
    trim: true,
  },
  contactMessage: {
    type: String,
    trim: true,
    required: false
  },
}, { timestamps: true });

export default mongoose.models.Contact || mongoose.model("Contact", ContactSchema);
