import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { Box, useTheme, useMediaQuery } from "@mui/material";

export default function TitlebarImageList() {
  const theme = useTheme();
  const isXSmall = useMediaQuery(theme.breakpoints.down("xs"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  const getCols = () => {
    if (isXSmall) return 1; // 1 coluna para telas extra pequenas
    if (isSmall) return 2; // 2 colunas para telas pequenas
    if (isMedium) return 3; // 3 colunas para telas médias
    return 4; // 4 colunas para telas grandes
  };

  const itemData = [
    {
      img: "/dengue1.jpg",
      title: "Alerta",
      author:
        "Porto Alegre decreta situação de emergência para enfrentamento da dengue",
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: "/dengue2.jpg",
      title: "Tenha cuidado",
      author: "Saúde confirma 2.227 casos de dengue na Capital em 2024",
    },
    {
      img: "/dengue3.jpg",
      title: "Prefeitura tomando medidas",
      author:
        "Dengue: Saúde aplica inseticida em ruas da Tristeza nesta quinta-feira",
    },
    {
      img: "/dengue4.jpg",
      title: "Dedetização contra dengue",
      author: "Saúde faz pulverização no Jardim do Salso nesta quarta-feira",
      cols: 2,
    },
  ];

  return (
    <Box className="content-section3">
      <ImageList
        sx={{
          width: "100%", // 100% width for full responsiveness
          height: "auto", // Height is auto to accommodate variable row heights
        }}
        cols={getCols()} // Dynamically set number of columns based on screen size
        gap={8} // Sets the gap between images
      >
        <ImageListItem key="Subheader" cols={getCols()}>
          <ListSubheader component="div">
            <h2 className="tituloListaImagens">Notícias</h2>
          </ListSubheader>
        </ImageListItem>
        {itemData.map((item, index) => (
          <ImageListItem
            key={index}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
