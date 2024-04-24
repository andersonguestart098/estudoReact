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
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Box className="content-section3">
      <ImageList
        sx={{
          width: { xs: "100%", md: "800px" },
          height: "auto",
          overflowY: "auto",
          margin: "auto",
        }}
        cols={isXs ? 2 : 4}
        rowHeight={"auto"}
        gap={12}
      >
        <ImageListItem key="Subheader" cols={isXs ? 2 : 4}>
          <ListSubheader component="div">
            <h2 className="tituloListaImagens">Notícias</h2>
          </ListSubheader>
        </ImageListItem>
        {itemData.map((item, index) => (
          <ImageListItem key={index} cols={item.featured ? 2 : 1} rows={1}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
];
