import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import prisma from "./prisma";

const router = express.Router();

router.post(
  "/",
  [
    body("localizacao")
      .isString()
      .withMessage("localizacao deve ser uma string"),
    body("tipoArea").isString().withMessage("tipoArea deve ser uma string"),
    body("descricao").isString().withMessage("descricao deve ser uma string"),
    body("tipo").isString().withMessage("descricao deve ser uma string"),

    body("numeroTelefone")
      .isString()
      .isLength({ min: 11 })
      .withMessage("numeroTelefone deve ter pelo menos 11 caracteres"),
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
    } catch (error: any) {
      console.error("Falha ao criar report: ", error);
      res
        .status(500)
        .json({ error: "Falha ao criar report", details: error.message });
    }
  }
);

router.get("/", async (req: Request, res: Response) => {
  try {
    const reports = await prisma.report.findMany();
    res.json(reports);
  } catch (error: any) {
    console.error("Failed to fetch reports: ", error);
    res
      .status(500)
      .json({ error: "Failed to fetch reports", details: error.message });
  }
});

export default router;
