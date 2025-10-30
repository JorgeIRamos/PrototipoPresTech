import "./PrestatarioHistorial.css";

function PrestatarioHistorial() {
  const historial = [
    {
      id: 1,
      fecha: "15 Ene 2025",
      tipo: "Transferencia",
      monto: "$416,667",
      estado: "Completado",
    },
    {
      id: 2,
      fecha: "15 Dic 2024",
      tipo: "Efectivo",
      monto: "$416,667",
      estado: "Completado",
    },
    {
      id: 3,
      fecha: "15 Nov 2024",
      tipo: "Transferencia",
      monto: "$416,667",
      estado: "Completado",
    },
    {
      id: 4,
      fecha: "15 Oct 2024",
      tipo: "Transferencia",
      monto: "$416,667",
      estado: "Completado",
    },
  ];

  return (
    <div className="historial-container">
      <header className="historial-header">
        <h1>Historial de Pagos</h1>
        <p>Consulta todos tus pagos realizados</p>
      </header>

      <section className="historial-lista">
        {historial.map((pago) => (
          <div key={pago.id} className="historial-item">
            <div className="historial-info">
              <p className="fecha">{pago.fecha}</p>
              <p className="tipo">{pago.tipo}</p>
            </div>
            <div className="monto">
              <p>{pago.monto}</p>
              <span className="estado">{pago.estado}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="resumen-pagos">
        <h2>Resumen de Pagos</h2>
        <div className="resumen-grid">
          <div>
            <p className="label">Total Pagado</p>
            <p className="valor">$1,666,668</p>
          </div>
          <div>
            <p className="label">Número de Pagos</p>
            <p className="valor">4</p>
          </div>
          <div>
            <p className="label">Saldo Restante</p>
            <p className="valor">$3,333,332</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrestatarioHistorial;