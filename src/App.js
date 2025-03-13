// src/App.js

import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Inicio } from "./components/Inicio";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { ModalDialog } from "./components/ModalDialog";

import { Partes } from "./components/partes/Partes";
// import { Posiciones } from "./components/Posiciones";

// Importa createTheme y ThemeProvider
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Crear un tema con Segoe UI
const theme = createTheme({
  typography: {
    fontFamily: "'Segoe UI', sans-serif", // Establecer Segoe UI como la fuente
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        {" "}
        {/* Envolver toda la aplicación con ThemeProvider */}
        <BrowserRouter>
          <ModalDialog />
          <NavBar />
          <div className="divBody">
            <Routes>
              <Route path="/partes" element={<Partes />} />
              <Route path="/inicio" element={<Inicio />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
