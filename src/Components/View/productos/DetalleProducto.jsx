import { Badge, Card, Col, Row, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { obtenerProductoApi } from "../../helpers/queris";


const DetalleProducto = () => {
  const [detalle, setDetalle] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    obtenerProductoApi(id).then((respuesta) => {
  
      if (respuesta.status === 200) {
        setDetalle(respuesta.dato);
      } else {
        Swal.fire(
          "ocurrio un error",
          "intente este de nuevo en unos minutos",
          "error"
        );
      }
    });
  }, []);

  return (
    <Card className="container mt-5  mainSection detalle">
      <Row className="mt-5 ">
        <Col md={12} lg={8} sm={12}>
          <Image src={detalle.imagen} alt="Comida" className="w-100" />
        </Col>
        <Col md={12} lg={4} sm={12} className="mt-4">
          <Card.Title className="fs-1">{detalle.nombreProducto}</Card.Title>
          <hr />
          <Card.Text className="fs-5">{detalle.detalle}</Card.Text>
          <Badge bg="light fs-5" >{detalle.categoria}</Badge>
          <Card.Text className="mt-3 fs-5">
            <b>Precio: ${detalle.precio}</b>
          </Card.Text>
        </Col>
      </Row>
    </Card>
  );
};

export default DetalleProducto;