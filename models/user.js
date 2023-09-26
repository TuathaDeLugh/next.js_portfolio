import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: String,
    username: String,
    password: String,
  },
  { timestamps: true }
);
const User = mongoose.models.Users || mongoose.model("User",UserSchema);
export default User;
