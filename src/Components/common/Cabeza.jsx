import React from 'react';
import{ Container, Nav, Navbar, NavDropdown, Form, Button } from 'react-bootstrap';
import { Link, useNavigate, NavLink } from "react-router-dom";

const Cabeza = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navegar = useNavigate();
  function logout() {
    localStorage.removeItem("usuarioEcommerce");
    setUsuarioLogueado({});
    navegar("/");
  }
    return (
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to='/'>Tecno Más</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to="/" className=" btn btn-secondary">Inicio</NavLink>
            <NavLink to="/nosotros" className="btn btn-secondary">Nosotros</NavLink>           

           

          

            {usuarioLogueado.isAdmin ? (
              <>
                <NavDropdown title="Administrador" className='text-dark' id="nav-dropdown">
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
              <NavLink to="/registro" className="btn btn-secondary">Registro</NavLink>

            )}
              {usuarioLogueado.email ? (
              <>
                <Button variant="dark" className="text-white" onClick={logout}>
                  Salir
                </Button>
              </>
            ) : (
              <NavLink to="/login" className="nav">Iniciar Sesión </NavLink>
              
            )}
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Cabeza;