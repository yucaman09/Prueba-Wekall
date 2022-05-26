import React, { Component } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default class Menu extends Component {
  cerrarSesion = () => {
    cookies.remove("id", { path: "/" });
    cookies.remove("apellido_paterno", { path: "/" });
    cookies.remove("apellido_materno", { path: "/" });
    cookies.remove("nombre", { path: "/" });
    cookies.remove("username", { path: "/" });
    window.location.href = "./";
  };
  
  componentDidMount() {
    if (!cookies.get("username")) {
      window.location.href = "./";
    }
  }

  render() {
    return (
      <div>
        Menu Principal
        <br />
        <button onClick={() => this.cerrarSesion()}>Cerrar Sesion</button>
      </div>
    );
  }
}
