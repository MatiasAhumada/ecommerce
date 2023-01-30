import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { borrarPedidoAPI, consultarPedidosAPI } from "../../helpers/queris";
import Swal from "sweetalert2";

const ItemPedido = ({ pedido, setPedidos }) => {

  const borrarPedido = () => {
    Swal.fire({
      title: "¿Esta seguro de eliminar el pedido?",
      text: "No se puede revertir este paso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        borrarPedidoAPI(pedido._id).then((respuesta) => {
          if (respuesta.status === 200) {
            consultarPedidosAPI().then((respuesta) => {
              setPedidos(respuesta);
            });

            Swal.fire(
              "pedido eliminado!",
              "El pedido fue correctamnete eliminado.",
              "success"
            );
          } else {
            Swal.fire(
              "Se produjo un error!",
              "Intente realizar esta operacion mas tarde.",
              "error"
            );
          }
        });
      }
    });
  };

  return (
    <tr className="text-center">
      <td>{pedido.nombrePedido}</td>
      <td>
        <p className="cortarText">{`${pedido.pedido}`}</p>
      </td>
      <td>{pedido.estado}</td>
      <td>{pedido.metodo}</td>
      <td>
        <Link
          className="btn btn-dark me-2 mb-1"
          to={`/administrar/editar-pedido/${pedido._id}`}
        >
          Editar
        </Link>
        <Button variant="danger" className="mb-1" onClick={borrarPedido}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemPedido;