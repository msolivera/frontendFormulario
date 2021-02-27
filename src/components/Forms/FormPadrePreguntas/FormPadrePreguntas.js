import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Preguntas from "../Componentes/Preguntas/index";

import "../FormPostulante/FormPostulante.scss";

export default function FormPadrePreguntas() {
  //este state lo uso para harcodear el tipo de persona que recibe el componente de datos personales
  const [tipoPerstate, settipoPerstate] = useState(3);
  return (
    <>
      <Container>
        <h2>Decimo Paso: Responda las siguiente preguntas.</h2>

        <Preguntas tipoPerstate={tipoPerstate} />

        <Link to="/laboralPadre">
          <Button variant="nav-prev" type="submit">
            <span>Anterior</span>
          </Button>
        </Link>
        <Link to="/datosPareja">
          <Button variant="nav-next" type="submit">
            <span>Siguiente</span>
          </Button>
        </Link>
      </Container>
    </>
  );
}
