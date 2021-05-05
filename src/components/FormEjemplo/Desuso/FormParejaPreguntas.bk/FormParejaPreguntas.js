import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

//import Preguntas from "../Preguntas.bk/index";

import "../FormPostulante/FormPostulante.scss";

export default function FormParejaPreguntas() {
  //este state lo uso para harcodear el tipo de persona que recibe el componente de datos personales
  const [tipoPerstate, settipoPerstate] = useState(10);
  return <></>;
}
/* <Container>
        <h2>Informacion de Conyuge, Concubino/a , Novio/a</h2>
        <h3>Segundo paso: Preguntas</h3>
        <Preguntas tipoPerstate={tipoPerstate} />

        <Link to="/laboralPareja">
          <Button variant="nav-prev" type="submit">
            <span>Anterior</span>
          </Button>
        </Link>
        <Link to="/otrosFliares">
          <Button variant="nav-next" type="submit">
            <span>Siguiente</span>
          </Button>
        </Link>
      </Container>*/
