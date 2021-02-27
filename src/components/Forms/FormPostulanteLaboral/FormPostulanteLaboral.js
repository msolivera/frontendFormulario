import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import Laboral from "../Componentes/Laboral/index";
import { Link } from "react-router-dom";

import "./FormPostulanteLaboral.scss";

export default function FormPostulanteLaboral() {
  //este state lo uso para harcodear el tipo de persona que recibe el componente de datos personales
  const [tipoPerstate, settipoPerstate] = useState(1);
  return (
    <>
      <Container>
        <h2>Tercer paso: Informacion laboral del Postulante</h2>
        <Laboral tipoPerstate={tipoPerstate} />
        <Link to="/educacionPostulante">
          <Button variant="nav-prev" type="submit">
            <span>Anterior</span>
          </Button>
        </Link>
        <Link to="/preguntasPostulante">
          <Button variant="nav-next" type="submit">
            <span>Siguiente</span>
          </Button>
        </Link>
      </Container>
    </>
  );
}
