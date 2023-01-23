

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cabeza from './Components/common/Cabeza';
import Pie from './Components/common/Pie';
import Inicio from './Components/View/Inicio';
import Login from './Components/Login'
import Register from './Components/Register'
import RutasProtegidas from './Components/routes/RutasProtegidas';
import RutasAdmin from './Components/routes/RutasAdmin';
import AdminUsuarios from './Components/AdminUsuarios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'
import 'react-icons';
import "./App.css";
import { useState } from 'react';
import DetalleProducto from './Components/View/productos/DetalleProducto';

function App() {
  
  const usuario = JSON.parse(localStorage.getItem("usuarioEcommerce")) || [];
  const [usuarioLogeado, setUsuarioLogeado] = useState(usuario);
  return (
   
      <BrowserRouter>
      <Cabeza
        usuarioLogueado={usuarioLogeado}
        setUsuarioLogueado={setUsuarioLogeado}
        ></Cabeza>
        <Routes >
               <Route exact path="/" element={<Inicio ></Inicio>}></Route>
        
        <Route
            exact
            path="/login"
            element={<Login setUsuarioLogeado={setUsuarioLogeado}></Login>}
          />
                    <Route exact path="/registro" element={<Register></Register>} />

        <Route
            path="/administrar/*"
            element={
              <RutasProtegidas>
                <RutasAdmin></RutasAdmin>
              </RutasProtegidas>
            }
          ></Route>
          <Route
            exact
            path="/adminUsuarios"
            element={<AdminUsuarios></AdminUsuarios>}
          ></Route>
          <Route exact
          path='/detalle-producto/:id'
          element={DetalleProducto}> </Route>
          </Routes>
      <Pie></Pie>
      </BrowserRouter>

  );
}

export default App;
