import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom"

export default function Navigation() {
  return (
    <>
      <Navbar bg="warning" variant="dark">
        <Container className="justify-content-start">
          <Link to="/" className="text-dark ms-3 text-decoration-none">Home</Link>
          <Link to="/contacto" className="text-dark ms-3 text-decoration-none">Contacto</Link>
        </Container>
        <Container className="justify-content-end">
          <Navbar.Brand className="text-dark">Happy Cake SPA</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
