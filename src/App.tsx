import React from "react";
import Navbar from "./Navbar";
import ContentSection from "./ContentSection";
import "./App.css";
import DataGridDemo from "./tabela";
import ContentSection2 from "./ContentSection2";
import SelectVariants from "./botaoDropdown";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContentSection />
      <DataGridDemo />
      <ContentSection2 />
    </div>
  );
}

export default App;
