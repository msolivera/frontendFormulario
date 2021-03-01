import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import Preguntas from "../Componentes/Preguntas/index";
import { Link } from "react-router-dom";
import { listarRespuestas } from "../../../api/tablas.js";
import { getIdPostu } from "../../../api/auth";

import "./FormPostulantePreguntas.scss";

export default function FormPostulantePreguntas() {
  //este state lo uso para harcodear el tipo de persona que recibe el componente de datos personales
  const [tipoPerstate, settipoPerstate] = useState(1);
  return (
    <>
      <Container>
        <h2>Cuarto paso: Responda las siguientes Preguntas.</h2>
        <Preguntas tipoPerstate={tipoPerstate} />
        <Link to="/laboralPostulante">
          <Button variant="nav-prev" type="submit">
            <span>Anterior</span>
          </Button>
        </Link>
        <Link to="/datosMadre">
          <Button
            variant="nav-next"
            type="submit"
            onClick={listarRespuestas(getIdPostu(), 1)}
          >
            <span>Siguiente</span>
          </Button>
        </Link>
      </Container>
    </>
  );
}
