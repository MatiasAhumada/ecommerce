import { Routes, Route } from "react-router-dom";
import Admin from "../Admin";
// import EditarPedido from "../View/pedidos/EditarPedido";
import CrearProducto from "../View/productos/CrearProducto";
import EditarProducto from "../View/productos/EditarProducto";
import CrearUsuario from "../View/usuarios/CrearUsuario";
import EditarUsuario from "../View/usuarios/EditarUsuario";

const RutasAdmin = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Admin></Admin>} />
        <Route
          exact
          path="/crear"
          element={<CrearProducto></CrearProducto>}
        ></Route>
        <Route
          exact
          path="/crearUsuario"
          element={<CrearUsuario></CrearUsuario>}
        ></Route>
        <Route
          exact
          path="/editar/:id"
          element={<EditarProducto></EditarProducto>}
        ></Route>
        {/* <Route
          exact
          path="/editar-Pedido/:id"
          element={<EditarPedido></EditarPedido>}
        ></Route> */}
        <Route
          exact
          path="/editarUsuario/:id"
          element={<EditarUsuario></EditarUsuario>}
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdmin;