import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import prisma from "./prisma"; // Ajuste o caminho conforme necessário

const router = express.Router();

router.post(
  "/",
  [
    body("localizacao").isString().withMessage("localizacao espera uma string"),
    body("tipoArea").isString().withMessage("tipoArea espera uma string"),
    body("descricao").isString().withMessage("descricao espera um boolen"),
    body("tipo").isString().withMessage("tipo espera uma string"),
    body("numeroTelefone")
      .isString()
      .isLength({ min: 11 })
      .withMessage("numeroTelefone deve ter mais de 11 caracteres"),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { localizacao, tipoArea, descricao, tipo, numeroTelefone } = req.body;
    try {
      const report = await prisma.report.create({
        data: {
          localizacao,
          tipoArea,
          descricao,
          tipo,
          numeroTelefone,
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
