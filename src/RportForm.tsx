import { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
  Box,
  TextField,
  Button,
  IconButton,
  Tooltip,
  AlertColor,
} from "@mui/material";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { styled, keyframes } from "@mui/system";
import axios from "axios";
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";

function ReportForm() {
  const [localizacao, setLocation] = useState("");
  const [tipoArea, setAreaType] = useState("");
  const [descricao, setDescription] = useState("");
  const [tipo, setSymptoms] = useState("");
  const [numeroTelefone, setPhoneNumber] = useState("");
  const [erroTelefone, setPhoneError] = useState("");

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
        },
        (error) => {
          console.error("Error Code = " + error.code + " - " + error.message);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const blink = keyframes`50% { opacity: 0.5; }`;
  const BlinkIconButton = styled(IconButton)({
    animation: `${blink} 1s linear infinite`,
  });

  const handlePhoneChange = (event: any) => {
    const { value } = event.target;
    setPhoneNumber(value);
    setPhoneError(validatePhone(value) ? "" : "Número de telefone inválido.");
  };

  const validatePhone = (telefone: any) =>
    /^\(?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/.test(telefone);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const reportData = {
      localizacao,
      tipoArea,
      descricao,
      tipo,
      numeroTelefone,
    };
    try {
      const response = await axios.post(
        "https://localhost:3001/report",
        reportData
      );
      const result = response.data; // Axios já faz o parse do JSON

      if (response.status === 201) {
        setOpenSnackbar({
          open: true,
          message: "Relato enviado com sucesso!",
          severity: "success",
        });

        // Reset do formulário
        setLocation("");
        setAreaType("");
        setDescription("");
        setSymptoms(""); // Atualize de acordo com o tipo correto de estado, se for necessário
        setPhoneNumber("");
      } else {
        setOpenSnackbar({
          open: true,
          message: "Falha ao enviar relato: " + result.message,
          severity: "error",
        });
      }
    } catch (error: any) {
      console.error("Erro ao enviar relato: ", error);
      setOpenSnackbar({
        open: true,
        message:
          "Erro ao enviar relato: " +
          (error.response?.data.message || "Erro desconhecido"),
        severity: "error",
      });
    }
  };

  const [openSnackbar, setOpenSnackbar] = useState<{
    open: boolean;
    severity: AlertColor; // Use AlertColor type
    message: string;
  }>({
    open: false,
    severity: "success", // Default value as one of 'error', 'warning', 'info', 'success'
    message: "",
  });

  const handleCloseSnackbar = (
    event: React.SyntheticEvent<any> | Event, // Accept both React synthetic events and regular DOM events
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar({ ...openSnackbar, open: false });
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ mt: 4 }}>
      <h2>Formulário de Relato de Focos do Mosquito Aedes</h2>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          label="Localização"
          fullWidth
          margin="normal"
          value={localizacao}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <Tooltip title="Localização automática" placement="top" arrow>
          <BlinkIconButton onClick={getLocation} color="primary">
            <MyLocationIcon />
          </BlinkIconButton>
        </Tooltip>
        <TextField
          label="Descrição"
          fullWidth
          margin="normal"
          multiline
          value={descricao}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="tipo-label">Área</InputLabel>
          <Select
            labelId="tipo-label"
            id="tipo-select"
            value={tipoArea}
            onChange={(e) => setAreaType(e.target.value)}
            label="Tipo de Área..."
            required
          >
            <MenuItem value="Residêncial">Residêncial</MenuItem>
            <MenuItem value="Comercial">Comercial</MenuItem>
            <MenuItem value="Terreno Baldio">Terreno Baldio</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel id="tipo-label">Situação</InputLabel>
          <Select
            labelId="tipo-label"
            id="tipo-select"
            value={tipo}
            onChange={(e) => setSymptoms(e.target.value)}
            label="Tipo de Área..."
            required
          >
            <MenuItem value="Água Parada">Água Parada</MenuItem>
            <MenuItem value="Lixo Acumulado">Lixo Acumulado</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Número de Telefone"
          fullWidth
          margin="normal"
          value={numeroTelefone}
          onChange={handlePhoneChange}
          error={!!erroTelefone}
          helperText={erroTelefone || "Digite um número de telefone válido."}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Enviar Relato
        </Button>
        <Snackbar
          open={openSnackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={openSnackbar.severity}
            sx={{ width: "100%" }}
          >
            {openSnackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
}

export default ReportForm;
function setOpenSnackbar(arg0: {
  open: boolean;
  message: string;
  severity: string;
}) {
  throw new Error("Function not implemented.");
}
