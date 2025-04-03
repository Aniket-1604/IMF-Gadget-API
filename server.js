import "dotenv/config";
import express from "express";
import gadgetRoutes from "./routes/gadgetRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.get("/", (req, res) => {
  return res.send("Aniket's Assignment!");
});

app.use("/api/gadgets", gadgetRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
