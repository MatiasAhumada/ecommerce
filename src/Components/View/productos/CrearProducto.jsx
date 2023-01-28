import { useForm } from "react-hook-form";
import { Form, Button, FormGroup } from "react-bootstrap";
import { crearProductoApi } from "../../helpers/queris";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// import "../../../css/editarProducto.css"


const CrearProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    
  } = useForm({
    defaultValues: {
      nombreProducto: "",
      marca: "",
      precio: '',
      imagen: "",
      pantallla: "",
      procesador:"",
      android: "",
      interna:"",
      ram:"",
      expandible:"",
      camara:"",
      liberado:"",
      resena:""
      
     
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
       
        navegacion("/administrar");
      } else {
        Swal.fire("Ocurrio un error ", "Intentelo mas tarde", "error");
      }
    });
  };

  return (
    <section className="container ">
      <h1 className="display-4 mt-5 text-center">Nuevo producto</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3 " controlId="formNombreProdcuto">
          <Form.Label >Nombre producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder=" Ej:  Samsung J2 Prime"
            
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
          <Form.Text  className="text-dark">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMarca">
          <Form.Label  >Marca*</Form.Label>
          <Form.Select
            {...register("marca", {
              required: "Debe seleccionar una categoría",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="Samsung">Samsung</option>
            <option value="Motorola">Motorola</option>
            <option value="LG">LG</option>
            <option value="Apple">Apple</option>
          </Form.Select>
          <Form.Text className="text-dark">
            {errors.marca?.message}
          </Form.Text>
        </Form.Group>
       
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label  >Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder=" Ej: 10000"
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
          <Form.Text className="text-dark">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label >Imagen URL*</Form.Label>
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
          <Form.Text className="text-dark">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPantalla">
          <Form.Label  >Pantalla*</Form.Label>
          <Form.Control
            type="text"
            placeholder=" Ej:  5 Pulgadas, 540 x 960 pixels"
            {...register("pantalla", {
              required: "Este dato es obligatorio",
              minLength: {
                value: 1,
                message: "Debe ingresar como minimo 5 caracteres",
              },
              maxLength: {
                value: 100,
                message: "Debe ingresar como maximo 500 caracteres",
              },
            })}
          />
          <Form.Text className="text-dark">
            {errors.pantalla?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formProcesador">
          <Form.Label  >Procesador*</Form.Label>
          <Form.Control
            type="text"
            placeholder=" Ej:  Mediatek MT6737T 1.4GHz"
            {...register("procesador", {
              required: "Este dato es obligatorio",
              minLength: {
                value: 1,
                message: "Debe ingresar como minimo 5 caracteres",
              },
              maxLength: {
                value: 100,
                message: "Debe ingresar como maximo 500 caracteres",
              },
            })}
          />
          <Form.Text className="text-dark">
            {errors.procesador?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAndroid">
          <Form.Label  >Android*</Form.Label>
          <Form.Control
            type="text"
            placeholder=" Ej:  Android 6.0"
            {...register("android", {
              required: "Este dato es obligatorio",
              minLength: {
                value: 1,
                message: "Debe ingresar como minimo 5 caracteres",
              },
              maxLength: {
                value: 100,
                message: "Debe ingresar como maximo 500 caracteres",
              },
            })}
          />
          <Form.Text className="text-dark">
            {errors.android?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMemoriaInterna">
          <Form.Label  >Memoria Interna*</Form.Label>
          <Form.Control
            type="text"
            placeholder=" Ej: 8GB"
            {...register("interna", {
              required: "Este dato es obligatorio",
              minLength: {
                value: 1,
                message: "Debe ingresar como minimo 5 caracteres",
              },
              maxLength: {
                value: 100,
                message: "Debe ingresar como maximo 500 caracteres",
              },
            })}
          />
          <Form.Text className="text-dark">
            {errors.interna?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formExpansibleHasta">
          <Form.Label  >Expandible hasta:*</Form.Label>
          <Form.Select
            {...register("expandible", {
              required: "Debe seleccionar una categoría",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="32GB">32GB</option>
            <option value="64BG">64BG</option>
            <option value="128GB">128GB</option>
            <option value="256GB">256GB</option>
            
          </Form.Select>
          <Form.Text className="text-dark">
            {errors.expansible?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMemoriaRam">
          <Form.Label  >Memoria Ram*</Form.Label>
          <Form.Control
            type="text"
            placeholder=" Ej:  1.5GB"
            {...register("ram", {
              required: "Este dato es obligatorio",
              minLength: {
                value: 1,
                message: "Debe ingresar como minimo 5 caracteres",
              },
              maxLength: {
                value: 100,
                message: "Debe ingresar como maximo 500 caracteres",
              },
            })}
          />
          <Form.Text className="text-dark">
            {errors.ram?.message}
          </Form.Text>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formCamara">
          <Form.Label  >Camara*</Form.Label>
          <Form.Control
            type="text"
            placeholder=" Ej:  8 MP"
            {...register("camara", {
              required: "Este dato es obligatorio",
              minLength: {
                value: 1,
                message: "Debe ingresar como minimo 5 caracteres",
              },
              maxLength: {
                value: 100,
                message: "Debe ingresar como maximo 500 caracteres",
              },
            })}
          />
          <Form.Text className="text-dark">
            {errors.camara?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLiberado">
          <Form.Label  >Liberado*</Form.Label>
          <Form.Select
            {...register("liberado", {
              required: "Debe seleccionar una categoría",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="SI">SI</option>
            <option value="NO">NO</option>
            
          </Form.Select>
          <Form.Text className="text-dark">
            {errors.liberado?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMemoriaRam">
          <Form.Label  >Memoria Ram*</Form.Label>
          <Form.Control
            type="text"
            placeholder=" Ej:  Detalles del equipo"
            {...register("resena", {
              required: "Este dato es obligatorio",
              minLength: {
                value: 100,
                message: "Debe ingresar como minimo 100 caracteres",
              },
              maxLength: {
                value: 10000,
                message: "Debe ingresar como maximo 10000 caracteres",
              },
            })}
          />
          <Form.Text className="text-dark">
            {errors.resena?.message}
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
