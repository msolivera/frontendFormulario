import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

import DatosPersonales from "../Componentes/DatosPersonales/index";
import Domicilio from "../Componentes/Domicilio/index";
import Laboral from "../Componentes/Laboral/index";
import Preguntas from "../Componentes/Preguntas/index";

import "../FormPostulante/FormPostulante.scss";

export default function FormPadre() {
  //este state lo uso para harcodear el tipo de persona que recibe el componente de datos personales
  const [tipoPerstate, settipoPerstate] = useState(3);
  return (
    <>
      <h2>Datos del Padre</h2>
      <Container>
        <DatosPersonales tipoPerstate={tipoPerstate} />
        <Laboral />
        <Preguntas />
      </Container>
      <Button variant="primary" type="submit">
        Siguiente <FontAwesomeIcon icon={faLongArrowAltRight} />
      </Button>
    </>
  );
}
