import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import DatosPersonales from "../Componentes/DatosPersonales/index";

import "../FormPostulante/FormPostulante.scss";

export default function FormPadre() {
  //este state lo uso para harcodear el tipo de persona que recibe el componente de datos personales
  const [tipoPerstate, settipoPerstate] = useState(3);
  return (
    <>
      <Container>
        <h2>Octavo Paso: Datos del Padre</h2>
        <DatosPersonales tipoPerstate={tipoPerstate} />

        <Link to="/preguntasMadre">
          <Button variant="nav-prev" type="submit">
            <span>Anterior</span>
          </Button>
        </Link>
        <Link to="/laboralPadre">
          <Button variant="nav-next" type="submit">
            <span>Siguiente</span>
          </Button>
        </Link>
      </Container>
    </>
  );
}
