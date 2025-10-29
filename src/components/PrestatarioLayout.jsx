import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./RolesLayout.css";


function PrestatarioLayout() {
    const navigate = useNavigate();
  return (
    <div className="layout-container">
      <aside className="sidebar">
        <h2 className="logo">PresTech</h2>

        <nav className="nav-links">
          <Link to="/Prestatario/Dashboard"> Dashboard</Link>
          <Link to="/Prestatario/OfertaPrestamos"> Oferta de Prestamos</Link>
          <Link to="/Prestatario/Historial"> Historial</Link>
        </nav>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div className="user-info">
            <p className="user-role">Prestatario</p>
            <p className="user-email">usuario@email.com</p>
          </div>
          <div className="topbar-actions">
            <button className="btn-logout" onClick={() => navigate("/Login")}>
              Salir
            </button>
          </div>
        </header>

        <section className="page-content">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default PrestatarioLayout;
