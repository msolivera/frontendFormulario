import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import DatosPersonales from "../Componentes/DatosPersonales/index";

import "../FormPostulante/FormPostulante.scss";

export default function FormPadre() {
  //este state lo uso para harcodear el tipo de persona que recibe el componente de datos personales
  const [tipoPerstate, settipoPerstate] = useState(3);
  const [guardadoBoton, setguardadoBoton] = useState(true);

  return (
    <>
      <Container>
        <h2>Informacion del Padre</h2>
        <h3>Primer paso: Datos Personales</h3>
        <DatosPersonales
          tipoPerstate={tipoPerstate}
          setguardadoBoton={setguardadoBoton}
        />

        <Link to="/preguntasMadre">
          <Button variant="nav-prev" type="submit" disabled={guardadoBoton}>
            <span>Anterior</span>
          </Button>
        </Link>
        <Link to="/laboralPadre">
          <Button variant="nav-next" type="submit">
            <span>Siguiente</span>
          </Button>
        </Link>
      </Container>
    </>
  );
}
