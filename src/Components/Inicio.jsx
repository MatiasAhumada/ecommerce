import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { consultarProductoApi } from "./helpers/queris";
import Banner from "./home/Banner";
import Spiner from "./Spiner";
import CardProducto from "./View/productos/CardProducto";
import "./css/inicio.css";
import { useNavigate } from "react-router-dom";

const Inicio = (props) => {
  const [mostrarSpiner, setMostrarSpiner] = useState(true);

  const navegacion = useNavigate();
  useEffect(() => {
    consultarProductoApi().then((respuesta) => {
      try {
        if (respuesta) {
          setMostrarSpiner(false);
        } else {
          setMostrarSpiner(true);
          navegacion("/error404");
        }
      } catch (error) {
        console.log(error);
      }
    });
  }, []);
  const mostrarComponente =
    mostrarSpiner === true ? (
      <Spiner className="mt-5 pt-5"></Spiner>
    ) : (
      <Row xs={1} md={3} lg={4} className="my-5 ">
        {props.productos.map((objeto, _id) => (
          <CardProducto
            key={_id}
            nombreProducto={objeto.nombreProducto}
            precio={objeto.precio}
            imagen={objeto.imagen}
            marca={objeto.marca}
            resena={objeto.resena}
            id={objeto._id}
          ></CardProducto>
        ))}
      </Row>
    );

  return (
    <section>
      <Banner> </Banner>
      {mostrarComponente}
    </section>
  );
};

export default Inicio;
