import { Button, Card, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { crearUsuario } from "../Components/helpers/queris";

import { useNavigate } from "react-router-dom";

const Register = () => {
  const navegar = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      nombre: "",
      email: "",
      password: "",
      isAdmin: false,
    },
  });

  const onSubmit = (datos) => {
    crearUsuario(datos).then((respuesta) => {
      if (respuesta.status === 201) {
        Swal.fire(
          "Te has registrado",
          " Ahora puedes ingresar con tu cuenta!",
          "success"
        );
        reset();
        navegar("/login");
      } else {
        Swal.fire(
          "Hubo un error inesperado",
          "Intentelo de nuevo mas tarde",
          "error"
        );
      }
    });
  };

  return (
    
    <Container className="mt-5 registro">
      <Card className="w-100">
        <Card.Header as="h4">Registro</Card.Header>
        <Card.Body className="registro">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formNombreApellido">
              <Form.Label>Nombre y apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej:Juan Perez"
                {...register("nombre", {
                  required: "Campo obligatorio",
                  minLength: {
                    value: 5,
                    message: "Ingrese mínimo 5 caracteres",
                  },
                  maxLength: {
                    value: 50,
                    message: "Ingresa máximo 50 caracteres",
                  },
                })}
              />
              <Form.Text className="text-dark">
                {errors.nombre?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
             
                type="email"
                placeholder ="Ej: JuanPeres@mail.com"
                {...register("email", {
                  required: "Campo obligatorio",
                  minLength: {
                    value: 10,
                    message: "Ingrese mínimo 10 caracteres",
                  },
                  maxLength: {
                    value: 50,
                    message: "Ingrese mínimo 50 caracteres",
                  },
                  pattern: {
                    value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                    message: "Ingresar un email valido",
                  },
                })}
              />
              <Form.Text className="text-dark">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresar contraseña"
                {...register("password", {
                  required: "Compo olbigatorio",
                  minLength: {
                    value: 5,
                    message: "Ingrsar mínimo 5 caracteres",
                  },
                  maxLength: {
                    value: 30,
                    message: "Ingresar máximo 30 caracteres",
                  },
                  pattern: {
                    value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                    message: "La contraseña debe contener 6 caracteres minimo, compuestos por 1 letra mayuscula, 1 minuscula, 1 numero y un caracter (!?@$#/&)",
                  },
                })}
              />
              <Form.Text className="text-dark">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <Button type="submit" className="mt-3">
              Crear Usuario
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Register;
