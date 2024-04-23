import React from "react";
import imagem from "./dengue.jpg";
import aedes from "./aedes.png";
import "./App.css";

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
      <br />
      <div className="content">
        <p>
          Porto Alegre tem 1.526 casos confirmados de dengue em 2024. Do total,
          1.253 foram contraídos na cidade (autóctones), 216 são importados
          (infecção fora da cidade) e 57 não têm local de infecção determinado.
          O total de ocorrências suspeitas notificadas à Equipe de Vigilância de
          Doenças Transmissíveis da Secretaria Municipal de Saúde (SMS) alcança
          15.178 até 6 de abril. Em 2023, no mesmo período, foram 1.973
          notificações e 956 casos confirmados.
        </p>
      </div>
      <br />
      <br />
      <div className="conteudo2">
        <img src={aedes} alt="" />
      </div>
      <section
        style={{
          width: "100%",
          height: "calc(100vh - 400px)",
          marginBottom: "20px",
        }}
      >
        <div style={{ width: "100%", height: "100%" }}>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1c9ftVbneIgWkitKZWsMqn1l9Wf9xT9Tm&ehbc=2E312F"
            style={{ width: "100%", height: "100%" }}
          ></iframe>
        </div>
      </section>
    </section>
  );
}

export default ContentSection;
