import { useEffect, useState } from "react";
import { Table}  from "react-bootstrap";
import { Link } from "react-router-dom";
import { consultarProductoApi } from "../Components/helpers/queris";
import ItemProducto from '../Components/View/productos/ItemProducto'


const Admin =()=>{
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        
        consultarProductoApi().then((respuesta) => {
       
          setProductos(respuesta);
        });
      }, []);
    
      return (
        <section className="container mainSection">
          <div className="justify-content-between align-items-center mt-5">
            <h1 className="display-4">Productos disponibles</h1>
            <Link className="btn btn-primary" to="/administrar/crear">Agregar</Link>
          </div>
          <hr />
          
          <Table responsive bordered hover >
            <thead>
              <tr>
                <th>Id del Producto</th>
                <th>Producto</th>
                <th>Precio</th>
                <th>URL de Imagen</th>
                <th>Categoria</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody className="w-100">
             {
                productos.map((productos)=><ItemProducto key={productos._id} producto={productos} setProductos={setProductos}></ItemProducto>)
             }
             
            </tbody>
          </Table>
        </section>
      );
    };

    export default Admin;