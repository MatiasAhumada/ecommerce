import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { editarUsuarioApi, obtenerUsuarioApi } from "../../helpers/queris";
import Swal from "sweetalert2";
import "../../../css/editarPedido.css";


const EditarUsuario = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      nombreUsuario: "",
      precio: 1,
      imagen: "",
      detalle: "",
      categoria: "",
    },
  });
  const navegacion = useNavigate();

  const onSubmit = (datos) => {
    editarUsuarioApi(id, datos).then((datos) => {
      if (datos.status === 200) {
        Swal.fire("Usuario actualizado", "Bien!", "success");
        navegacion("/adminUsuarios");
      } else {
        Swal.fire("Ocurrio un error", "Intente mas tarde", "error");
      }
    });
  };

  useEffect(() => {
    obtenerUsuarioApi(id).then((respuesta) => {
      if (respuesta.status === 200) {
        setValue("id", respuesta.dato._id);
        setValue("nombre", respuesta.dato.nombre);
        setValue("email", respuesta.dato.email);
        setValue("password", respuesta.dato.password);
      } else {
        Swal.fire("Ocurrio un error", "Intente mas tarde", "error");
      }
    });
  }, []);

  return (
    <div
      style={{
        backgroundColor: "",
      }}
    >
      <section className="container mainSection">
        <h1 className="display-4 mt-5">Editar usuario</h1>
        <hr />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formid">
            <Form.Label className="editarUsuario">ID Usuario*</Form.Label>
            <Form.Control type="text" disabled {...register("id")} />

            <Form.Text className="text-danger">{errors.id?.message}</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formNombreUsuario">
            <Form.Label className="editarUsuario">Nombre del usuario*</Form.Label>
            <Form.Control
              type="text"
              placeholder=" Ej:  Pedro Perez"
              {...register("nombre", {
                required: "Este dato es obligatorio",
                minLength: {
                  value: 2,
                  message: "Debe ingresar como minimo 2 caracteres",
                },
                maxLength: {
                  value: 60,
                  message: "Debe ingresar como maximo 50 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.nombreUsuario?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label className="editarUsuario">Email del usuario*</Form.Label>
            <Form.Control
              type="text"
              placeholder=" Ej: pepito@gmail.com"
              {...register("email", {
                required: "Este dato es obligatorio",
                minLength: {
                  value: 10,
                  message: "Debe ingresar como minimo 10 caracteres",
                },
                maxLength: {
                  value: 500,
                  message: "Debe ingresar como maximo 500 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.detalleUsuario?.message}
            </Form.Text>
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Form>
      </section>
    </div>
  );
};

export default EditarUsuario;