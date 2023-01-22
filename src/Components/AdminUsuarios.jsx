import { useEffect, useState } from "react";
import {Table} from "react-bootstrap";
import { Link } from "react-router-dom";
import { consultarUsuarioApi } from "../Components/helpers/queris";
import ItemUsuario from "./View/usuarios/ItemUsuarios";


const AdminUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    consultarUsuarioApi().then((respuesta) => {
      setUsuarios(respuesta);
    });
  }, []);

  return (
    <section className="container mainSection ">
      <div className="align-items-center ">
        <h1 className="display-4">Usuarios disponibles</h1>
        <Link className="btn btn-primary" to="/administrar/crearUsuario">
          Agregar
        </Link>
      </div>
      <hr />

      <Table responsive  bordered hover>
        <thead>
          <tr>
            <th>Id del Usuario</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Funciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuarios) => (
            <ItemUsuario
              key={usuarios._id}
              usuario={usuarios}
              setUsuarios={setUsuarios}
            ></ItemUsuario>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default AdminUsuarios;
