import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Button,
  Row,
  Col,
  InputGroup,
} from "react-bootstrap";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

const Cabeza = ({
  usuarioLogueado,
  setUsuarioLogueado,

  handleChange,
  busqueda,
}) => {
  const navegar = useNavigate();
  function logout() {
    localStorage.removeItem("usuarioEcommerce");
    setUsuarioLogueado({});
    navegar("/");
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Tecno Más
        </Navbar.Brand>
        <Form className="d-flex  w-50 ms-lg-4 me-lg-5">
          <Form.Control
            type="search"
            placeholder="Estoy en busca de..."
            className="  text-center "
            aria-label="Buscador"
            value={busqueda}
            onChange={handleChange}
          />
          <InputGroup.Text className="bg-white">
            <BiSearchAlt className="fs-4 text-success"></BiSearchAlt>
          </InputGroup.Text>
        </Form>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
        
          <Nav className=" my-2 text-center my-lg-2 ">
            
        
            <NavLink to="/" className=" btn btn-secondary my-1 mx-2">
              Inicio
            </NavLink>
            <NavLink to="/nosotros" className="btn btn-secondary my-1 mx-2">
              Nosotros
            </NavLink>

            {usuarioLogueado.isAdmin ? (
              <>
                <NavDropdown
                  title="Administrador"
                  className="text-dark text-center my-1 mx-2"
                  id="nav-dropdown"
                >
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

            {usuarioLogueado.email ? (
              <>
                <Button
                  variant="dark"
                  className="text-white mx-2 my-1"
                  onClick={logout}
                >
                  Salir
                </Button>
              </>
            ) : (
              <>
                <NavLink to="/login" className="btn btn-secondary my-1 mx-2">
                  Iniciar Sesión
                </NavLink>
                <NavLink to="/registro" className="btn btn-secondary my-1 mx-2">
                  Registrarse
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>

        {/* </Col> */}
        {/* </Row> */}
      </Container>
    </Navbar>
  );
};

export default Cabeza;
