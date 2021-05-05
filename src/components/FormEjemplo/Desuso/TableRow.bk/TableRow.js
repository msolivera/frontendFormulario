import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  setPreguntasPostu,
  setPreguntasMadre,
  setPreguntasPadre,
  setPreguntasPareja,
} from "../../../../api/tablas";
import { crearRespuesta, updateRespuesta } from "../../../../api/auth";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import "react-toastify/dist/ReactToastify.css";
import { getRespuestasPersona, listarRespuestas } from "../../../../api/tablas";
//este componente se usa para cargar dinamicamente las preguntas que traigo de la base
export default function TableRow(props) {
  const [guardadoLoading, setGuardadoLoading] = useState(false);
  const { pregunta, idPersona, tipoPerstate } = props;
  const [formData, setFormData] = useState(
    initialFormValue(idPersona, pregunta.id, pregunta)
  );

  const onSubmit = (e) => {
    e.preventDefault();
    if (!tieneID(pregunta)) {
      crearRespuesta(formData)
        .then((response) => {
          if (response.code) {
            toast.warning(response.message);
          } else {
            setGuardadoLoading(true);
            toast.success("Registro correcto");
            listarRespuestas(idPersona, tipoPerstate);
          }
        })
        .catch(() => {
          toast.error("Error del servidor");
        })
        .finally(() => {
          setGuardadoLoading(false);
        });
    } else {
      updateRespuesta(formData, pregunta.idRespuesta)
        .then((response) => {
          if (response.code) {
            toast.warning(response.message);
          } else {
            setGuardadoLoading(true);
            toast.success("Actualizacion correcta");
            listarRespuestas(idPersona, tipoPerstate);
          }
        })
        .catch(() => {
          toast.error("Error del servidor");
        })
        .finally(() => {
          setGuardadoLoading(false);
        });
    }
  };

  return (
    <>
      <tr>
        <td>{pregunta.texto}</td>
      </tr>
      <tr>
        <td>
          <Form.Control
            type="text"
            placeholder="Respuesta"
            value={formData.respuesta}
            onChange={
              (e) =>
                setFormData({
                  ...formData,
                  respuesta: e.target.value,
                }) /*| guardandoLocal(tipoPerstate, formData)*/
            }
            /*onKeyUp={() => guardandoLocal(tipoPerstate, formData)}*/
          />
        </td>
        <td>
          <Button variant="agregar" type="button" onClick={onSubmit}>
            <FontAwesomeIcon icon={faSave} /> Guardar
          </Button>
        </td>
      </tr>
    </>
  );
}

function initialFormValue(personaId, preguntaId, pregunta) {
  if (pregunta.respuesta != null) {
    return {
      respuesta: pregunta.respuesta,
      observaciones: "",
      persona_id: personaId,
      pregunta_id: preguntaId,
    };
  } else {
    return {
      respuesta: "",
      observaciones: "",
      persona_id: personaId,
      pregunta_id: preguntaId,
    };
  }
}
function tieneID(pregunta) {
  if (pregunta.idRespuesta != null) {
    return true;
  } else {
    return false;
  }
}

/*
function guardandoLocal(tipoPerstate, formData) {
  switch (tipoPerstate) {
    case 1:
      setPreguntasPostu(JSON.stringify(formData));
      break;
    case 2:
      setPreguntasMadre(JSON.stringify(formData));
      break;
    case 3:
      setPreguntasPadre(JSON.stringify(formData));
      break;
    case 10:
      setPreguntasPareja(JSON.stringify(formData));
      break;

    default:
      break;
  }
}

function llenarDelStorage(campo, defval, tipoPerstate) {
  switch (tipoPerstate) {
    case 1:
      var datosStorage = JSON.parse(localStorage.getItem("respuestaPostu"));
      if (datosStorage != undefined) {
        return datosStorage[campo];
      }
    case 2:
      var datosStorage = JSON.parse(localStorage.getItem("respuestaMadre"));
      if (datosStorage != undefined) {
        return datosStorage[campo];
      }

    case 3:
      var datosStorage = JSON.parse(localStorage.getItem("respuestaPadre"));
      if (datosStorage != undefined) {
        return datosStorage[campo];
      }

    case 10:
      var datosStorage = JSON.parse(localStorage.getItem("respuestaPareja"));
      if (datosStorage != undefined) {
        return datosStorage[campo];
      }
    default:
      break;
  }
  return defval;
}
*/
