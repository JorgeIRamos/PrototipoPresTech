import "./PrestamistaCliente.css";

function PrestamistaCliente() {
  const clientes = [
    {
      id: 1,
      nombre: "Juan Pérez",
      email: "juan@email.com",
      telefono: "300-123-4567",
      prestamos: 2,
      total: "$8,000,000",
    },
    {
      id: 2,
      nombre: "María García",
      email: "maria@email.com",
      telefono: "301-234-5678",
      prestamos: 1,
      total: "$3,500,000",
    },
    {
      id: 3,
      nombre: "Carlos Rodríguez",
      email: "carlos@email.com",
      telefono: "302-345-6789",
      prestamos: 3,
      total: "$12,000,000",
    },
  ];

  return (
    <div className="clientes-container">
      <h1 className="title-1">Clientes</h1>
      <p className="subtitulo">Gestiona la información de tus prestatarios</p>

      <div className="busqueda-container">
        <input
          type="text"
          placeholder="Buscar clientes..."
          className="buscador"
        />
        <button className="boton-filtros">Filtros</button>
      </div>

      <div className="lista-clientes">
        {clientes.map((cliente) => (
          <div key={cliente.id} className="tarjeta-cliente">
            <div className="info-cliente">
              <h3 className="nombre-cliente">{cliente.nombre}</h3>
              <p className="dato-cliente">{cliente.email}</p>
              <p className="dato-cliente">{cliente.telefono}</p>
              <p className="dato-cliente prestamos">
                {cliente.prestamos} préstamos
              </p>
              <p className="dato-cliente total">{cliente.total}</p>

              <div className="botones">
                <button className="boton-detalles">Ver Detalles</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PrestamistaCliente;


