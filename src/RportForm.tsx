import React, { useState } from "react";

function ReportForm() {
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault(); // Previne o comportamento padrão de submissão de formulários

    // Cria um objeto com os dados do formulário
    const reportData = {
      location,
      description,
    };

    // Configuração da requisição POST
    try {
      const response = await fetch("http://localhost:3001/report", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reportData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Relato enviado com sucesso!");
        setLocation("");
        setDescription("");
      } else {
        alert("Falha ao enviar relato: " + result.message);
      }
    } catch (error) {
      if (error instanceof Error) {
        alert("Erro ao enviar relato: " + error.message);
      } else {
        alert("Erro desconhecido ao enviar relato");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Relatar Foco de Dengue</h2>
      <label>
        Localização:
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </label>
      <label>
        Descrição:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <button type="submit">Enviar Relato</button>
    </form>
  );
}

export default ReportForm;
