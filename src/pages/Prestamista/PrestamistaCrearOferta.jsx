import { useNavigate } from "react-router-dom";
import "./PrestamistaCrearOferta.css";

function PrestamistaCrearOferta() {
    const navigate = useNavigate();
    return (
        <div className="prestamo-container">
            <header className="prestamo-header">
                <h1 className="title-1">Crear Préstamo</h1>
                <p className="subtitle">Registra un nuevo préstamo</p>
            </header>

            <form className="prestamo-form">
                <div className="form-group">
                    <label className="form-label">
                        Montos de préstamo <span className="required">*</span>
                    </label>
                    <div className="input-group">
                        <input
                            type="number"
                            className="form-input"
                            placeholder="Monto mínimo del préstamo"
                            required
                        />
                        <input
                            type="number"
                            className="form-input"
                            placeholder="Monto máximo del préstamo"
                            required
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="form-label">
                        Tasa de interés anual (%) <span className="required">*</span>
                    </label>
                    <input
                        type="number"
                        step="0.01"
                        className="form-input"
                        placeholder="Ingrese la tasa de interés anual"
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">
                        Número de cuotas <span className="required">*</span>
                    </label>
                    <input
                        type="number"
                        className="form-input"
                        placeholder="Ingrese el número de cuotas"
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">
                        Frecuencia de pago <span className="required">*</span>
                    </label>
                    <select className="form-select" required>
                        <option value="">Seleccione una frecuencia</option>
                        <option value="semanal">Semanal</option>
                        <option value="quincenal">Quincenal</option>
                        <option value="mensual">Mensual</option>
                    </select>
                </div>

                <div className="form-group">
                    <label className="form-label">Descripción</label>
                    <textarea
                        className="form-textarea"
                        placeholder="Agregue una descripción del préstamo (opcional)"
                    ></textarea>
                </div>

                <div className="form-buttons">
                    <button
                        type="button"
                        className="btn-cancelar"
                        onClick={() => navigate("/Prestamista/Prestamos")}
                    >
                        Cancelar
                    </button>
                    <button type="submit" className="btn-crear">
                        Crear Oferta de Préstamo
                    </button>
                </div>
            </form>
        </div>
    );
}

export default PrestamistaCrearOferta;