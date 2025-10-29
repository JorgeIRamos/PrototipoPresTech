import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrestatarioLayout from "./components/PrestatarioLayout";
import PrestamistaLayout from "./components/PrestamistaLayout";
import PrestatarioDashboard from "./pages/Prestatario/PrestatarioDashboard";
import PrestamistaDashboard from "./pages/Prestamista/PrestamistaDashboard";
import PrestamistaCliente from "./pages/Prestamista/PrestamistaCliente";
import PrestamistaPrestamos from "./pages/Prestamista/PrestamistaPrestamos";
import PrestamistaCrearOferta from "./pages/Prestamista/PrestamistaCrearOferta";
import PrestamistaReporte from "./pages/Prestamista/PrestamistaReporte";
import PrestatarioOfertaPrestamos from "./pages/Prestatario/PrestatarioOfertaPrestamos";
import PrestatarioHistorial from "./pages/Prestatario/PrestatarioHistorial";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Prestamista" element={<PrestamistaLayout />}>
          <Route path="/Prestamista/Dashboard" element={<PrestamistaDashboard />} />
          <Route path="/Prestamista/Cliente" element={<PrestamistaCliente />} />
          <Route path="/Prestamista/Prestamos" element={<PrestamistaPrestamos />} />
          <Route path="/Prestamista/Prestamos/CrearOferta" element={<PrestamistaCrearOferta />} />
          <Route path="/Prestamista/Reportes" element={<PrestamistaReporte />} />
        </Route>
        <Route path="/Prestatario" element={<PrestatarioLayout />}>
          <Route path="/Prestatario/Dashboard" element={<PrestatarioDashboard />} />
          <Route path="/Prestatario/OfertaPrestamos" element={<PrestatarioOfertaPrestamos />} />
          <Route path="/Prestatario/Historial" element={<PrestatarioHistorial />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
