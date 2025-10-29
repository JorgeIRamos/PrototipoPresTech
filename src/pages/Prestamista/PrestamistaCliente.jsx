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
    <>
      <h1 className= "title-1">Clientes</h1>
      <p>Gestiona la información de tus prestatarios</p>

      <div>
        <input type="text" placeholder="Buscar clientes..." />
        <button>Filtros</button>
      </div>

      <div>
        {clientes.map((cliente) => (
          <div key={cliente.id}>
            <h3>{cliente.nombre}</h3>
            <p>{cliente.email}</p>
            <p>{cliente.telefono}</p>
            <p>{cliente.prestamos} préstamos</p>
            <p>{cliente.total}</p>

            <button>Ver Detalles</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default PrestamistaCliente;

