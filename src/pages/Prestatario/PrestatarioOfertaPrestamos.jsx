
function PrestatarioOfertaPrestamos() {
    return(
         

        <>
        <h1 className="title-1">Ofertas de Prestamo</h1>
        <p>A continuacion veras las ofertas disponibles</p>
        <section>
            <label>Monto de prestamo</label>
            <input type="number" placeholder="100,000"></input>
            <button>Filtrar</button>
            <div>
                <h2 className="title-2">Oferta de Pedro Perez</h2>
                <p>Monto: $100,000 - $500,000</p>
                <p>Tasa de interes anual: 12%</p>
                <p>Numero de cuotas: 12</p>
                <p>Frecuencia de pago: Mensual</p>
                <button>Solicitar</button>
            </div>
            <div>
                <h2 className="title-2">Oferta de Pablo Torres</h2>
                <p>Monto: $100,000 - $1,000,000</p>
                <p>Tasa de interes anual: 10%</p>
                <p>Numero de cuotas: 10</p>
                <p>Frecuencia de pago: Quincenal</p>
                <button>Solicitar</button>
            </div>
            <div>
                <h2 className="title-2">Oferta de Rigoberto Marquez</h2>
                <p>Monto: $100,000 - $2,000,000</p>
                <p>Tasa de interes anual: 15%</p>
                <p>Numero de cuotas: 8</p>
                <p>Frecuencia de pago: Semanal</p>
                <button>Solicitar</button>
            </div>
        </section>
        </>


    )
}

export default PrestatarioOfertaPrestamos;