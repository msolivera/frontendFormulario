import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import DatosPersonales from "../Componentes/DatosPersonales/index";

import "./FormPostulante.scss";

export default function FormPostulante() {
  //este state lo uso para harcodear el tipo de persona que recibe el componente de datos personales
  const [tipoPerstate, settipoPerstate] = useState(1);
  //const [guardadoBoton, setguardadoBoton] = useState(null);

  return (
    <>
      <Container>
        <h2>Primer paso: Datos del Postulante</h2>
        <DatosPersonales tipoPerstate={tipoPerstate} />
        <Link to="/educacionPostulante">
          <Button variant="nav-next" type="submit">
            <span>Siguiente</span>
          </Button>
        </Link>
      </Container>
    </>
  );
}

/*
ver el if del boton

disabled={!GUARDE_DATOS_POSTU == 0 ? "false" : guardadoBoton}
*/
