import React from "react";
import { IconButton, Tooltip, useTheme, useMediaQuery } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
import { styled, keyframes } from "@mui/system";
import { Link } from "react-router-dom";

const blink = keyframes`
  50% {
    opacity: 0.5;
  }
`;

// Adaptação para a posição do botão dependendo do tamanho da tela
const BlinkIconButton = styled(IconButton)(({ theme }) => ({
  animation: `${blink} 1.5s linear infinite`,
  position: "fixed",
  bottom: theme.spacing(2.5),
  right: theme.spacing(2.5),
  zIndex: 1000,
}));

const FloatingButton = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    
      <Link to="/login" style={{ textDecoration: "none" }}>
        <BlinkIconButton
          color="error"
          sx={{
            right: isMobile ? theme.spacing(1) : theme.spacing(2.5), // Ajusta a posição direita para dispositivos móveis
          }}
        >
          <ForumIcon style={{ fontSize: 30 }} />
        </BlinkIconButton>
      </Link>
    
  );
};

export default FloatingButton;
