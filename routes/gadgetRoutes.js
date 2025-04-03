import express from "express";
import { getGadgets, addGadget, updateGadget, decommissionGadget, selfDestructGadget } from "../controller/GadgetController.js";

const router = express.Router();

router.get("/", getGadgets); 
router.post("/", addGadget);
router.patch("/:id", updateGadget);
router.delete("/:id", decommissionGadget);
router.patch("/:id/self-destruct", selfDestructGadget);

export default router;
