import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Button
 
} from "react-bootstrap";
import { Link, useNavigate, NavLink } from "react-router-dom";
import {BiSearchAlt} from 'react-icons/bi'

const Cabeza = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navegar = useNavigate();
  function logout() {
    localStorage.removeItem("usuarioEcommerce");
    setUsuarioLogueado({});
    navegar("/");
  }
  return (
    <Navbar bg="light" expand="lg" >
      <Container >
       
        <Navbar.Brand as={Link} to="/">
          Tecno Más
        </Navbar.Brand> 
       
        <Navbar.Toggle aria-controls="navbarScroll"  />
        
        <Navbar.Collapse id="navbarScroll" className="d-flex justify-content-around"  >
         <div>
            <Form className="d-flex ">
            <Form.Control
              type="search"
              placeholder="Buscador"
              className="px-5 mx-2 text-center"
              aria-label="Buscador"
            />
            <Button variant="outline-success"><BiSearchAlt></BiSearchAlt></Button>
          </Form>
          </div>
          <div>
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
        
            <NavLink to="/" className=" btn btn-secondary mx-2">
              Inicio
            </NavLink>
            <NavLink to="/nosotros" className="btn btn-secondary mx-2">
              Nosotros
            </NavLink>
           
           

        
            {usuarioLogueado.isAdmin ? (
              <>
                <NavDropdown
                  title="Administrador"
                  className="text-dark mx-2"
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
                <Button variant="dark" className="text-white mx-2" onClick={logout}>
                  Salir
                </Button>
              </>
            ) : (
              <>
              <NavLink to="/login" className="btn btn-secondary mx-2">
                Iniciar Sesión
              </NavLink>
              <NavLink to="/registro" className="btn btn-secondary mx-2">
              Registrarse
            </NavLink>
              </>
            )}
        
          </Nav>
          </div>
        </Navbar.Collapse>
      
    </Container>  
    </Navbar>
  );
};

export default Cabeza;
