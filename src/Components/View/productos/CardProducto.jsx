// import "../../css/inicio.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import { Link, useNavigate } from "react-router-dom";
import { Badge, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const CardProducto = (props) => {
  const usuario = JSON.parse(localStorage.getItem("usuarioEcommerce")) || [];
  const navegacion = useNavigate();
  const onClick = () => {
    if (usuario == "") {
      navegacion("/login");
      Swal.fire("Debe estar logeado para realizar esta accion");
    } else {
      navegacion("/crear-pedido");
    }
  };

  return (
    <Container className="mt-4">
      <Card className="dos inicio ">
        <Card.Img variant="top" src={props.imagen} />
        <Card.Body>
          <Card.Title className="dos">{props.nombreProducto}</Card.Title>
          <Badge bg='warning' className="text-dark">{props.marca}</Badge>
          <Card.Text>{props.resena}</Card.Text>
          <Badge bg='warning' className="text-dark">${props.precio}</Badge>
        </Card.Body>
        
        
        <Card.Body>
       
          <Button className="dos mt-2"  onClick={onClick}>
            Comprar
          </Button>
          <Button
            className="dos ms-1 mt-2"
            as={Link}
            to={`/detalle-producto/${props.id}`}
          >
            Ver más
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CardProducto;