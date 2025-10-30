import { useNavigate } from "react-router-dom";
import "./PrestamistaDashboard.css";

function PrestamistaDashboard() {
  const navigate = useNavigate();

  const stats = [
    {
      label: "Total",
      value: "$45,250,000",
      description: "Préstamos activos",
    },
    {
      label: "Este mes",
      value: "$8,450,000",
      description: "Pagos recibidos",
    },
    {
      label: "Activos",
      value: "24",
      description: "Clientes",
    },
    {
      label: "Atención",
      value: "3",
      description: "Pagos vencidos",
    },
  ];

  const recentLoans = [
    { name: "Juan Pérez", date: "2025-01-15", amount: "$5,000,000" },
    { name: "María García", date: "2025-01-10", amount: "$3,500,000" },
    { name: "Carlos Rodríguez", date: "2025-01-05", amount: "$2,000,000"},
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Dashboard</h1>
          <p className="dashboard-subtitle">Resumen general de tu cartera de préstamos</p>
        </div>
        <button
          className="dashboard-new-btn"
          onClick={() => navigate("/Prestamista/Prestamos/CrearOferta")}
        >
          + Nuevo Préstamo
        </button>
      </div>

      <div className="dashboard-stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="dashboard-stat-card">
            <div className="dashboard-stat-header">
              <span className="dashboard-stat-label">{stat.label}</span>
            </div>
            <div className="dashboard-stat-value">{stat.value}</div>
            <div className="dashboard-stat-description">{stat.description}</div>
          </div>
        ))}
      </div>

      <div className="dashboard-recent-section">
        <div className="dashboard-recent-header">
          <h2 className="dashboard-recent-title">Préstamos Recientes</h2>
          <a href="/Prestamista/Prestamos" className="dashboard-view-all">
            Ver todos
          </a>
        </div>

        <div className="dashboard-loans-list">
          {recentLoans.map((loan, index) => (
            <div key={index} className="dashboard-loan-item">
              <div className="dashboard-loan-info">
                <div className="dashboard-loan-name">{loan.name}</div>
                <div className="dashboard-loan-date">Fecha: {loan.date}</div>
              </div>
              <div className="dashboard-loan-right">
                <div className="dashboard-loan-amount">{loan.amount}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PrestamistaDashboard;