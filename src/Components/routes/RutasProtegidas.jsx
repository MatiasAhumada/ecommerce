import { Navigate } from "react-router-dom";

const RutasProtegidas = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("usuarioBar")) || null;
  if (!token) {
    return <Navigate to={"/login"}></Navigate>;
  } else {
    if (token.isAdmin === true) {
      return children;
    } else {
      return <Navigate to={"/"}></Navigate>;
    }
  }
};

export default RutasProtegidas;