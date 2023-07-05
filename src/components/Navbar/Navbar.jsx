import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import './navbar.css';



export const Navbarr = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">SuePC</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Categorías" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Notebooks</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Computadoras</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Tablets</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Componentes" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Memoria Ram</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Discos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Motherboard</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Accesorios" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Mouse</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Teclados</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Parlantes</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>

  )
}