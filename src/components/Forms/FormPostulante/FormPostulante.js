import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import DatosPersonales from "../Componentes/DatosPersonales/index";
import Domicilio from "../Componentes/Domicilio/index";
import Educacion from "../Componentes/Educacion/index";
import Laboral from "../Componentes/Laboral/index";
import Preguntas from "../Componentes/Preguntas/index";
import OtrosFamiliares from "../Componentes/OtrosFamiliares";

import "./FormPostulante.scss";

export default function FormPostulante() {
  //este state lo uso para harcodear el tipo de persona que recibe el componente de datos personales
  const [tipoPerstate, settipoPerstate] = useState(1);
  return (
    <>
      <h2>Datos del Postulante</h2>
      <Container>
        <DatosPersonales tipoPerstate={tipoPerstate} />
        <Educacion />
        <Laboral />
        <Preguntas />
        {/*
        <DatosPersonales />
        <Educacion />
        <Laboral />
        <Preguntas />
        <OtrosFamiliares/>
        */}
      </Container>
    </>
  );
}
