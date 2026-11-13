import mongoose, { Schema, Model } from "mongoose";
import { IEmail } from "@/types";

const MailSchema = new Schema<IEmail>(
  {
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    details: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Email: Model<IEmail> =
  mongoose.models.Emails || mongoose.model<IEmail>("Emails", MailSchema);

export default Email;
