import { Card, Form, Button } from "react-bootstrap";
import "./Login.css"; // Archivo CSS para el gradiente de fondo
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const users =  [
  {
    id: 1,
    nombre: "Juan",
    apellido1: "Pérez",
    apellido2: "López",
    email: "admin1@example",
    password: "123",
    rol: "DE_SA",
  },
  {
    id: 2,
    nombre: "Ana",
    apellido1: "García",
    apellido2: "Martínez",
    email: "admin2@example",
    password: "123",
    rol: "DE_PS",
  },
  {
    id: 3,
    nombre: "Luis",
    apellido1: "Rodríguez",
    apellido2: "Fernández",
    email: "admin3@example",
    password: "123",
    rol: "DE_IS",
  },
];


const Login = () => {

  const navigate = useNavigate(); // Hook para navegar a otras páginas

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const user = users.find(
      (u) => u.email == email && u.password == password
    );

    if(!user){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
      return;
    };

    if(user.rol == "DE_SA"){

      Swal.fire({
        title: "Drag me!",
        icon: "success",
        draggable: true
      });
      navigate("/dashboard/sa");

    }

    if(user.rol =="DE_PS"){
      Swal.fire({
        title: "Bienvenido Promoción de la Salud",
        icon: "success",
        draggable: true
      });
      navigate("/dashboard/ps");
    }

    if(user.rol =="DE_IS"){
      Swal.fire({
        title: "Bienvenido Inteligencia Sanitaria",
        icon: "success",
        draggable: true
      });
      navigate("/dashboard/ps");
    }



    console.log("Datos enviados:", { email, password });
    // Aquí puedes añadir lógica para enviar datos a una API
    
    navigate("/dashboard/sa"); // Navegar a la página de dashboard

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
