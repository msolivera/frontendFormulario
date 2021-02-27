import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { crearRespuesta } from "../../../../api/auth";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import "react-toastify/dist/ReactToastify.css";
//este componente se usa para cargar dinamicamente las preguntas que traigo de la base
export default function TableRow(props) {
  const [guardadoLoading, setGuardadoLoading] = useState(false);
  const { pregunta } = props;
  const [formData, setFormData] = useState(
    initialFormValue(pregunta.persona_id, pregunta.id)
  );

  const onSubmit = (e) => {
    e.preventDefault();
    crearRespuesta(formData)
      .then((response) => {
        if (response.code) {
          toast.warning(response.message);
        } else {
          setGuardadoLoading(true);
          toast.success("Registro correcto");
        }
      })
      .catch(() => {
        toast.error("Error del servidor");
      })
      .finally(() => {
        setGuardadoLoading(false);
      });
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
            onChange={(e) =>
              setFormData({
                ...formData,
                respuesta: e.target.value,
              })
            }
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

function initialFormValue(personaId, preguntaId) {
  return {
    respuesta: "",
    observaciones: "",
    persona_id: personaId,
    pregunta_id: preguntaId,
  };
}
