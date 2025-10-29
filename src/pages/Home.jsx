import { useState } from 'react'
import { Navigate, useNavigate} from 'react-router-dom'
import Navbar from '../components/navbar';

function Home() {
    const navigate = useNavigate();
    return(
        <>
        <Navbar />
      <div className='introduction'>
        <h1 className='title-1'>Bienvenidos a PresTech</h1>
        <p>PresTech es la plataforma digital que automatiza y organiza el proceso de gestión de préstamos, ofreciendo control total para prestamistas y transparencia para prestatarios.</p>
        <button onClick={() => navigate("/Login")} className='button-home'>Comenzar ahora</button>
      </div>
      <section id="caracteristicas">
        <h2 className='title-2'>Características Principales</h2>
        <p>
          Todo lo que necesitas para gestionar préstamos de manera profesional
        </p>

        <div className="caracteristicas-grid">
          <div className="card">
            <div className="card-icon">👥</div>
            <h3 className='title-3'>Gestión de Clientes</h3>
            <p>
              Registra y administra la información de tus prestatarios de forma
              segura y organizada.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">💰</div>
            <h3 className='title-3'>Control de Préstamos</h3>
            <p>
              Crea y gestiona préstamos con cálculo automático de intereses y
              fechas de vencimiento.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">🔔</div>
            <h3 className='title-3'>Alertas Automáticas</h3>
            <p>
              Recibe notificaciones sobre pagos pendientes y vencidos
              automáticamente.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">📈</div>
            <h3 className='title-3'>Reportes Financieros</h3>
            <p>
              Genera reportes detallados de préstamos, pagos y estadísticas en
              PDF o Excel.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">🔒</div>
            <h3 className='title-3'>Seguridad Garantizada</h3>
            <p>
              Toda tu información protegida con cifrado y acceso controlado por
              roles.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">📜</div>
            <h3 className='title-3'>Historial Completo</h3>
            <p>
              Accede al historial detallado de todos los pagos y transacciones
              realizadas.
            </p>
          </div>
        </div>
      </section>

      <section id="roles">
        <h2 className='title-2'>Roles</h2>
        <div className="roles-prestamista">
          <h3 className='title-3'>Prestamista</h3>
          <p>El usuario con rol de prestamista tiene a su disposición un conjunto de herramientas clave para administrar su cartera de préstamos:</p>
          <ul>
            <li><strong>Crear ofertas de préstamo:</strong> Definir montos, intereses, plazos y condiciones de pago para que los prestatarios puedan solicitarlos.</li>
            <li><strong>Gestión de clientes:</strong> Registrar y consultar los datos de los prestatarios, asegurando la trazabilidad de cada relación financiera.</li>
            <li><strong>Control de pagos:</strong> Verificación de comprobantes de pagos realizados por los prestatarios, validando la consistencia y puntualidad.</li>
            <li><strong>Consulta de préstamos:</strong> Acceso a un historial completo de todos los préstamos gestionados, con sus respectivos estados financieros.</li>
          </ul>
        </div>
        <div className='roles-prestatario'>
          <h3 className='title-3'>Prestatario</h3>
          <p>El prestatario, por su parte, cuenta con un entorno donde puede consultar, decidir y cumplir con sus compromisos de forma práctica:</p>
          <ul>
            <li><strong>Ver ofertas disponibles:</strong> Examinar los préstamos disponibles y tomar decisiones informadas sobre cuál solicitar.</li>
            <li><strong>Préstamos activos:</strong> Visualización clara de todos los préstamos en curso, sus fechas de vencimiento, estado actual y condiciones pactadas.</li>
            <li><strong>Seleccionar préstamo a pagar:</strong> Escoger el préstamo al que desea abonar en ese momento, facilitando el control y planificación de pagos.</li>
            <li><strong>Historial de pagos:</strong> Consulta detallada de todos los pagos realizados anteriormente, con sus fechas y montos.</li>
          </ul>
        </div>
      </section>
      <section id="beneficios">
        <h3 className='title-3'>¿Por qué elegir Prestech?</h3>
        <p>Elegir PresTech es optar por una solución moderna, segura y eficiente para la gestión de préstamos. Este sistema facilita el control total del proceso financiero 
          al permitir registrar prestatarios, administrar préstamos, generar alertas automáticas y mantener un historial detallado de pagos. Su interfaz intuitiva y accesible está diseñada para prestamistas y 
          prestatarios, garantizando organización, transparencia y rapidez en cada transacción. En lugar de depender de registros manuales o confusos, PresTech ofrece una plataforma confiable que optimiza el tiempo, 
          reduce errores y mejora la comunicación entre las partes involucradas.</p>
      </section>

      <section id="cta">
        <h2 className='title-2'>Comienza a gestionar tus préstamos hoy</h2>
        <p>Únete a PresTech y transforma la manera en que administras préstamos</p>
        <button onClick={() => navigate("/Login")} className='button-home'>Acceder a la plataforma</button>
      </section>

      <footer className="footer">
      <div className="footer-content">
      <div className="footer-section">
        <h3 className='title-3'>PresTech</h3>
        <p>Plataforma digital para la gestión eficiente de préstamos personales y empresariales.</p>
      </div>

      <div className="footer-section">
        <h3 className='title-3'>Enlaces</h3>
        <ul>
          <li><a href="#caracteristicas">Características</a></li>
          <li><a href="#roles">Roles</a></li>
          <li><a href="/Login">Inicio Sesion</a></li>
      </ul>
    </div>

     <div className="footer-section">
        <h3 className='title-3'>Contacto</h3>
        <p>Jorge Iván Ramos Murgas</p>
        <p>jiramos@unicesar.edu.co</p>
        <p>3127663914</p>
    </div>
  </div>

  <div className="footer-bottom">
    <p className='footer-text'>© {new Date().getFullYear()} PresTech. Todos los derechos reservados.</p>
  </div>
</footer>
        </>
    )
}

export default Home

