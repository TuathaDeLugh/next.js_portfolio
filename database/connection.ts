import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  // Warn if MONGO_URI is not set in environment
  console.warn("MONGO_URI environment variable is not defined");
}

let isConnected = false;

export default async function connectdb(): Promise<typeof mongoose | undefined> {
  if (isConnected) {
    return mongoose;
  }

  try {
    if (!MONGO_URI) {
      throw new Error("MONGO_URI is not defined");
    }
    const db = await mongoose.connect(MONGO_URI);
    isConnected = db.connections[0].readyState === 1;
    console.log("Database connected");
    return db;
  } catch (e) {
    console.error("Database connection error:", e);
  }
}
