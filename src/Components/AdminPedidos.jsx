import { useEffect, useState } from "react";
import { Table}  from "react-bootstrap";
// import { Link } from "react-router-dom";
import {consultarPedidosAPI } from "./helpers/queris";
import ItemPedido from './View/pedidos/ItemPedido'
// import "../../css/adminPedidos.css";

const AdminPedidos = () => {
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        
        consultarPedidosAPI().then((respuesta) => {
          setPedidos(respuesta);
        });
      }, []);
    
      return (
        <section className="container mainSection">
          <div className="align-items-center mt-5">
            <h1 className="display-4">Pedidos disponibles</h1>
       
          </div>
          <hr />
          
          <Table responsive bordered hover  >
            <thead>
              <tr className="text-center">
                
                <th>Usuario</th>
                <th>Pedido</th>
               
                <th>Estado</th>
                <th>Forma de pago</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
             {pedidos.map((pedido) => (
                <ItemPedido
                  key={pedido._id}
                  pedido={pedido}
                  setPedidos={setPedidos}
                ></ItemPedido>
              ))}
             
            </tbody>
          </Table>
        </section>
      );
};

export default AdminPedidos;