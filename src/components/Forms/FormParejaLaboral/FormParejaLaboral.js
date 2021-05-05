import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import Laboral from "../Componentes/Laboral/index";

import "../FormPostulante/FormPostulante.scss";

export default function FormParejaLaboral() {
  //este state lo uso para harcodear el tipo de persona que recibe el componente de datos personales
  const [tipoPerstate, settipoPerstate] = useState(10);
  const [guardadoBoton, setguardadoBoton] = useState(true);
  return (
    <>
      <Container>
        <h3>Información de Conyuge, Concubino/a , Novio/a</h3>
        <Laboral
          tipoPerstate={tipoPerstate}
          setguardadoBoton={setguardadoBoton}
        />

        <Link to="/datosPareja">
          <Button variant="nav-prev" type="submit">
            <span>Anterior</span>
          </Button>
        </Link>
        <Link to="/otrosFliares">
          <Button variant="nav-next" type="submit" disabled={guardadoBoton}>
            <span>Siguiente</span>
          </Button>
        </Link>
      </Container>
    </>
  );
}
