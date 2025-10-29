import { useNavigate } from "react-router-dom";

function PrestamistaCrearOferta() {
    const navigate = useNavigate();
    return (
        <>
            <h1 className="title-1">Crear Prestamo</h1>
            <p>Registra un nuevo prestamo</p>
            <form>
                <label>Montos de prestamos <strong>*</strong></label>
                <input type="number" placeholder="Ingrese el monto minimo del prestamo" required />
                <input type="number" placeholder="Ingrese el monto maximo del prestamo" required />
                <label>Tasa de interes anual (%) <strong>*</strong></label>
                <input type="number" step="0.01" placeholder="Ingrese la tasa de interes anual" required />
                <label>Numero de cuotas <strong>*</strong></label>
                <input type="number" placeholder="Ingrese el numero de cuotas" required />
                <label>Frecuencia de pago <strong>*</strong></label>
                <select required>
                    <option value="">Seleccione una frecuencia</option>
                    <option value="semanal">Semanal</option>
                    <option value="quincenal">Quincenal</option>
                    <option value="mensual">Mensual</option>
                </select>
                <label>Descripcion</label>
                <textarea placeholder="Agregue una descripcion del prestamo (opcional)"></textarea>
                <button type="button" onClick={() => navigate("/Prestamista/Prestamos")}>Cancelar</button>
                <button type="submit">Crear Oferta de Prestamo</button>
            </form>
            
        </>
    );
}

export default PrestamistaCrearOferta;