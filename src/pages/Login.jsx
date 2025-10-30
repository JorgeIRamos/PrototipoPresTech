import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [rol, setRol] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (rol === "prestatario") {
      navigate("/Prestatario/Dashboard");
    } else if (rol === "prestamista") {
      navigate("/Prestamista/Dashboard");
    } else {
      alert("Por favor, seleccione un rol de usuario.");
    }
  };

  return (
    <div className="login-page">
      <div className="box">
        <span className="border-line"></span>
        <form onSubmit={handleSubmit}>
          <h2>Inicio Sesión</h2>

          <div className="input-box">
            <input type="email" id="email" name="email" required />
            <span>Correo Electrónico</span>
            <i></i>
          </div>

          <div className="input-box">
            <input type="password" id="password" name="password" required />
            <span>Contraseña</span>
            <i></i>
          </div>

          <p className="user-type-text">Tipo de usuario</p>

          <div className="roles-container">
            <label>
              <input
                type="radio"
                name="rol"
                value="prestatario"
                checked={rol === "prestatario"}
                onChange={(e) => setRol(e.target.value)}
              />
              Prestatario
            </label>

            <label>
              <input
                type="radio"
                name="rol"
                value="prestamista"
                checked={rol === "prestamista"}
                onChange={(e) => setRol(e.target.value)}
              />
              Prestamista
            </label>
          </div>

          <button type="submit" className="btn">
            Iniciar Sesión
          </button>

          <div className="imp-links">
            <a href="/Register">¿No tienes una cuenta? Regístrate aquí</a>
            <a href="/">← Volver al inicio</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;