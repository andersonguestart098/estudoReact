import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ContentSection from "./ContentSection";
import DataGridDemo from "./tabela";
import ContentSection2 from "./ContentSection2";
import ContentSection3 from "./ContentSection3";
import ReportTable from "./tabelaDados";
import FloatingButton from "./botaoFormulario";
import ReportForm from "./RportForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ContentSection />
                <DataGridDemo />
                <ContentSection2 />
                <ContentSection3 />
                <ReportTable />
              </>
            }
          />
          <Route path="/report-form" element={<ReportForm />} />
        </Routes>
        <FloatingButton />
      </div>
    </Router>
  );
}

export default App;
