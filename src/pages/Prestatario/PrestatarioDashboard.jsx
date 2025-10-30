import { useNavigate } from 'react-router-dom';
import './PrestatarioDashboard.css';

function PrestatarioDashboard() {
    const navigate = useNavigate();
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1 className="title-1">Mi Dashboard</h1>
        <p>Resumen de tus préstamos y pagos</p>
      </header>

      <section className="dashboard-cards">
        <div className="card">
          <p className="card-valor">$5,000,000</p>
          <p className="card-titulo">Deuda total</p>
        </div>

        <div className="card">
          <p className="card-valor">$1,250,000</p>
          <p className="card-titulo">Pagado</p>
        </div>

        <div className="card">
          <p className="card-valor">15 Feb</p>
          <p className="card-titulo">Próximo pago</p>
        </div>

        <div className="card">
          <p className="card-valor">0</p>
          <p className="card-titulo">Pagos vencidos</p>
        </div>
      </section>

      <section className="prestamos-activos">
        <h2>Mis Préstamos Activos</h2>
        <div className="prestamo-card">
          <div className="prestamo-header">
            <h3>Préstamo Personal</h3>
            <p>Fecha de inicio: 15 Ene 2025</p>
          </div>

          <div className="prestamo-detalles">
            <div>
              <p className="detalle-titulo">Monto Original</p>
              <p className="detalle-valor">$5,000,000</p>
            </div>
            <div>
              <p className="detalle-titulo">Saldo Pendiente</p>
              <p className="detalle-valor">$3,750,000</p>
            </div>
            <div>
              <p className="detalle-titulo">Cuotas</p>
              <p className="detalle-valor">3/12 pagadas</p>
            </div>
            <div>
              <p className="detalle-titulo">Próximo Pago</p>
              <p className="detalle-valor">15 Feb 2025</p>
            </div>
          </div>

          <div className="progreso">
            <div className="barra">
              <div className="relleno" style={{ width: '25%' }}></div>
            </div>
            <p>25% completado</p>
          </div>

          <div className="prestamo-botones">
            <button className="btn-detalles">Ver Detalles</button>
            <button className="btn-historial" onClick={() => navigate("/Prestatario/Historial")}>Historial de Pagos</button>
          </div>
        </div>
      </section>

      <section className="proximos-pagos">
        <h2>Próximos Pagos</h2>
        <div className="pago-item">
          <div>
            <p className="pago-fecha">15 Feb 2025</p>
            <p className="pago-estado">Pendiente</p>
          </div>
          <p className="pago-monto">$416,667</p>
        </div>

        <div className="pago-item">
          <div>
            <p className="pago-fecha">15 Mar 2025</p>
            <p className="pago-estado">Programado</p>
          </div>
          <p className="pago-monto">$416,667</p>
        </div>

        <div className="pago-item">
          <div>
            <p className="pago-fecha">15 Abr 2025</p>
            <p className="pago-estado">Programado</p>
          </div>
          <p className="pago-monto">$416,667</p>
        </div>
      </section>
    </div>
  );
}

export default PrestatarioDashboard;