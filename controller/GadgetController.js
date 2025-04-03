import prisma from "../DB/db.config.js";
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

const prismaClient = new PrismaClient(); // Initialize Prisma Client

// GET: Retrieve all gadgets with random success probability
export const getGadgets = async (req, res) => {
  try {
    const gadgets = await prisma.gadgets.findMany();
    const gadgetsWithProbability = gadgets.map((gadget) => ({
      ...gadget,
      successProbability: `${Math.floor(Math.random() * 100)}%`,
    }));
    res.json(gadgetsWithProbability);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch gadgets" });
  }
};

// POST: Add a new gadget
// export const addGadget = async (req, res) => {
//   try {
//     const { name } = req.body;
//     if (!name) return res.status(400).json({ error: "Name is required" });

//     const newGadget = await prisma.gadgets.create({
//       data: {
//         id: uuidv4(),
//         name,
//         status: "Available", // Use string directly since Enums are stored as strings
//       },
//     });

//     res.json(newGadget);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to add gadget" });
//   }
// };
// export const addGadget = async (req, res) => {
//     try {
//       const { name } = req.body;
//       if (!name) return res.status(400).json({ error: "Name is required" });
  
//       const newGadget = await prisma.gadgets.create({
//         data: {
//           id: uuidv4(),
//           name,
//           status: "Available",
//         },
//       });
  
//       res.json(newGadget);
//     } catch (error) {
//       console.error("❌ Error adding gadget:", error);  // Log actual error
//       res.status(500).json({ error: "Failed to add gadget", details: error.message });
//     }
//   };


// export const addGadget = async (req, res) => {
//     try {
//       console.log("📩 Received body:", req.body); // Debugging log
  
//       const { name } = req.body;
//       if (!name) return res.status(400).json({ error: "Name is required" });
  
//       const newGadget = await prisma.gadgets.create({
//         data: { name, status: "Available" },
//       });
  
//       res.json(newGadget);
//     } catch (error) {
//       console.error("❌ Error adding gadget:", error);
//       res.status(500).json({ error: "Failed to add gadget", details: error.message });
//     }
//   };

export const addGadget = async (req, res) => {
    try {
      console.log("📩 Received body:", req.body); // Debugging log
  
      const { name } = req.body;
      if (!name) return res.status(400).json({ error: "Name is required" });
  
      const newGadget = await prisma.gadgets.create({
        data: { name, status: "Available" },
        
      });
  
      res.status(201).json(newGadget);
    } catch (error) {
      console.error("❌ Error adding gadget:", error);
      res.status(500).json({ error: "Failed to add gadget", details: error.message });
    }
  };
  
// PATCH: Update gadget status
export const updateGadget = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // Validate status
    const validStatuses = ["Available", "Deployed", "Destroyed", "Decommissioned"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: "Invalid status value" });
    }

    const updatedGadget = await prisma.gadgets.update({
      where: { id },
      data: { status },
    });

    res.json(updatedGadget);
  } catch (error) {
    res.status(500).json({ error: "Failed to update gadget" });
  }
};

// DELETE: Mark gadget as "Decommissioned"
export const decommissionGadget = async (req, res) => {
    try {
      const { id } = req.params;
  
      const updatedGadget = await prisma.gadgets.update({
        where: { id },
        data: { 
          status: "Decommissioned",
          decommissionedAt: new Date(),  // Store current timestamp
        },
      });
  
      res.json(updatedGadget);
    } catch (error) {
      console.error("❌ Failed to decommission gadget:", error);
      res.status(500).json({ error: "Failed to decommission gadget", details: error.message });
    }
  };

// POST: Self-destruct a gadget
export const selfDestructGadget = async (req, res) => {
  try {
    const { id } = req.params;
    const confirmationCode = Math.random().toString(36).substring(2, 8).toUpperCase();

    await prisma.gadgets.update({
      where: { id },
      data: { status: "Destroyed" }, // Use string
    });

    res.json({ message: "Self-destruct sequence initiated!", confirmationCode });
  } catch (error) {
    res.status(500).json({ error: "Failed to trigger self-destruct" });
  }
};
