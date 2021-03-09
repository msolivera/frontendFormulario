import React, { useState } from "react";
import { Form } from "react-bootstrap";

//este componente se usa para cargar dinamicamente las preguntas que traigo de la base
export default function TableRowPregPDF(props) {
  const { pregunta } = props;

  return (
    <>
      <tr>
        <td>{pregunta.textoPregunta}</td>
        <td>
          <Form.Control value={pregunta.respuesta} />
        </td>
      </tr>
    </>
  );
}
