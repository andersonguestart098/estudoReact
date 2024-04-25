import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import axios from "axios";
import LiveIndicator from "./antena";

function ReportTable() {
  const [reports, setReports] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    async function fetchReports() {
      try {
        const response = await axios.get("http://localhost:3001/reports");
        setReports(response.data);
      } catch (error) {
        console.error("Failed to fetch reports", error);
      }
    }
    fetchReports();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 90, hide: isMobile },
    {
      field: "localizacao",
      headerName: "Localização",
      width: 150,
      hide: isMobile,
    },
    { field: "tipoArea", headerName: "Tipo de Área", width: 130 },
    { field: "descricao", headerName: "Descrição", width: 200, flex: 1 },
    { field: "tipo", headerName: "Tipo", width: 120, hide: isMobile },
    {
      field: "numeroTelefone",
      headerName: "Número de Telefone",
      width: 160,
      hide: isMobile,
    },
  ];

  return (
    <Box sx={{ width: "100%", height: "400px", marginTop: 3 }}>
      <LiveIndicator />
      <DataGrid
        rows={reports}
        columns={columns}
        pagination
        checkboxSelection
        disableRowSelectionOnClick
        autoHeight // Ajuda a ajustar a altura automaticamente
        sx={{
          "& .MuiDataGrid-virtualScroller": {
            overflowX: "auto",
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: theme.palette.background.default,
          },
        }}
      />
    </Box>
  );
}

export default ReportTable;
