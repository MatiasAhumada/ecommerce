const URL=procces.env.REACT_APP_API_LOCAL_PRODUCTOS
const urlUsuario =process.env.REACT_APP_API_LOCAL_USUARIOS
// PRODUCTOS
export const crearProductoApi = async (producto) => {
    try {
      const respuesta = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(producto),
      });
  
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const borrarProductoAPI = async (id) => {
    try {
      const respuesta = await fetch(URL + "/" + id, {
        method: "DELETE",
      });
  
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const obtenerProductoApi = async (id) => {
    try {
      const respuesta = await fetch(URL + "/" + id);
      const productoBuscado = {
        dato: await respuesta.json(),
        status: respuesta.status,
      };
  
  
      return productoBuscado;
    } catch (error) {
      console.log(error);
    }
  };
  export const editarProductoApi = async (id, datosActualizados) => {
    try {
      const respuesta = await fetch(URL + "/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datosActualizados),
      });
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const consultarProductoApi = async () => {
    try {
      const respuesta = await fetch(URL);
  
      const listaProductos = await respuesta.json();
  
      return listaProductos;
    } catch (error) {
      console.log(error);
    }
  };
  // USUARIOS
export const usuarioLogin = async (usuario) => {
    try {
      const respuesta = await fetch(urlUsuario);
      const listaUsuario = await respuesta.json();
  
      const usuarioBuscado = listaUsuario.find(
        (itemUsuario) => itemUsuario.email === usuario.email
      );
      if (usuarioBuscado) {
        
        if (usuarioBuscado.password === usuario.password) {
          return usuarioBuscado;
        } else {
          return;
        }
      }
    } catch (error) {
      console.log(error);
      return;
    }
  };
  export const obtenerUsuarioApi = async (id) => {
    try {
      const respuesta = await fetch(urlUsuario + "/" + id);
      const usuarioBuscado = {
        dato: await respuesta.json(),
        status: respuesta.status,
      };
  
    
      return usuarioBuscado;
    } catch (error) {
      console.log(error);
    }
  };
  export const crearUsuario = async (usuario) => {
    try {
      const respuesta = await fetch(urlUsuario, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });
      return respuesta;
    } catch (error) {
      console.log(error);
      return;
    }
  };
  export const borrarUsuarioAPI = async (id) => {
    try {
      const respuesta = await fetch(urlUsuario + "/" + id, {
        method: "DELETE",
      });
  
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };
  export const editarUsuarioApi = async (id, datosActualizados) => {
    try {
  
      const respuestaUsuario = await fetch(urlUsuario + "/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datosActualizados),
      });
    
      return respuestaUsuario;
    } catch (error) {
      console.log(error);
    }
  };
  export const consultarUsuarioApi = async () => {
    try {
      const respuesta = await fetch(urlUsuario);
  
      const listaUsuarios = await respuesta.json();
    
      return listaUsuarios;
    } catch (error) {
      console.log(error);
    }
  };