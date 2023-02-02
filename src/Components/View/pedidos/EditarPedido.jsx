import { Button, Form, Container } from "react-bootstrap";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { editarPedidoAPI, obtenerPedidoAPI } from "../../helpers/queris";
// import "../../../css/editarPedido.css";

const EditarPedido = () => {
  const { id } = useParams();
  const navegacion = useNavigate();

  useEffect(() => {
    obtenerPedidoAPI(id).then((respuesta) => {
      if (respuesta.status === 200) {
        setValue("nombrePedido", respuesta.dato.nombrePedido);
        setValue("pedido", respuesta.dato.pedido);
        setValue("total", respuesta.dato.total);
        setValue("metodo", respuesta.dato.metodo);
        setValue("estado", respuesta.dato.estado);
       
      } else {
        Swal.fire(
          "Ocurrio un error",
          "Intente este paso en unos minutos",
          "error"
        );
      }
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      nombrePedido: "",
      pedido: "",
      total: "",
      estado: "",
    },
  });

  const onSubmit = (pedido) => {
    editarPedidoAPI(id, pedido).then((respuesta) => {
      if (respuesta.status === 200) {
        Swal.fire(
          "Pedido actualizado",
          "El pedido fue actualizado correctamente",
          "success"
        );
        navegacion("/adminPedidos");
      } else {
        Swal.fire(
          "Ocurrio un error",
          "Intente este paso en unos minutos",
          "error"
        );
      }
    });
  };

  return (
    <div className="backgroundGral mainSection">
      <Container className="my-4">
        <h2 className="editar">Editar pedido</h2>
        <hr />
      </Container>
      <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formNombrePedido">
            <Form.Label className="editar">Nombre de usuario</Form.Label>
            <Form.Control
              type="text"
             disabled
              {...register("nombrePedido", {
                required: "Este dato es obligatorio",
                minLength: {
                  value: 6,
                  message: "Debe ingresar como minimo 6 caracteres",
                },
                maxLength: {
                  value: 20,
                  message: "Debe ingresar como maximo 20 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.nombrePedido?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPedido">
            <Form.Label className="editar">Pedido*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: 1 Pizza especial"
              as="textarea"
              style={{ height: "100px" }}
              {...register("pedido", {
                required: "Este dato es obligatorio",
                minLength: {
                  value: 3,
                  message: "Debe ingresar como minimo 3 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.pedido?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formTotal">
            <Form.Label className="editar">Monto total</Form.Label>
            <Form.Control
              type="number"
              disabled
              {...register("total", {
                required: "Este dato es obligatorio",
                min: {
                  value: 1,
                  message: "El total debe ser como minimo $1",
                },
                max: {
                  value: 1000000,
                  message: "El total debe ser como minimo $1000000",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.total?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3 me-5 " controlId="formMetodo">
          <Form.Label  >Metodo de pago*</Form.Label>
          <Form.Select
            {...register("metodo", {
              required: "Debe seleccionar un metodo de pago",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="Transferencia">Transferencia</option>
            <option value="Efectivo">Efectivo</option>
            
          </Form.Select>
          <Form.Text className="text-dark">
            {errors.metodo?.message}
          </Form.Text>
                </Form.Group>
          <Form.Group className="mb-3" controlId="formEstado">
            <Form.Label className="editar">Estado</Form.Label>
            <Form.Select
              {...register("estado", {
                required: "Debe seleccionar el estado del pedido",
              })}
            >
              <option value="">Seleccione el estado del pedido</option>
              <option value="Pendiente">Pendiente</option>
              <option value="En preparacion">En preparacion</option>
              
              <option value="Cancelado">Cancelado</option>
            </Form.Select>
            <Form.Text className="text-danger">
              {errors.estado?.message}
            </Form.Text>
          </Form.Group>
          <Button variant="warning" type="submit">
            Modificar pedido
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default EditarPedido;