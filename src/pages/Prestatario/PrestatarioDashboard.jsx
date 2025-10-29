function PrestatarioDashboard() {
    return(
        <>
        <section>
            <h1 className="title-1">Dashboard</h1>
            <p>Resumen general de tus prestamos y pagos</p>

            <div>
                <p>$5,000,000</p>
                <p>Deuda total</p>
            </div>
            <div>
                <p>$1,250,000</p>
                <p>Pagado</p>
            </div>
            <div>
                <p>15 Feb</p>
                <p>Proximo pago</p>
            </div>
            <div>
                <p>0</p>
                <p>Pagos atrasados</p>
            </div>
        </section>
        <section>
            <h2 className="title-2">Mis prestamos activos</h2>
            <div>
                <p> Prestamo con Juan Perez </p>
                <p> Fecha de inicio: 15 de enero de 2025</p>
                <table>
                    <thead>
                        <tr>
                            <th>Monto</th>
                            <th>Saldo Pendiente</th>
                            <th>Cuotas</th>
                            <th>Próximo Pago</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>$5,000,000</td>
                            <td>$3,750,000</td>
                            <td>12</td>
                            <td>15 Feb 2025</td>
                        </tr>
                    </tbody>
                </table>
                <button>Ver Detalles</button>
                <button>Historial de pago</button>
            </div>
        </section>
        <section>
            <h2 className="title-2">Proximos Pagos</h2>  
            <div>
                <p> 15 Feb 2025 </p>
                <p> Pendiente </p>
                <p> $416,667 </p>
            </div>
            <div>
                <p> 15 Mar 2025 </p>
                <p> Pendiente </p>
                <p> $416,667 </p>
            </div>
            <div>
                <p> 15 Abr 2025 </p>
                <p> Pendiente </p>
                <p> $416,667 </p>
            </div>
        </section>
        </>
    )
}

export default PrestatarioDashboard