import "dotenv/config";
import express from "express";
import gadgetRoutes from "./routes/gadgetRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ JSON middleware (must be before routes)
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Supports form data

// Test root route



app.get("/", (req, res) => {
  return res.send("Hello World!");
});

// ✅ Register routes
app.use("/api/gadgets", gadgetRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
