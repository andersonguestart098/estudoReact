import React from "react";
import Navbar from "./Navbar";
import ContentSection from "./ContentSection";
import "./App.css";
import DataGridDemo from "./tabela";
import ContentSection2 from "./ContentSection2";
import SelectVariants from "./botaoDropdown";
import ContentSection3 from "./ContentSection3";
import Acordion from "./acordion";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContentSection />
      <DataGridDemo />
      <ContentSection2 />
      <ContentSection3 />
    </div>
  );
}

export default App;
