import { Container, Row, Col, Nav, Table , Button} from "react-bootstrap";
import { useState } from "react";

const DashboardSa = () => {
  const [activeView, setActiveView] = useState("welcome");

  const [selectedDomicilio, setSelectedDomicilio] = useState(null); // Estado para almacenar el domicilio seleccionado

  

  // Datos ampliados
  const data = [
    { id: 1, nombre: "Juan", apellido1: "Pérez", apellido2: "López", sector_asignado: 1, estado_inspeccion: "Realizada" },
    { id: 2, nombre: "Ana", apellido1: "García", apellido2: "Martínez", sector_asignado: 5, estado_inspeccion: "Realizada" },
    { id: 3, nombre: "Luis", apellido1: "Rodríguez", apellido2: "Fernández", sector_asignado: 12, estado_inspeccion: "Realizada" },
    { id: 4, nombre: "Carla", apellido1: "Santos", apellido2: "Gómez", sector_asignado: 3, estado_inspeccion: "Realizada" },
    { id: 5, nombre: "Miguel", apellido1: "Hernández", apellido2: "Díaz", sector_asignado: 7, estado_inspeccion: "No realizada" },
    { id: 6, nombre: "Lucía", apellido1: "Morales", apellido2: "Ortiz", sector_asignado: 4, estado_inspeccion: "Realizada" },
    { id: 7, nombre: "Carlos", apellido1: "Martínez", apellido2: "Ramos", sector_asignado: 8, estado_inspeccion: "No realizada" },
    { id: 8, nombre: "María", apellido1: "Núñez", apellido2: "Castro", sector_asignado: 9, estado_inspeccion: "Realizada" },
    { id: 9, nombre: "David", apellido1: "López", apellido2: "Alonso", sector_asignado: 10, estado_inspeccion: "No realizada" },
    { id: 10, nombre: "Laura", apellido1: "Romero", apellido2: "Vega", sector_asignado: 11, estado_inspeccion: "Realizada" },
  ];

  const dataDomicilios = [
    {
      id_vivienda: 1,
      direccion_vivienda: "Calle 1, Casa 12",
      id_sector: 1,
      manzana_vivienda: "A",
      lote_vivienda: "1",
      estado_inspeccion_vivienda: 1, // Inspeccionada
      estado_vivienda: 1, // Ocupada
      id_inspeccion: 101,
      id_inspector: 1001,
    },
    {
      id_vivienda: 2,
      direccion_vivienda: "Calle 2, Casa 45",
      id_sector: 3,
      manzana_vivienda: "C",
      lote_vivienda: "5",
      estado_inspeccion_vivienda: 0, // No inspeccionada
      estado_vivienda: 1, // Ocupada
      id_inspeccion: 102,
      id_inspector: 1002,
    },
    {
      id_vivienda: 3,
      direccion_vivienda: "Av. Principal 89",
      id_sector: 5,
      manzana_vivienda: "E",
      lote_vivienda: "9",
      estado_inspeccion_vivienda: 1, // Inspeccionada
      estado_vivienda: 0, // Abandonada
      id_inspeccion: 103,
      id_inspector: 1003,
    },
    {
      id_vivienda: 4,
      direccion_vivienda: "Calle 8, Casa 23",
      id_sector: 2,
      manzana_vivienda: "G",
      lote_vivienda: "4",
      estado_inspeccion_vivienda: 1, // Inspeccionada
      estado_vivienda: 1, // Ocupada
      id_inspeccion: 104,
      id_inspector: 1004,
    },
    {
      id_vivienda: 5,
      direccion_vivienda: "Pasaje Los Pinos 17",
      id_sector: 6,
      manzana_vivienda: "I",
      lote_vivienda: "2",
      estado_inspeccion_vivienda: 0, // No inspeccionada
      estado_vivienda: 0, // Abandonada
      id_inspeccion: 105,
      id_inspector: 1005,
    },
  ];
  

  const handleMenuClick = (view) => {
    setActiveView(view);
    setSelectedDomicilio(null); // Restablecer el domicilio seleccionado
  };

  const handleSelectDomicilio = (domicilio) => {
    setSelectedDomicilio(domicilio); // Guardar el domicilio seleccionado
  };

  return (
    <div className="d-flex vh-100">
      {/* Barra lateral */}
      <Nav className="flex-column bg-dark text-white p-3" style={{ width: "250px" }}>
        <h4 className="text-center">Menú</h4>
        <Nav.Link className="text-white" onClick={() => handleMenuClick("controlVectorial")}>
          Control Vectorial
        </Nav.Link>
        <Nav.Link className="text-white" onClick={() => handleMenuClick("viviendas")}>
          Viviendas
        </Nav.Link>
        <Nav.Link href="#" className="text-white">
          Inspecciones
        </Nav.Link>
        <Nav.Link href="#" className="text-white">
          Sectores
        </Nav.Link>
        <Nav.Link href="#" className="text-white">
          Subir informes
        </Nav.Link>
      </Nav>

      {/* Contenido principal */}
      <Container fluid className="p-4">
        <Row>
          <Col>
            {activeView === "welcome" && (
              <>
                <h1>Dashboard Salud Ambiental</h1>
                <p>Bienvenido al panel de control. Selecciona una opción del menú.</p>
              </>
            )}

            {activeView === "controlVectorial" && (
              <>
                <h1>Control Vectorial</h1>

                 {/* Botones para Importar y Exportar */}
                 <div className="mb-3">
                  <Button variant="success" className="me-2">
                    Descargar Excel
                  </Button>
                  <Button variant="primary">
                    Importar Excel
                  </Button>
                </div>

                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Apellido Paterno</th>
                      <th>Apellido Materno</th>
                      <th>Sector Asignado</th>
                      <th>Estado Inspección</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nombre}</td>
                        <td>{item.apellido1}</td>
                        <td>{item.apellido2}</td>
                        <td>{item.sector_asignado}</td>
                        <td>
                          <span
                            style={{
                              color: item.estado_inspeccion === "Realizada" ? "green" : "red",
                              fontWeight: "bold",
                            }}
                          >
                            {item.estado_inspeccion}
                          </span>
                        </td>
                        <td>
                          <button className="btn btn-primary me-2">Editar</button>
                          <button className="btn btn-danger">Eliminar</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </>
            )}
            {activeView === "viviendas" && (
              <Row>
                <Col md={6}>
                  <h1>Viviendas</h1>

                  {/* Botones para Importar y Exportar */}
                 <div className="mb-3">
                  <Button variant="success" className="me-2">
                    Descargar Excel
                  </Button>
                  <Button variant="primary">
                    Importar Excel
                  </Button>
                </div>

                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>ID Vivienda</th>
                        <th>Dirección</th>
                        <th>Sector</th>
                        <th>Manzana</th>
                        <th>Lote</th>
                        <th>Estado Inspección</th>
                        <th>Estado Vivienda</th>
                        <th>Acción</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataDomicilios.map((item) => (
                        <tr key={item.id_vivienda}>
                          <td>{item.id_vivienda}</td>
                          <td>{item.direccion_vivienda}</td>
                          <td>{item.id_sector}</td>
                          <td>{item.manzana_vivienda}</td>
                          <td>{item.lote_vivienda}</td>
                          <td>
                            <span
                              style={{
                                color: item.estado_inspeccion_vivienda === 1 ? "green" : "red",
                                fontWeight: "bold",
                              }}
                            >
                              {item.estado_inspeccion_vivienda === 1 ? "Inspeccionada" : "No Inspeccionada"}
                            </span>
                          </td>
                          <td>
                            {item.estado_vivienda === 1 ? "Accesible" : "Abandonada/Ocupada"}
                          </td>
                          <td>
                            <button className="btn btn-primary" onClick={handleSelectDomicilio}>Ver en Mapa</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Col>

                {/* Mapa */}
                <Col md={6}>
                  {selectedDomicilio ? (
                    <>
                      <h1>Mapa del Domicilio</h1>
                      <p>
                        Mostrando la ubicación para el domicilio con ID:{" "}
                        <strong>{selectedDomicilio.id_vivienda}</strong>
                      </p>
                      <div style={{ height: "500px" }}>
                        <iframe
                          title="Mapa Domicilio"
                          width="100%"
                          height="100%"
                          frameBorder="0"
                          style={{ border: 0 }}
                          src={`https://www.google.com/maps?q=${selectedDomicilio.manzana1},${selectedDomicilio.manzana2}&hl=es&z=14&output=embed`}
                          allowFullScreen
                        ></iframe>
                      </div>
                      <Button
                        variant="secondary"
                        className="mt-3"
                        onClick={() => setSelectedDomicilio(null)}
                      >
                        Ocultar Mapa
                      </Button>
                    </>
                  ) : (
                    <h4>Selecciona un domicilio para ver el mapa</h4>
                  )}
                </Col>
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DashboardSa;
