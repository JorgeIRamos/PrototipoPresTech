import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    return(
        <>
        <header>
            <h1 className="title-1">Inicio Sesion</h1>
        </header>
            <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input type="email" id="email" name="email" required /><br/>
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" name="password" required /><br/>
                    <p>Tipo de usuario</p>
                    <label><input type="radio" name="rol" value="prestatario" checked={rol === "prestatario"} onChange={(e) => setRol(e.target.value)}/>Prestatario</label>
                    <label><input type="radio" name="rol" value="prestamista" checked={rol === "prestamista"} onChange={(e) => setRol(e.target.value)}/>Prestamista</label><br/>
                <button type="submit">Iniciar Sesión</button>
            </form>
        <div>
            <p>¿No tienes una cuenta? <a href="/Register">Regístrate aquí</a></p>
            <a href="/">← Volver al inicio</a>
        </div>
        </>
    )
}
export default Login