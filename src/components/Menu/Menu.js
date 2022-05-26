import React, {useEffect} from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const Menu = () => {

  const logOut = () => {
    cookies.remove("id", { path: "/" });
    cookies.remove("apellido_paterno", { path: "/" });
    cookies.remove("apellido_materno", { path: "/" });
    cookies.remove("nombre", { path: "/" });
    cookies.remove("username", { path: "/" });
    window.location.href = "./";
  };

  useEffect(() => {
    if (!cookies.get("username")) {
      window.location.href = "./";
    }
  
  }, [])
  

  return (
    <>
      <h2>
        Menu Principal
      </h2>
      <br />
      <button onClick={logOut}>Cerrar Sesion</button>
    </>
  );

}
