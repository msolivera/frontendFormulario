import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import Educacion from "../Componentes/Educacion/index";

import "./FormPostulanteEducacion.scss";

export default function FormPostulanteEducacion() {
  const [guardadoBoton, setguardadoBoton] = useState(true);
  return (
    <>
      <Container>
        <h2>Segundo paso: Educacion del Postulante</h2>
        <Educacion setguardadoBoton={setguardadoBoton} />
        <Link to="/">
          <Button variant="nav-prev" type="submit">
            <span>Anterior</span>
          </Button>
        </Link>
        <Link to="/laboralPostulante">
          <Button variant="nav-next" type="submit" disabled={guardadoBoton}>
            <span>Siguiente</span>
          </Button>
        </Link>
      </Container>
    </>
  );
}
