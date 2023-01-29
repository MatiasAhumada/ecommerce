import {  Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import ListItemPedido from "./ListaItemPedido";

const ListaPedido = ({ menuPedido, borrarItem }) => {
   
  return (
    <ListGroup>
      <Row>
        {menuPedido.map((producto, posicion) => (
          <ListItemPedido
            key={posicion}
            producto={producto}
            borrarItem={borrarItem}
          ></ListItemPedido>
        ))}
      </Row>
    </ListGroup>
  );
};

export default ListaPedido;