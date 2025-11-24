import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Filtros from "./pages/Filtros";
import Comparador from "./pages/Comparador";
import DetalleClinica from "./pages/DetalleClinica";
import Reseñas from "./pages/Reseñas";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/filtros" element={<Filtros />} />
        <Route path="/comparador" element={<Comparador />} />
        <Route path="/clinica/:id" element={<DetalleClinica />} />
        <Route path="/reseñas/:id" element={<Reseñas />} />
      </Routes>
    </BrowserRouter>
  );
}
