import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema(
  {
    lang: String,
  },
);

const Skill = mongoose.models.Skill || mongoose.model("Skill", SkillSchema);

export default Skill;