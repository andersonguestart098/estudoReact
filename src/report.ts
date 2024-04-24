import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import prisma from "./prisma"; // Ajuste o caminho conforme necessário

const router = express.Router();

router.post(
  "/",
  [
    body("location").isString().withMessage("Location espera uma string"),
    body("description")
      .isString()
      .isLength({ min: 5 })
      .withMessage("Description deve ter mais de 5 caracteres"),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { location, description } = req.body;
    try {
      const report = await prisma.report.create({
        data: {
          location,
          description,
        },
      });
      res.status(201).json(report);
    } catch (error) {
      console.error("Falha ao criar report: ", error);
      res.status(500).json({ error: "Falha ao criar report:" });
    }
  }
);

router.get("/", async (req: Request, res: Response) => {
  try {
    const reports = await prisma.report.findMany();
    res.json(reports);
  } catch (error) {
    console.error("Failed to fetch reports: ", error);
    res.status(500).json({ error: "Failed to fetch reports" });
  }
});

export default router;
