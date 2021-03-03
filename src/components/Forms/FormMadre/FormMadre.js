import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import DatosPersonales from "../Componentes/DatosPersonales/index";

import "../FormPostulante/FormPostulante.scss";

export default function FormMadre() {
  //este state lo uso para harcodear el tipo de persona que recibe el componente de datos personales
  const [tipoPerstate, settipoPerstate] = useState(2);
  const [guardadoBoton, setguardadoBoton] = useState(true);
  return (
    <>
      <Container>
        <h2>Quinto Paso: Datos de la madre</h2>
        <DatosPersonales
          tipoPerstate={tipoPerstate}
          setguardadoBoton={setguardadoBoton}
        />

        <Link to="/preguntasPostulante">
          <Button variant="nav-prev" type="submit">
            <span>Anterior</span>
          </Button>
        </Link>
        <Link to="/laboralMadre">
          <Button variant="nav-next" type="submit" disabled={guardadoBoton}>
            <span> Siguiente</span>
          </Button>
        </Link>
      </Container>
    </>
  );
}
