import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { crearProductoApi } from "../../helpers/queris";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// import "../../../css/editarProducto.css"


const CrearProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      nombreProducto: "",
      precio: 1,
      imagen: "",
      detalle: "",
      categoria: "",
    },
  });
  const navegacion = useNavigate();

  const onSubmit = (datos) => {
    crearProductoApi(datos).then((respuesta) => {
      if (respuesta.status === 201) {
        Swal.fire(
          "Producto creado",
          "El producto fue creado correctamente",
          "success"
        );
        reset();
        navegacion("/administrar");
      } else {
        Swal.fire("Ocurrio un error ", "Intentelo mas tarde", "error");
      }
    });
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5 text-center">Nuevo producto</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3 " controlId="formNombreProdcuto">
          <Form.Label className="crearProducto">Nombre producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder=" Ej:  Taco Epiko"
            
            {...register("nombreProducto", {
              required: "Este dato es obligatorio",
              minLength: {
                value: 2,
                message: "Debe ingresar como minimo 2 caracteres",
              },
              maxLength: {
                value: 50,
                message: "Debe ingresar como maximo 20 caracteres",
              },
            })}
          />
          <Form.Text  className="text-white">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label  className="crearProducto">Detalle del producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder=" Ej:  Este producto contiene los sigs ingredientes y detalles de la preparación"
            {...register("detalle", {
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
          <Form.Text className="text-white">
            {errors.detalle?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label  className="crearProducto">Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder=" Ej: 10"
            {...register("precio", {
              required: "El precio es un valor requerido",
              min: {
                value: 1,
                message: "El precio debe ser como minimo de $10",
              },
              max: {
                value: 1000000,
                message: "El precio de producto como maximo debe ser de 10000",
              },
            })}
          />
          <Form.Text className="text-white">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label className="crearProducto">Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/foto/alimentos-cocidos-en-placa-azul-2092507/"
            {...register("imagen", {
              required: "La url de la imagen es obligatoria",
              pattern: {
                value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                message: "Debe ingresar una URL válida",
              },
            })}
          />
          <Form.Text className="text-white">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label  className="crearProducto">Categoria*</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "Debe seleccionar una categoría",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="picante epiko">Samsung</option>
            <option value="medio picante">Motorola</option>
            <option value="comida caliente">LG</option>
            <option value="comida fria">Apple</option>
          </Form.Select>
          <Form.Text className="text-white">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="danger"  type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default CrearProducto;
