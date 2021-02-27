import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import Educacion from "../Componentes/Educacion/index";

import "./FormPostulanteEducacion.scss";

export default function FormPostulanteEducacion() {
  return (
    <>
      <Container>
        <h2>Segundo paso: Educacion del Postulante</h2>
        <Educacion />
        <Link to="/">
          <Button variant="nav-prev" type="submit">
            <span>Anterior</span>
          </Button>
        </Link>
        <Link to="/laboralPostulante">
          <Button variant="nav-next" type="submit">
            <span>Siguiente</span>
          </Button>
        </Link>
      </Container>
    </>
  );
}
