import React from "react";
import Navbar from "./Navbar";
import ContentSection from "./ContentSection";
import "./App.css";
import DataGridDemo from "./tabela";
import ContentSection2 from "./ContentSection2";
import ContentSection3 from "./ContentSection3";
import ReportForm from "./RportForm";
import ReportTable from "./tabelaDados";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContentSection />
      <DataGridDemo />
      <ContentSection2 />
      <ContentSection3 />
      <ReportForm />
      <ReportTable />
    </div>
  );
}

export default App;
