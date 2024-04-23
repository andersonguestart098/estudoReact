import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import mapaDengue from "./mapaDengue.png";

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "regiao",
    headerName: "Região",
    width: 200,
    editable: true,
  },
  {
    field: "incidencia",
    headerName: "Insidência",
    width: 150,
    editable: true,
  },
  {
    field: "alerta",
    headerName: "Alerta",
    width: 150,
    renderCell: (params) => (
      <img
        src={`${params.value}.png`}
        alt={`Image ${params.value}`}
        style={{ width: "40px", height: "40px" }}
      />
    ),
  },
];

const rows = [
  { id: 1, regiao: "Restinga", incidencia: "Alta", alerta: "circulo" },
  { id: 2, regiao: "São João", incidencia: "Alta", alerta: "circulo" },
  { id: 3, regiao: "Partenon", incidencia: "Alta", alerta: "circulo" },
  { id: 4, regiao: "Sarandi", incidencia: "Alta", alerta: "circulo" },
  { id: 5, regiao: "Higienópolis", incidencia: "Alta", alerta: "circulo" },
  { id: 6, regiao: "Bom Jesus", incidencia: "Alta", alerta: "circulo" },
  { id: 7, regiao: "Cristal", incidencia: "Alta", alerta: "circulo" },
  { id: 8, regiao: "Passo D’Areia", incidencia: "Alta", alerta: "circulo" },
  { id: 9, regiao: "Centro Histórico", incidencia: "Alta", alerta: "circulo" },
  { id: 10, regiao: "Cavalhada", incidencia: "Alta", alerta: "circulo" },
];

export default function DataGridDemo() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        backgroundColor: "#f0f0f0",
        padding: "20px",
        flexWrap: "wrap", // Permite que os itens sejam quebrados em várias linhas
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "800px" }}>
        <h2 style={{ paddingLeft: "10px" }} className="tabelaH2">
          Bairros com maiores Insidências
        </h2>
        <div style={{ width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pagination
            checkboxSelection
            disableRowSelectionOnClick
          />
        </div>
      </Box>
      <img
        src={mapaDengue}
        alt="iconeServicos"
        style={{
          width: "600px",
          maxWidth: "100%",
          marginTop: "95px",
        }}
      />
    </Box>
  );
}
