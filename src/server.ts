import express from "express";
import cors from "cors";
import report from "./report"; // Certifique-se de que o caminho está correto
import reportsRoutes from "./report";
import reportRoutes from "./reportRoutes";

const app = express();
const PORT = process.env.PORT || 3001;

// Aplica o middleware CORS
app.use(cors());

// Aplica o middleware para parsear JSON
app.use(express.json());

// Utiliza o router de report
app.use("/report", report);

app.use("/reports", reportsRoutes);

app.use("/reports", reportRoutes);

// Inicia o servidor na porta especificada
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
