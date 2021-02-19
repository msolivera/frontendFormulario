//rfc para crear componente rapido
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import FormPostulante from "../../components/Forms/FormPostulante/index";
import FormMadre from "../../components/Forms/FormMadre/index";
import FormPadre from "../../components/Forms/FormPadre/index";
import FormPareja from "../../components/Forms/FormPareja/index";
import OtrosFamiliares from "../../components/Forms/Componentes/OtrosFamiliares/index";

export default function InicioForm() {
  return (
    <div>
      <FormPostulante />
      <OtrosFamiliares />
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
