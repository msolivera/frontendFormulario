import React from "react";
import { Container } from "react-bootstrap";

import DatosPersonales from "../Componentes/DatosPersonales/index";
import Domicilio from "../Componentes/Domicilio/index";
import Educacion from "../Componentes/Educacion/index";
import Laboral from "../Componentes/Laboral/index";
import Preguntas from "../Componentes/Preguntas/index";

import "./FormPostulante.scss";

export default function FormPostulante() {
  return (
    <>
      <Container>
        <Educacion />
        {/*
        <DatosPersonales />
        <Educacion />
        <Laboral />
        <Preguntas />
        */}
      </Container>
    </>
  );
}
