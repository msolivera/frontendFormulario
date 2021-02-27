import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import Preguntas from "../Componentes/Preguntas/index";

import "../FormPostulante/FormPostulante.scss";

export default function FormMadre() {
  //este state lo uso para harcodear el tipo de persona que recibe el componente de datos personales
  const [tipoPerstate, settipoPerstate] = useState(2);
  return (
    <>
      <Container>
        <h2>Septimo Paso: Responda las siguientes Preguntas.</h2>
        <Preguntas tipoPerstate={tipoPerstate} />

        <Link to="/laboralMadre">
          <Button variant="nav-prev" type="submit">
            <span>Anterior</span>
          </Button>
        </Link>
        <Link to="/datosPadre">
          <Button variant="nav-next" type="submit">
            <span>Siguiente</span>
          </Button>
        </Link>
      </Container>
    </>
  );
}
