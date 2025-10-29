import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="navbar-logo">
       <h2>PresTech</h2> 
      </div>

      <nav className="navbar-links">
        <a href= "#caracteristicas">Caracteristicas</a>
        <a href= "#roles">Roles</a>
        <a href= "#beneficios">Beneficios</a>
        <a href= "#contacto">Contactos</a>
      </nav>

      <div className="navbar-buttons">
        <button onClick={() => navigate("/login")} className="btn-secondary">
          Iniciar Sesión
        </button>
        <button onClick={() => navigate("/register")} className="btn-primary">
          Registrarse
        </button>
      </div>
    </header>
  );
}

export default Navbar;
