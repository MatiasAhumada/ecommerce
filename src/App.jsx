

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cabeza from './Components/common/Cabeza';
import Pie from './Components/common/Pie';
import Inicio from './Components/Inicio';
import Login from './Components/Login'
import Register from './Components/Register'
import RutasProtegidas from './Components/routes/RutasProtegidas';
import RutasAdmin from './Components/routes/RutasAdmin';
import AdminUsuarios from './Components/AdminUsuarios';
import AdminPedidos from './Components/AdminPedidos';
import DetallePedido from './Components/View/pedidos/DetallePedido';
import DetalleProducto from './Components/View/productos/DetalleProducto';

import CrearPedido from './Components/View/pedidos/CrearPedido';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'
import 'react-icons';
import "./App.css";
import { useState } from 'react';
import Transferencia from './Components/View/pedidos/Transferencia';
import Efectivo from './Components/View/pedidos/Efectivo';
function App() {
  
  const usuario = JSON.parse(localStorage.getItem("usuarioEcommerce")) || [];
  const [usuarioLogeado, setUsuarioLogeado] = useState(usuario);
  return (
   
      <BrowserRouter>
      <Cabeza
        usuarioLogueado={usuarioLogeado}
        setUsuarioLogueado={setUsuarioLogeado}
        ></Cabeza>
        <Routes ><Route exact path="/" element={<Inicio ></Inicio>}></Route>
        
               <Route exact
          path='/detalle-producto/:id'
          element={<DetalleProducto></DetalleProducto>}> </Route>
         
          <Route
            exact
            path="/adminUsuarios"
            element={<AdminUsuarios></AdminUsuarios>}
          ></Route>
          <Route
            exact
            path="/adminPedidos"
            element={<AdminPedidos></AdminPedidos>}
          ></Route>
           {/* <Route exact path="/nosotros" element={<Nosotros></Nosotros>}></Route> */}
           <Route
          exact
          path="/detalle-pedido/:id"
          element={<DetallePedido></DetallePedido>}
        ></Route>
       
          <Route
          exact
          path="/crear-pedido"
          element={
            <CrearPedido usuarioLogueado={usuarioLogeado}></CrearPedido>
          }
        ></Route>
        <Route exact path="/registro" element={<Register></Register>} />
        <Route
            exact
            path="/login"
            element={<Login setUsuarioLogeado={setUsuarioLogeado}></Login>}
          />
                         {/* <Route exact path="/error404" element={<Error404></Error404>}></Route> */}
     

        <Route
            path="/administrar/*"
            element={
              <RutasProtegidas>
                <RutasAdmin></RutasAdmin>
              </RutasProtegidas>
            }
          ></Route>
          <Route
          path='/transferencia'
          element={
            <Transferencia></Transferencia>
          }></Route>
          <Route
          path='/efectivo'
          element={
            <Efectivo></Efectivo>
          }></Route>
          </Routes>
      <Pie></Pie>
      </BrowserRouter>

  );
}

export default App;
