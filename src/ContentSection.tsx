// ContentSection.js
import React from "react";
import imagem from "./dengue.jpg";
import aedes from "./aedes.png";

function ContentSection() {
  return (
    <section className="content-section">
      <div className="content">
        <h2>Alerta de Dengue: Proteja-se e Previna a Propagação</h2>

        <p>
          A dengue é uma doença viral transmitida principalmente pela picada do
          mosquito Aedes aegypti. Com a temporada de chuvas e o aumento da
          temperatura, os casos de dengue estão aumentando na nossa região,
          tornando essencial a conscientização e a tomada de medidas
          preventivas.
        </p>
        <img src={imagem} alt="Placeholder" />
      </div>
      <section>
        <div className="conteudo2">
          <img src={aedes} alt="" />
        </div>
      </section>
    </section>
  );
}

export default ContentSection;
