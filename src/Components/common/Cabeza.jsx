import React from 'react';
import{ Container, Nav, Navbar, NavDropdown, Form, Button } from 'react-bootstrap';
import { Link, useNavigate, NavLink } from "react-router-dom";

const Cabeza = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navegar = useNavigate();
  function logout() {
    localStorage.removeItem("usuarioBar");
    setUsuarioLogueado({});
    navegar("/");
  }
    return (
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to='/'>Tecno Más</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to="/" className="nav">Inicio</NavLink>
            <NavLink to="/nosotros" className="nav">Nosotros</NavLink>           
            <NavLink to="/menu" className="nav">Menu</NavLink>
            <NavLink to="/registro" className="nav">Registro</NavLink>

            {usuarioLogueado.email ? (
              <>
                <Button variant="white" className="text-white" onClick={logout}>
                  Salir
                </Button>
              </>
            ) : (
              <NavLink to="/login" className="nav">Iniciar Sesión</NavLink>
            )}

            {usuarioLogueado.isAdmin ? (
              <>
                <NavDropdown title="Administrador" id="nav-dropdown">
                  <NavDropdown.Item
                    eventKey="4.1"
                    as={Link}
                    to={"/administrar"}
                  >
                    Productos
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    eventKey="4.2"
                    as={Link}
                    to={"/adminPedidos"}
                  >
                    Pedidos
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    eventKey="4.3"
                    as={Link}
                    to={"/adminUsuarios"}
                  >
                    Usuarios
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <></>
            )}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Cabeza;