import * as React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Styled component para os botões com efeito de sublinhado
const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: "#FFF", // White color for the icon buttons
  padding: 0, // Reduce padding if necessary
  marginLeft: "auto", // Push icon to the right
  fontSize: "18px",
  "&:hover span": {
    textDecoration: "underline", // Sublinhado ao passar o mouse
  },
}));

// Styled component para o ícone de expansão ao lado do texto
const ExpandIconButton = styled(IconButton)({
  color: "#FFF", // Change icon color to white
  padding: 0, // Reduce padding to align properly
  marginRight: 8, // Space before the text
});

export default function AccordionExpandDefault() {
  const urls: string[] = [
    "https://example.com/dedetizacao",
    "https://example.com/faq",
    "https://example.com/aedes",
    "https://example.com/prevencao",
    "https://example.com/sintomas",
    "https://example.com/reportar",
    "https://example.com/campanhas",
    "https://example.com/tratamento",
    "https://example.com/estatisticas",
  ];

  const labels: string[] = [
    "Contatar Serviço de Dedetização",
    "Perguntas Frequentes",
    "Informações sobre o Aedes",
    "Prevenção da Dengue",
    "Sintomas da Dengue",
    "Reportar Focos do Mosquito",
    "Campanhas de Saúde Pública",
    "Centros de Tratamento",
    "Estatísticas de Dengue",
  ];

  return (
    <div>
      <Accordion sx={{ backgroundColor: "#39393D" }}>
        <AccordionSummary
          aria-controls="panel2-content"
          id="panel2-header"
          expandIcon={
            <ExpandIconButton aria-label="Show more"></ExpandIconButton>
          }
        >
          <Typography
            sx={{
              fontFamily: '"Josefin Sans", sans-serif',
              fontSize: "25px",
              color: "#FFF",
              margin: 0,
              fontWeight: "normal",
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              paddingLeft: "10px",
            }}
          >
            Serviços
            <ExpandMoreIcon />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            {urls.map((url, index) => (
              <Grid item xs={4} key={index}>
                <StyledIconButton
                  onClick={() => window.open(url, "_blank")}
                  aria-label={labels[index]}
                >
                  <span>{labels[index]}</span>{" "}
                  {/* Envolve o texto em um span para o sublinhado */}
                </StyledIconButton>
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
