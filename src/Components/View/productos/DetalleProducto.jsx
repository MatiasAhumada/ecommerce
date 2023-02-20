import { Badge, Card, Col, Row, Image, Button} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
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
  
  const usuario = JSON.parse(localStorage.getItem("usuarioEcommerce")) || [];
  const navegacion = useNavigate();
  const onClick = () => {
    if (usuario === "") {
      navegacion("/login");
      Swal.fire("Debe estar logeado para realizar esta accion");
    } else {
      navegacion("/crear-pedido");
    }
  };

  return (
    <Card className="container my-5   detalle">
      <Row className="mt-5 ">
        <Col md={12} lg={8} sm={12}>
     
          <Image src={detalle.imagen} alt="Comida" className="w-100" />
        </Col>
        <Col md={12} lg={4} sm={12} className="mt-4">
          <Card.Title className="fs-1 text-center">{detalle.nombreProducto}</Card.Title>
          <hr />
          
          <Badge bg="success fs-5" >{detalle.marca}</Badge>
          <Card.Text className="mt-3 fs-5">
            <b>Precio: ${detalle.precio}</b>
          </Card.Text>
          <Card.Text className="fs-5">Pantalla: {detalle.pantalla}</Card.Text>
          <Card.Text className="fs-5">Procesador: {detalle.procesador}</Card.Text>
          <Card.Text className="fs-5">Sistema: Android {detalle.android}</Card.Text>
          <Card.Text className="fs-5">Memoria Interna {detalle.interna}</Card.Text>
          <Card.Text className="fs-5">Expandible hasta {detalle.expandible}</Card.Text>
          <Card.Text className="fs-5">Memoria Ram de {detalle.ram}</Card.Text>
          <Card.Text className="fs-5">Camara de {detalle.camara}</Card.Text>
          <Card.Text className="fs-5">Liberado: {detalle.liberado}</Card.Text>
         
          <Button className="dos mt-2"  onClick={onClick}>
            Comprar
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default DetalleProducto;