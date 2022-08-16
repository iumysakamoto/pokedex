import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Noticias from "./pages/Noticias";
import Pokedex from "./pages/Pokedex";
import Pokemon from "./pages/Pokemon";
import Fila from "./pages/Fila";
import { ThemeProvider } from 'styled-components';
import theme from "./global/styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/fila/:cns" element={<Fila />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
