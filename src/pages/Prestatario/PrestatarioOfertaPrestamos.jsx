import "./PrestatarioOfertaPrestamos.css";

function PrestatarioOfertaPrestamos() {
  return (
    <div className="ofertas-container">
      <header className="ofertas-header">
        <h1 className="title-1">Ofertas de Préstamo</h1>
        <p>A continuación verás las ofertas disponibles</p>
      </header>

      <div className="ofertas-layout">
        <aside className="filtro-panel">
          <label htmlFor="monto">Monto del préstamo</label>
          <input
            id="monto"
            type="number"
            placeholder="100000"
            className="input-filtro"
          />
          <button className="btn-filtrar">Filtrar</button>
        </aside>

        <section className="ofertas-lista">
          <div className="oferta-card">
            <h2>Oferta de Pedro Perez</h2>
            <p>Monto: <strong>$100,000 - $500,000</strong></p>
            <p>Tasa de interés anual: <strong>12%</strong></p>
            <p>Número de cuotas: <strong>12</strong></p>
            <p>Frecuencia de pago: <strong>Mensual</strong></p>
            <button className="btn-solicitar">Solicitar</button>
          </div>

          <div className="oferta-card">
            <h2>Oferta de Pablo Torres</h2>
            <p>Monto: <strong>$100,000 - $1,000,000</strong></p>
            <p>Tasa de interés anual: <strong>10%</strong></p>
            <p>Número de cuotas: <strong>10</strong></p>
            <p>Frecuencia de pago: <strong>Quincenal</strong></p>
            <button className="btn-solicitar">Solicitar</button>
          </div>

          <div className="oferta-card">
            <h2>Oferta de Rigoberto Marquez</h2>
            <p>Monto: <strong>$100,000 - $2,000,000</strong></p>
            <p>Tasa de interés anual: <strong>15%</strong></p>
            <p>Número de cuotas: <strong>8</strong></p>
            <p>Frecuencia de pago: <strong>Semanal</strong></p>
            <button className="btn-solicitar">Solicitar</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PrestatarioOfertaPrestamos;