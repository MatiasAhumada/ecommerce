import { Col, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardPedido = ({ pedido}) => {
  return (
    <Col sm={12} md={4} lg={3}>
      <Card className="mb-4">
        <Card.Header>
          <Card.Title>Pedido de: {pedido.nombrePedido}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Subtitle className="fs-5">
            Estado:
            <Badge bg="dark" className="ms-4 text-warning">
              {pedido.estado}
            </Badge>
          </Card.Subtitle>
        </Card.Body>
        <Card.Footer>
          <Link
            className="btn btn-warning"
            to={`/detalle-pedido/${pedido._id}`}
          >
            Ver detalle del pedido
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardPedido;