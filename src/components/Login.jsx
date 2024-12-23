import { Card, Form, Button } from "react-bootstrap";
import "./Login.css"; // Archivo CSS para el gradiente de fondo
import { useNavigate } from "react-router-dom";


const Login = () => {

    const navigate = useNavigate(); // Hook para navegar a otras páginas

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log("Datos enviados:", { email, password });
    // Aquí puedes añadir lógica para enviar datos a una API
    
    navigate("/dashboard"); // Navegar a la página de dashboard

};

  return (
    <div className="login-container">
      <Card className="login-card">
        <Card.Body>
          <h2 className="text-center mb-4">Iniciar Sesión</h2>
          <Form onSubmit={handleSubmit}>
            {/* Campo de Email */}
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="correo@ejemplo.com"
                required
              />
            </Form.Group>

            {/* Campo de Contraseña */}
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="********"
                required
              />
            </Form.Group>

            {/* Botón de Iniciar Sesión */}
            <Button variant="primary" type="submit" className="w-100">
              Iniciar Sesión
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
