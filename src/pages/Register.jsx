
function Register() {

    const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Registro enviado correctamente!");
    }

    return(
        <>
        <header>
            <h1 className="title-1">Registro</h1>
        </header>
        <form onSubmit={handleSubmit}>
                <label htmlFor="fullname">Nombre Completo</label>
                <input type="text" id="fullname" name="fullname" required /><br/>
                <label htmlFor="identificacion">Identificacion</label>
                <input type="text" id="identificacion" name="identificacion" required /><br/>
                <label htmlFor="email">Correo Electrónico:</label>
                <input type="email" id="email" name="email" required /><br/>
                <label htmlFor="telefono">Telefono:</label>
                <input type="text" id="telefono" name="telefono" required /><br/>
                <label htmlFor="direccion">Dirección:</label>
                <input type="text" id="direccion" name="direccion" required /><br/>
                <label htmlFor="ciudad">Ciudad</label>
                <input type="text" id="ciudad" name="ciudad" required /><br/>
                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" name="password" required /><br/>
                <input type="checkbox" id="terms" required></input>
                <label htmlFor="terms">Acepto los términos y condiciones de uso de PresTech y autorizo el tratamiento de mis datos personales</label><br/>
                <button type="submit" >Registrarse</button>

        </form>
        <div>
            <p>¿Ya tienes cuenta? <a href="/Login">Inicia Sesión aquí</a> </p> 
            <a href="/">← Volver al inicio</a>
        </div>  
    </>
    )
}

export default Register