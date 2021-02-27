import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import Laboral from "../Componentes/Laboral/index";

import "../FormPostulante/FormPostulante.scss";

export default function FormMadreLaboral() {
  //este state lo uso para harcodear el tipo de persona que recibe el componente de datos personales
  const [tipoPerstate, settipoPerstate] = useState(2);
  return (
    <>
      <Container>
        <h2>Sexto Paso: Informacion laboral de la madre</h2>
        <Laboral tipoPerstate={tipoPerstate} />

        <Link to="/datosMadre">
          <Button variant="nav-prev" type="submit">
            <span>Anterior</span>
          </Button>
        </Link>
        <Link to="/preguntasMadre">
          <Button variant="nav-next" type="submit">
            <span>Siguiente</span>
          </Button>
        </Link>
      </Container>
    </>
  );
}
