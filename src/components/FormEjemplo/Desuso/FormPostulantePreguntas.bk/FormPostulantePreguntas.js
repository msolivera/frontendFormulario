import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import Preguntas from "../../FormEjemplo/Desuso/Preguntas.bk/index";
import { Link } from "react-router-dom";

//import "./FormPostulantePreguntas.scss";

export default function FormPostulantePreguntas() {
  //este state lo uso para harcodear el tipo de persona que recibe el componente de datos personales
  const [tipoPerstate, settipoPerstate] = useState(1);
  return <></>;
}
/* <Container>
        <h2>Informacion del Postulante</h2>
        <h3>Cuarto paso: Preguntas</h3>

        <Preguntas tipoPerstate={tipoPerstate} />
        <Link to="/laboralPostulante">
          <Button variant="nav-prev" type="submit">
            <span>Anterior</span>
          </Button>
        </Link>
        <Link to="/datosMadre">
          <Button variant="nav-next" type="submit">
            <span>Siguiente</span>
          </Button>
        </Link>
      </Container>*/
