// import "../../css/views.css";

import React, { useEffect, useState } from 'react'
import { Card, Container } from "react-bootstrap";
import { consultarPedidosAPI } from "../helpers/queris";


const Pedidos = () => {
  const [pedido, setPedido] = useState([])
  useEffect(() => {
    consultarPedidosAPI().then((respuesta)=>{
      setPedido(respuesta)
    })
  }, [])
  
    return (
        <Container>
        <Card className="gridLogin">
        <Card.Header className="bgColor p-4 m-1 text-center text-white">
        <Card.Title className="textLogin">Mis pedidos</Card.Title>
        </Card.Header>
          <Card.Body>
          <Card.Title className='textPedidos text-center d-flex align-items-center justify-content-center align-content-center'>
            ¡Ups! Parece que aún no realizaste ningún pedido.
          </Card.Title>
          </Card.Body>
        </Card>
        </Container>
    );
};

export default Pedidos;