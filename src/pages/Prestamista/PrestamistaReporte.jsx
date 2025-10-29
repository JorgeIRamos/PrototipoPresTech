function PrestamistaReporte() {
  return (
    <>
      <div>
        <h1 className="title-1">Reportes</h1>
        <p>Genera y descarga reportes financieros</p>
      </div>

      <div>
        <h2 className="title-2">Reporte de Préstamos</h2>
        <p>Listado completo de todos los préstamos con detalles de montos, tasas y estados.</p>
        <button>Descargar PDF</button>
      </div>

      <div>
        <h2 className="title-2">Reporte de Pagos</h2>
        <p>Historial detallado de todos los pagos recibidos con fechas y montos.</p>
        <button>Descargar Excel</button>
      </div>

      <div>
        <h2 className="title-2">Reporte de Clientes</h2>
        <p>Información completa de clientes con historial de préstamos y pagos.</p>
        <button>Descargar PDF</button>
      </div>

      <div>
        <h2 className="title-2">Reporte de Morosidad</h2>
        <p>Listado de préstamos vencidos y clientes con pagos pendientes.</p>
        <button>Descargar PDF</button>
      </div>

      <div>
        <h2 className="title-2">Estadísticas Generales</h2>
        <p>Total Prestado: $45,250,000</p>
        <p>Total Recuperado: $38,100,000</p>
        <p>Intereses Ganados: $2,850,000</p>
      </div>
    </>
  );
}

export default PrestamistaReporte;
