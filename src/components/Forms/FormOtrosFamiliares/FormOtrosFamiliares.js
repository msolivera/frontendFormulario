import React from "react";

import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import OtrosFamiliares from "../Componentes/OtrosFamiliares/index";

import "../FormPostulante/FormPostulante.scss";

export default function FormOtrosFamiliares() {
  return (
    <>
      <Container>
        <h2>Ultimo Paso: Datos de otros familiares</h2>
        <OtrosFamiliares />

        <Link to="/preguntasPareja">
          <Button variant="nav-prev" type="submit">
            <span>Anterior</span>
          </Button>
        </Link>
        <Link to="/formFinal">
          <Button variant="nav-next" type="submit">
            <span>Siguiente</span>
          </Button>
        </Link>
      </Container>
    </>
  );
}
