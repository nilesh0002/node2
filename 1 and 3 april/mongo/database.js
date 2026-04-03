import mongoose from "mongoose";

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/firstdb")
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ Connection error:", err));

// Define Schema
const userSchema = new mongoose.Schema({
  name: String,
  regno: String,
  contact: String,
  email: String,
  cgpa: Number,
  attendance: Number,
});

// Create Model
const User = mongoose.model("User", userSchema);   // ← This creates collection "users"

// Create new document
const newStudent = new User({
  name: "John Doe",
  regno: "123456",
  contact: "1234567890",
  email: "john.doe@example.com",
  cgpa: 3.5,
  attendance: 90
});

// Save to database
newStudent.save()
  .then((doc) => {
    console.log("✅ Data saved successfully!");
    console.log(doc);
    // Optional: Close connection after saving
    // mongoose.connection.close();
  })
  .catch((err) => {
    console.error("❌ Error saving data:", err);
  });