import { ListGroup, Button, Col } from "react-bootstrap";

const ListItemPedido = ({ producto, borrarItem }) => {
  return (
    <Col sm={12} md={6} lg={4}>
      <ListGroup.Item className="d-flex justify-content-between rounded my-2">
        {producto.nombreProducto} 
        <Button variant="danger" onClick={() => borrarItem(producto)}>
          Borrar
        </Button>
      </ListGroup.Item>
    </Col>
  );
};

export default ListItemPedido;