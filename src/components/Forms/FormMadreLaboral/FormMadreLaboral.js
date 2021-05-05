import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import Laboral from "../Componentes/Laboral/index";

import "../FormPostulante/FormPostulante.scss";

export default function FormMadreLaboral() {
  //este state lo uso para harcodear el tipo de persona que recibe el componente de datos personales
  const [tipoPerstate, settipoPerstate] = useState(2);
  const [guardadoBoton, setguardadoBoton] = useState(true);
  return (
    <>
      <Container>
        <h3>Información de la Madre</h3>
        <Laboral
          tipoPerstate={tipoPerstate}
          setguardadoBoton={setguardadoBoton}
        />

        <Link to="/datosMadre">
          <Button variant="nav-prev" type="submit">
            <span>Anterior</span>
          </Button>
        </Link>
        <Link to="/datosPadre">
          <Button variant="nav-next" type="submit" disabled={guardadoBoton}>
            <span>Siguiente</span>
          </Button>
        </Link>
      </Container>
    </>
  );
}
