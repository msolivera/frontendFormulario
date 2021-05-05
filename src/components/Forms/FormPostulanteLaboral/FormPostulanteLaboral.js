import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import Laboral from "../Componentes/Laboral/index";
import { Link } from "react-router-dom";

import "./FormPostulanteLaboral.scss";

export default function FormPostulanteLaboral() {
  //este state lo uso para harcodear el tipo de persona que recibe el componente de datos personales
  const [tipoPerstate, settipoPerstate] = useState(1);
  const [guardadoBoton, setguardadoBoton] = useState(true);
  return (
    <>
      <Container>
        <h3>Información del Postulante</h3>

        <Laboral
          tipoPerstate={tipoPerstate}
          setguardadoBoton={setguardadoBoton}
        />
        <Link to="/educacionPostulante">
          <Button variant="nav-prev" type="submit">
            <span>Anterior</span>
          </Button>
        </Link>
        <Link to="/datosMadre">
          <Button variant="nav-next" type="submit" disabled={guardadoBoton}>
            <span>Siguiente</span>
          </Button>
        </Link>
      </Container>
    </>
  );
}
