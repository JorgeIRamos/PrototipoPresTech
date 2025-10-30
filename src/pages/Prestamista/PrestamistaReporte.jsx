import './PrestamistaReporte.css';

function PrestamistaReporte() {
  return (
    <div className="reportes-container">
      <header className="reportes-header">
        <h1 className="title-1">Reportes</h1>
        <p>Genera y descarga reportes financieros</p>
      </header>

      <section className="reportes-grid">
        <div className="reporte-card">
          <h2>Reporte de Préstamos</h2>
          <p>Listado completo de todos los préstamos con detalles de montos, tasas y estados.</p>
          <button>Descargar PDF</button>
        </div>

        <div className="reporte-card">
          <h2>Reporte de Pagos</h2>
          <p>Historial detallado de todos los pagos recibidos con fechas y montos.</p>
          <button>Descargar Excel</button>
        </div>

        <div className="reporte-card">
          <h2>Reporte de Clientes</h2>
          <p>Información completa de clientes con historial de préstamos y pagos.</p>
          <button>Descargar PDF</button>
        </div>

        <div className="reporte-card red-card">
          <h2>Reporte de Morosidad</h2>
          <p>Listado de préstamos vencidos y clientes con pagos pendientes.</p>
          <button>Descargar PDF</button>
        </div>
      </section>

      <section className="estadisticas">
        <h2>Estadísticas Generales</h2>
        <div className="estadisticas-grid">
          <div className="estadistica-card">
            <p>Total Prestado</p>
            <h3>$45,250,000</h3>
          </div>
          <div className="estadistica-card">
            <p>Total Recuperado</p>
            <h3>$38,100,000</h3>
          </div>
          <div className="estadistica-card">
            <p>Intereses Ganados</p>
            <h3>$2,850,000</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrestamistaReporte;