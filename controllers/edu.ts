import connectdb from "@/database/connection";
import mongoose from "mongoose";

export interface IEdu {
  _id: string;
  degree: string;
  place: string;
  marks: string;
}

const EduSchema = new mongoose.Schema({
  degree: String,
  place: String,
  marks: String,
});

const Education =
  mongoose.models.Education ||
  mongoose.models.education ||
  mongoose.model("Education", EduSchema);

export const FALLBACK_EDUS: IEdu[] = [
  {
    _id: "6523f28ad1d11d93eeb402c7",
    degree: "Diploma in Information Technology",
    place: "Tapi Diploma Engineering College, Surat (GTU)",
    marks: "CGPA: 8.35 / 10.0",
  },
  {
    _id: "6523f273d1d11d93eeb402c4",
    degree: "Secondary School Certificate (10th GSEB)",
    place: "D.R. Rana School, Surat (GSEB)",
    marks: "Percentile Rank: 89.80",
  },
];

export default async function getEdus(): Promise<IEdu[]> {
  try {
    await connectdb();
    const docs = await Education.find().lean();
    if (docs && docs.length > 0) {
      return JSON.parse(JSON.stringify(docs));
    }
  } catch (err) {
    console.warn("Direct DB edus fetch fallback triggered:", err);
  }

  return FALLBACK_EDUS;
}
