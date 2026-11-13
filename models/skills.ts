import mongoose, { Schema, Model } from "mongoose";
import { ISkill } from "@/types";

const SkillSchema = new Schema<ISkill>({
  lang: { type: String, required: true },
});

const Skill: Model<ISkill> =
  mongoose.models.Skill || mongoose.model<ISkill>("Skill", SkillSchema);

export default Skill;
