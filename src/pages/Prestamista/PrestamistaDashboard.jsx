import { useNavigate } from "react-router-dom"

function PrestamistaDashboard() {
    const navigate = useNavigate();

    return (
        <>
        <section>
            <h1 className="title-1">Dashboard</h1>
            <p>Resumen general de tu cartera de prestamo</p>
            <button onClick={() => navigate("/Prestamista/Prestamos/CrearOferta")}>Nuevo Prestamo</button>
            <div>
                <span>total</span>
                <p>$45,250,000</p>
                <p>Prestamos activos</p>
            </div>
            <div>
                <span>Este mes</span>
                <p>$8,450,000</p>
                <p>Pagos recibidos</p>
            </div>
            <div>
                <span>Activos</span>
                <p>24</p>
                <p>Clientes</p>
            </div>
            <div>
                <span>Retrasados</span>
                <p>3</p>
                <p>Pagos vencidos</p>
            </div>
        </section>

            
            <section>
                
                <h2 className="title-2"> Prestamos recientes </h2>
                <a>Ver todos</a>
                <div> 
                <p> Juan perez </p>
                <p> Fecha: 2025-01-15</p> 
                <p> 5.000.000 </p>
                </div>

                <div> 
                <p> Maria Garcia </p>
                <p> Fecha: 2025-01-10</p> 
                <p> 3.500.000 </p>
                </div>

                 <div> 
                <p> Carlos Rodriguez </p>
                <p> Fecha: 2025-01-05</p> 
                <p> 2.000.000 </p>
                </div>


            </section>     


        </>    
    )
}

export default PrestamistaDashboard