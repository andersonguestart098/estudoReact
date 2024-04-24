import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import axios from "axios";

function ReportTable() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    async function fetchReports() {
      const response = await fetch("http://localhost:3001/reports");
      const data = await response.json();
      setReports(data);
    }

    fetchReports();
  }, []);

  const handleProcessRowUpdate = async (newRow: any) => {
    try {
      const response = await axios.patch(
        `http://localhost:3001/reports/${newRow.id}`,
        newRow
      );
      return response.data;
    } catch (error) {
      console.error("Failed to update report", error);
      return newRow; // Return the old row to revert changes in the UI
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90, editable: true },
    { field: "location", headerName: "Location", width: 150, editable: true },
    {
      field: "description",
      headerName: "Description",
      width: 300,
      editable: true,
    },
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
        <h2 style={{ paddingLeft: "10px" }} className="tabelaH2">
          Ocorrências de Dengue
        </h2>
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
