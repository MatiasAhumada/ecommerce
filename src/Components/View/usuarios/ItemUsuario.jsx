import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { borrarUsuarioAPI, consultarUsuarioApi } from "../../helpers/queris";

const ItemUsuario = ({ usuario, setUsuarios }) => {
  const borrarUsuario = () => {
    Swal.fire({
      title: "¿Estas seguro que deseas eliminar el usuario?",
      text: "No se puede revertir este paso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        borrarUsuarioAPI(usuario._id).then((respuesta) => {
          if (respuesta.status === 200) {

            consultarUsuarioApi().then((respuesta)=>{
              setUsuarios(respuesta)

            })

            Swal.fire(
              "Usuario eliminado",
              "El usuario fue correctamente borrado",
              "success"
            );
          } else {
            Swal.fire(
              "Se produjo un error",
              "Intente realizar esta operacion mas tarde",
              "success"
            );
          }
        });

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <tr>
      <td>{usuario._id}</td>
      <td>{usuario.nombre}</td>
      <td>{usuario.email}</td>
      
    
      <td>
        
        <Link className="btn btn-warning"  to={`/administrar/editarUsuario/${usuario._id}`}> Editar</Link>
        <Button variant="danger"  onClick={borrarUsuario}>
          Borrar
          
        </Button>
      </td>
    </tr>
  );
};

export default ItemUsuario;

