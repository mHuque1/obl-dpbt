import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetalleDeClinica from "./detalle_de_clínica/detalle_de_clínica";
import ListaDeResultados from "./lista_de_resultados_(básica)/lista_de_resultados";
import Matching from "./sistema_de_match_(formulario)/matching";
import BusquedaInicial2 from "./búsqueda_inicial/busqueda_inicial_2";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BusquedaInicial2 />} />
        <Route path="/busqueda-inicial" element={<BusquedaInicial2 />} />
        <Route path="/clinica/:id" element={<DetalleDeClinica />} />
        <Route path="/lista-de-resultados" element={<ListaDeResultados />} />
        <Route path="/matching" element={<Matching />} />
      </Routes>
    </BrowserRouter>
  );
}
