import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import axios from "axios";

function ReportTable() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    async function fetchReports() {
      try {
        const response = await fetch("https://localhost:3001/reports");
        const data = await response.json();
        setReports(data);
      } catch (error) {
        console.error("Failed to fetch reports:", error);
      }
    }

    fetchReports();
  }, []);

  const handleProcessRowUpdate = async (newRow: any) => {
    try {
      const response = await axios.patch(
        `https://localhost:3001/reports/${newRow.id}`,
        newRow
      );
      return response.data;
    } catch (error) {
      console.error("Failed to update report", error);
      return newRow;
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "localizacao", headerName: "Localização", width: 150 },
    { field: "tipoArea", headerName: "Tipo de Área", width: 150 },
    { field: "descricao", headerName: "Descrição", width: 150 },
    { field: "tipo", headerName: "Tipo", width: 150 },
    { field: "numeroTelefone", headerName: "Número de Telefone", width: 150, hide: true },
  ];

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
        flexWrap: "wrap",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "800px" }}>
        <h2 style={{ paddingLeft: "10px" }}>Ocorrências de Dengue</h2>
        <div style={{ width: "100%" }}>
          <DataGrid
            rows={reports}
            columns={columns}
            pagination
            checkboxSelection
            disableRowSelectionOnClick
            processRowUpdate={handleProcessRowUpdate}
          />
        </div>
      </Box>
    </Box>
  );
}

export default ReportTable;
