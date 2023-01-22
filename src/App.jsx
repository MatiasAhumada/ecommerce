

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cabeza from './Components/common/Cabeza';
import Pie from './Components/common/Pie';
import Inicio from './Components/View/Inicio';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'
import 'react-icons';
import "./App.css";

function App() {
  // const usuario = JSON.parse(localStorage.getItem("usuario")) || [];
  // const [usuarioLogeado, setUsuarioLogeado] = useState(usuario);
  return (
   
      <BrowserRouter>
      <Cabeza
        // usuarioLogueado={usuarioLogeado}
        // setUsuarioLogueado={setUsuarioLogeado}
        ></Cabeza>
        <Routes >
               <Route exact path="/" element={<Inicio ></Inicio>}></Route>
        </Routes>
      <Pie></Pie>
      </BrowserRouter>

  );
}

export default App;
