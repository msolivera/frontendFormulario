import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

import DatosPersonales from "../Componentes/DatosPersonales/index";
import Domicilio from "../Componentes/Domicilio/index";
import Laboral from "../Componentes/Laboral/index";
import Preguntas from "../Componentes/Preguntas/index";

import "../FormPostulante/FormPostulante.scss";

export default function FormPareja() {
  //este state lo uso para harcodear el tipo de persona que recibe el componente de datos personales
  const [tipoPerstate, settipoPerstate] = useState(10);
  return (
    <>
      <h2>Datos Conyuge, Concubino/a , Novio/a</h2>
      <Container>
        <Form>
          <DatosPersonales tipoPerstate={tipoPerstate} />
          <Domicilio />
          <Button variant="primary" type="submit">
            Guardar <FontAwesomeIcon icon={faLongArrowAltRight} />
          </Button>
        </Form>
        <Laboral />
        <Preguntas />
      </Container>
      <Button variant="primary" type="submit">
        Siguiente <FontAwesomeIcon icon={faLongArrowAltRight} />
      </Button>
    </>
  );
}
