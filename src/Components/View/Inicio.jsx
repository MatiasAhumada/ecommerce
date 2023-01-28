
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { consultarProductoApi } from '../helpers/queris';
import Banner from '../home/Banner';
import Spiner from '../Spiner';
import CardProducto from './productos/CardProducto';
import '../css/inicio.css'

const Inicio = () => {
    
    const [productos, setProductos] = useState([]);
    const [mostrarSpiner, setMostrarSpiner] = useState(true);
    useEffect(() => {
      consultarProductoApi().then((respuesta) => {
        try{      
          setMostrarSpiner(true);
          setProductos(respuesta);
          setMostrarSpiner(false);
  
        }catch(error){
          console.log(error)}
      });
    }, []);
    const mostrarComponente =
  mostrarSpiner === true ? (
   <Spiner className='mt-5 pt-5'></Spiner>
  ) : (
    <Row xs={1} md={4} lg={4} className="g-4 my-5">
        
        {productos.map((objeto, _id) => (
          <CardProducto
            key={_id}
            nombreProducto={objeto.nombreProducto}
            precio={objeto.precio}
            imagen={objeto.imagen}
            marca={objeto.marca}
            ={obj}
            ={obj}
            ={obj}
            ={obj}
            ={obj}
            ={obj}
            ={obj}
            ={obj}
            id={objeto._id}
          ></CardProducto>
        ))}
      </Row>
  );

    return (
        <section>
            <Banner>  </Banner>
            {mostrarComponente}
        </section>
    );
};

export default Inicio;