
function PrestatarioHistorial() {
  const historial = [
    {
      id: 1,
      fechaPago: "2023-01-15",
      monto: 5000,
      tipoDePago: "Efectivo",
      estado: "Completado",
    },
    {
      id: 2,
      fechaPago: "2023-02-15",
      monto: 5000,
      tipoDePago: "Tarjeta de Crédito",
      estado: "Completado",
    },
  ];

  return (
    <>
      <div className="historial-header">
        <h1 className="title-1">Historial de Préstamos</h1>
        <p>Consulta todos tus pagos realizados</p>
      </div>

      <div className="historial-lista">
        {historial.map((pago) => (
          <div key={pago.id} className="historial-item">
            <div className="historial-info">
              <p><strong>Fecha de Pago:</strong> {pago.fechaPago}</p>
              <p><strong>Monto:</strong> ${pago.monto}</p>
              <p><strong>Tipo de Pago:</strong> {pago.tipoDePago}</p>
            </div>
            <span className="estado">{pago.estado}</span>
          </div>
        ))}
      </div>

      <div className="resumen-card">
        <h2 className="title-2">Resumen de Pagos</h2>
        <div className="resumen-grid">
          <div>
            <p className="resumen-label">Total Pagado</p>
            <p className="resumen-valor">$10,000</p>
          </div>
          <div>
            <p className="resumen-label">Número de Pagos</p>
            <p className="resumen-valor">2</p>
          </div>
          <div>
            <p className="resumen-label">Saldo Restante</p>
            <p className="resumen-valor">$40,000</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrestatarioHistorial;

