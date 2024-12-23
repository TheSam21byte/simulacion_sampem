import { Container, Row, Col, Nav } from "react-bootstrap";

const Dashboard = () => {
  return (
    <div className="d-flex vh-100">
      {/* Barra lateral */}
      <Nav className="flex-column bg-dark text-white p-3" style={{ width: "250px" }}>
        <h4 className="text-center">Menú</h4>
        <Nav.Link href="#" className="text-white">Actividades</Nav.Link>
        <Nav.Link href="#" className="text-white">Usuarios</Nav.Link>
        <Nav.Link href="#" className="text-white">Subir informes</Nav.Link>
        <Nav.Link href="#" className="text-white">Configuración</Nav.Link>
      </Nav>

      {/* Contenido principal */}
      <Container fluid className="p-4">
        <Row>
          <Col>
            <h1>Dashboard</h1>
            <p>Bienvenido al panel de control. Selecciona una opción del menú.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
