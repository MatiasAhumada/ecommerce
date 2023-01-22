

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cabeza from './Components/common/Cabeza';
import Pie from './Components/common/Pie';
import Inicio from './Components/View/Inicio';
import Login from './Components/Login'
import Register from './Components/Register'
import RutasProtegidas from './Components/routes/RutasProtegidas';
import RutasAdmin from './Components/routes/RutasAdmin';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'
import 'react-icons';
import "./App.css";
import { useState } from 'react';

function App() {
  
  const usuario = JSON.parse(localStorage.getItem("usuario")) || [];
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
          </Routes>
      <Pie></Pie>
      </BrowserRouter>

  );
}

export default App;
