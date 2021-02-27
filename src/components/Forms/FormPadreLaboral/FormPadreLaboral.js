import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import Laboral from "../Componentes/Laboral/index";

import "../FormPostulante/FormPostulante.scss";

export default function FormPadreLaboral() {
  //este state lo uso para harcodear el tipo de persona que recibe el componente de datos personales
  const [tipoPerstate, settipoPerstate] = useState(3);
  return (
    <>
      <Container>
        <h2>Noveno Paso: Datos laborales del Padre</h2>
        <Laboral tipoPerstate={tipoPerstate} />
        <Link to="/datosPadre">
          <Button variant="nav-prev" type="submit">
            <span>Anterior</span>
          </Button>
        </Link>
        <Link to="/preguntasPadre">
          <Button variant="nav-next" type="submit">
            <span>Siguiente</span>
          </Button>
        </Link>
      </Container>
    </>
  );
}
