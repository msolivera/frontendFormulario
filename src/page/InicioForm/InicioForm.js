//rfc para crear componente rapido
import React, { useState } from "react";
import FormPostulante from "../../components/Forms/FormPostulante/index";
import FormMadre from "../../components/Forms/FormMadre/index";
import FormPadre from "../../components/Forms/FormPadre/index";
import FormPareja from "../../components/Forms/FormPareja/index";
import FormOtrosFamiliares from "../../components/Forms/Componentes/OtrosFamiliares/index";

export default function InicioForm() {
  return (
    <div>
      <FormPostulante />
    </div>
  );
}
