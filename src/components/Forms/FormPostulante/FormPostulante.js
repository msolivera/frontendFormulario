import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import DatosPersonales from "../Componentes/DatosPersonales/index";

import "./FormPostulante.scss";

export default function FormPostulante() {
  //este state lo uso para harcodear el tipo de persona que recibe el componente de datos personales
  const [tipoPerstate, settipoPerstate] = useState(1);
  const [guardadoBoton, setguardadoBoton] = useState(true);

  return (
    <>
      <Container>
        <h3>Información del Postulante</h3>

        <DatosPersonales
          tipoPerstate={tipoPerstate}
          setguardadoBoton={setguardadoBoton}
        />
        <Link to="/educacionPostulante">
          <Button variant="nav-next" type="submit" disabled={guardadoBoton}>
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
