import React from "react";
import imagem from "./dengue.jpg";
import aedes from "./aedes.png";
import grafico from "./grafico.png";
import "./App.css";

function ContentSection2() {
  return (
    <section className="content-section2">
      <div className="content2">
        <h2>Infestação</h2>
        <p>
          Entre os dias 31/03 e 06/04/2024 (semana epidemiológica 14/2024), o
          Índice Médio de Fêmeas de Aedes aegypti (IMFA) esteve no nível
          CRÍTICO, com índice 1,79 (Gráfico abaixo). Foram coletadas 1495 fêmeas
          em 524 armadilhas das 835 vistoriadas, representando 62,75% das
          armadilhas positivas para o mosquito.
        </p>
        <img
          src={grafico}
          alt="iconeServicos"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </section>
  );
}

export default ContentSection2;
