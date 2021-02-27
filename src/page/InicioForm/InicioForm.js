//rfc para crear componente rapido
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import Routing from "../../routes/Routing";

export default function InicioForm() {
  return (
    <div>
      <Routing />
    </div>
  );
}
/*
      <FormPostulante />
      <FormMadre />
      <FormPadre />
      <FormPareja />
      <Container>
        <h2>Quinto Paso: Otros Familiares</h2>
        <OtrosFamiliares />
      </Container> */
