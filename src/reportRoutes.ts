// src/routes/reportRoutes.js

import express from "express";
import prisma from "./prisma"; // Ajuste o caminho conforme necessário

const router = express.Router();

// Rota para atualizar um registro específico
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { location, description } = req.body;

  try {
    const updatedReport = await prisma.report.update({
      where: { id: Number(id) },
      data: {
        location,
        description,
      },
    });

    res.json(updatedReport);
  } catch (error) {
    console.error("Failed to update report: ", error);
    res.status(500).json({ error: "Failed to update report" });
  }
});

export default router;
