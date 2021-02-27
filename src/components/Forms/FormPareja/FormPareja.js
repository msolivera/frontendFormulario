import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";

import { Link } from "react-router-dom";

import DatosPersonales from "../Componentes/DatosPersonales/index";

import "../FormPostulante/FormPostulante.scss";

export default function FormPareja() {
  //este state lo uso para harcodear el tipo de persona que recibe el componente de datos personales
  const [tipoPerstate, settipoPerstate] = useState(10);
  return (
    <>
      <Container>
        <h2>Decimo Primer Paso: Datos Conyuge, Concubino/a , Novio/a</h2>
        <DatosPersonales tipoPerstate={tipoPerstate} />

        <Link to="/preguntasPadre">
          <Button variant="nav-prev" type="submit">
            <span>Anterior</span>
          </Button>
        </Link>
        <Link to="/laboralPareja">
          <Button variant="nav-next" type="submit">
            <span>Siguiente</span>
          </Button>
        </Link>
      </Container>
    </>
  );
}
