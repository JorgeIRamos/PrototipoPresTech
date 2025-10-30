import { useNavigate } from "react-router-dom";
import "./PrestamistaPrestamos.css";

function PrestamistaPrestamos() {
  const navigate = useNavigate();

  const prestamos = [
    {
      cliente: "Juan Pérez",
      monto: "$5,000,000",
      tasa: "2.5%",
      cuotas: "3/12",
      vencimiento: "2026-01-15",
      estado: "Activo",
    },
    {
      cliente: "María García",
      monto: "$3,500,000",
      tasa: "3.0%",
      cuotas: "2/6",
      vencimiento: "2025-07-10",
      estado: "Activo",
    },
    {
      cliente: "Carlos Rodríguez",
      monto: "$2,000,000",
      tasa: "2.0%",
      cuotas: "18/24",
      vencimiento: "2025-01-05",
      estado: "Vencido",
    },
    {
      cliente: "Ana Martínez",
      monto: "$5,000,000",
      tasa: "2.5%",
      cuotas: "12/12",
      vencimiento: "2025-01-20",
      estado: "Pagado",
    },
  ];

  return (
    <div className="prestamos-container">
      <header className="prestamos-header">
        <div>
          <h1 className="title-1">Préstamos</h1>
          <p>Administra todos los préstamos otorgados</p>
        </div>
        <button
          className="nuevo-prestamo-btn"
          onClick={() => navigate("/Prestamista/Prestamos/CrearOferta")}
        >
          + Nuevo Préstamo
        </button>
      </header>

      <div className="busqueda-filtro">
        <input
          type="text"
          placeholder="Buscar préstamos..."
          className="busqueda-input"
        />
        <button className="filtro-btn">Filtros</button>
      </div>

      <table className="prestamos-tabla">
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Monto</th>
            <th>Tasa</th>
            <th>Cuotas</th>
            <th>Vencimiento</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {prestamos.map((p, index) => (
            <tr key={index}>
              <td>{p.cliente}</td>
              <td className="bold">{p.monto}</td>
              <td>{p.tasa}</td>
              <td>{p.cuotas}</td>
              <td>{p.vencimiento}</td>
              <td>
                <span className={`estado ${p.estado.toLowerCase()}`}>
                  {p.estado}
                </span>
              </td>
              <td>
                <button className="ver-btn">Ver</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PrestamistaPrestamos;