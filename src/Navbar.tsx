import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ImagemLogo from "./logoPrefeitura.png";
import MultipleSelectPlaceholder from "./botaoDropdown";
import menu from "./menu.png";
import iconeServicos from "./icone-cartaservicos.png";
import iconeComunidade from "./iconeComunidade.png";
import iconeCasa from "./iconecasa.png";
import Acordion from "./acordion";
import logoPrefeitura from "./logoPrefeitura.svg";
import umCincoMeia from "./156.svg";

const settings = ["Entrar em contato", "Visitar grupo de apoio", "Mapas"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#39393D" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={logoPrefeitura}
            alt="Logo"
            style={{ marginRight: "10px", width: "35px" }}
          />

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Button
            component="a"
            href="#iconeServicos"
            sx={{ marginRight: "10px" }}
          >
            <img
              src={iconeServicos}
              alt="iconeServicos"
              style={{ width: "45px" }}
            />
          </Button>
          <Button
            component="a"
            href="#iconeComunidade"
            sx={{ marginRight: "10px" }}
          >
            <img
              src={iconeComunidade}
              alt="iconeComunidade"
              style={{ width: "45px" }}
            />
          </Button>
          <Button component="a" href="#iconeCasa">
            <img src={iconeCasa} alt="iconeCasa" style={{ width: "45px" }} />
          </Button>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            ></IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            ></Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
          <Box
            sx={{
              flexGrow: 0,
              img: {
                marginRight: "10px",
                width: "80px", // Fixa a largura em 80px
                height: "auto", // Ajusta a altura automaticamente
                maxWidth: "100%", // Garante que a imagem não exceda a largura do contêiner
                maxHeight: "100%", // Garante que a imagem não exceda a altura do contêiner
              },
            }}
          >
            <img src={umCincoMeia} alt="Logo" />
          </Box>
        </Toolbar>
      </Container>
      <Acordion />
    </AppBar>
  );
}
export default ResponsiveAppBar;
