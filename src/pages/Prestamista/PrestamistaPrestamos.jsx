import { useNavigate } from 'react-router-dom';

function PrestamistaPrestamos() {
   const navigate = useNavigate();
    return(
        <>
        
        <h1 className="title-1">Prestamos</h1>
        <p>Administra todos los préstamos otorgados</p>
        <button onClick={() => navigate("/Prestamista/Prestamos/CrearOferta")}>Nuevo Prestamo</button>
        <section>
            <label htmlFor="filtro">
            <input type="text" id="filtro" name="filtro" placeholder="Buscar prestamo..."></input>
            <button>Filtro</button>
            </label>
        <table>
            <thead>
                <tr>
                    <th>Cliente</th>
                    <th>Monto</th>
                    <th>Tasa</th>
                    <th>Cuotas</th>
                    <th>Vencimiento</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Juan Perez</td>
                    <td>$5,000,000</td>
                    <td>12%</td>
                    <td>12</td>
                    <td>2025-01-15</td>
                    <td>Pendiente</td>
                    <td><a>Ver</a></td>
                </tr>
                <tr>
                    <td>Maria Garcia</td>
                    <td>$3,500,000</td>
                    <td>10%</td>
                    <td>10</td>
                    <td>2025-01-10</td>
                    <td>Activo</td>
                    <td><a>Ver</a></td>
                </tr>
                <tr>
                    <td>Carlos Rodriguez</td>
                    <td>$2,000,000</td>
                    <td>15%</td>
                    <td>8</td>
                    <td>2025-01-05</td>
                    <td>Retrasado</td>
                    <td><a>Ver</a></td>
                </tr>
            </tbody>
        </table>
        </section>
        </>


    )
    
}

export default PrestamistaPrestamos;