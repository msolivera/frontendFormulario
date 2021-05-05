import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
function Header() {
  return (
    <>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a href="https://www.armada.mil.uy/" target="blank">
            <img
              class="img-pdf"
              src="logotransparente.png"
              style={{
                width: "50px",
                height: "50px",
                marginLeft: "5px",
                marginRight: "5px",
              }}
            ></img>
          </a>
          <h6 style={{ color: "white" }}>
            ARMADA NACIONAL • REPÚBLICA ORIENTAL DEL URUGUAY • INGRESOS
          </h6>
          <h6 style={{ color: "white" }}>FORMULARIO 04</h6>
        </div>
      </nav>

      <br />
    </>
  );
}
export default Header;
