import "./Register.css";

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Registro enviado correctamente!");
  };

  return (
    <div className="register-page">
      <div className="box">
        <span className="border-line"></span>
        <form onSubmit={handleSubmit}>
          <h2>Registro</h2>

          <div className="input-box">
            <input type="text" id="fullname" name="fullname" required />
            <span>Nombre Completo</span>
            <i></i>
          </div>

          <div className="input-box">
            <input type="text" id="identificacion" name="identificacion" required />
            <span>Identificación</span>
            <i></i>
          </div>

          <div className="input-box">
            <input type="email" id="email" name="email" required />
            <span>Correo Electrónico</span>
            <i></i>
          </div>

          <div className="input-box">
            <input type="text" id="telefono" name="telefono" required />
            <span>Teléfono</span>
            <i></i>
          </div>

          <div className="input-box">
            <input type="text" id="direccion" name="direccion" required />
            <span>Dirección</span>
            <i></i>
          </div>

          <div className="input-box">
            <input type="text" id="ciudad" name="ciudad" required />
            <span>Ciudad</span>
            <i></i>
          </div>

          <div className="input-box">
            <input type="password" id="password" name="password" required />
            <span>Contraseña</span>
            <i></i>
          </div>

          <div className="terms-container">
            <label htmlFor="terms">
              <input type="checkbox" id="terms" required />  
              Acepto los términos y condiciones de uso de PresTech y autorizo el
              tratamiento de mis datos personales
            </label>
          </div>

          <button type="submit" className="btn">
            Registrarse
          </button>

          <div className="imp-links">
            <a href="/Login">¿Ya tienes cuenta? Inicia sesión aquí</a>
            <a href="/">← Volver al inicio</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;