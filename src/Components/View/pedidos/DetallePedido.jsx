import { Card, Badge, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { obtenerPedidoAPI } from "../../helpers/queris";

const DetallePedido = () => {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [pedido, setPedido] = useState("");
  const [total, setTotal] = useState("");
  const [estado, setEstado] = useState("");
  const { id } = useParams();

  useEffect(() => {
    obtenerPedidoAPI(id).then((respuesta) => {
      if (respuesta.status === 200) {
        setNombreUsuario(respuesta.dato.nombreUsuario);
        setPedido(respuesta.dato.pedido);
        setTotal(respuesta.dato.total);
        setEstado(respuesta.dato.estado);
      } else {
        Swal.fire(
          "Ocurrio un error",
          "Intente este paso en unos minutos",
          "error"
        );
      }
    });
  }, []);
  return (
    <div className="backgroundGral mainSection">
      <Container>
        <h5 className="text-center display-5 my-3">
          Pedido de: {nombreUsuario}
        </h5>
        <Card>
          <Card.Header>
            <Card.Title className=" fs-4">
              Pedido a nombre de: {nombreUsuario}
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Badge bg="dark" className="fs-6 mb-2 text-warning">
              {estado}
            </Badge>
            <Card.Text>
              Pedido: <br /> {`${pedido}`}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Subtitle className="fs-4">Total: ${total}</Card.Subtitle>
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
};

export default DetallePedido;