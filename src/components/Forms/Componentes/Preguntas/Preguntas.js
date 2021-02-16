import React, { useState, useEffect } from "react";
import { map } from "lodash";
import { Form, Button, Table, Jumbotron, Container } from "react-bootstrap";

import { getPreguntasApi } from "../../../../api/tablas";

import "../../FormPostulante/FormPostulante.scss";

import TableRow from "../TableRow/index";
import { getSuId } from "../../../../api/auth";

export default function Preguntas(props) {
  const { tipoPerstate } = props;
  const [preguntas, setPreguntas] = useState([]);

  //useEffect que se  encarga de cargar las preguntas y guardarlas en un map para cargarlo en la tabla
  useEffect(() => {
    getPreguntasApi()
      .then((response) => {
        let listaPreg = formatModel(
          response.data,
          tipoPerstate,
          getSuId(tipoPerstate)
        );

        setPreguntas(listaPreg);
      })
      .catch(() => {});
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <div>
        <Form onSubmit={onSubmit}>
          <Jumbotron>
            <h2>Responda las siguientes preguntas:</h2>
            <Table>
              <thead>
                <tr>
                  <th>Pregunta</th>
                  <th>Respuesta</th>
                  <th>Accion</th>
                </tr>
              </thead>
              <tbody>
                {preguntas.length == 0 ? (
                  <tr>No hay preguntas</tr>
                ) : (
                  map(preguntas, (preg, index) => (
                    <TableRow pregunta={preg} key={index} />
                  ))
                )}
              </tbody>
            </Table>
            <Button variant="info" type="submit">
              Guardar
            </Button>
          </Jumbotron>
        </Form>
      </div>
    </Container>
  );
}

function formatModel(preg, tipoPerstate, idPersona) {
  const preguntasTemp = [];
  if (tipoPerstate == 1) {
    preg.forEach((pregunta) => {
      if (pregunta.tipo_persona_id == 1) {
        preguntasTemp.push({
          id: pregunta.id,
          texto: pregunta.textoPregunta,
          tipo_persona: pregunta.tipo_persona_id,
          persona_id: idPersona,
        });
      }
    });
  } else {
    preg.forEach((pregunta) => {
      if (pregunta.tipo_persona_id != 1) {
        preguntasTemp.push({
          id: pregunta.id,
          texto: pregunta.textoPregunta,
          tipo_persona: pregunta.tipo_persona_id,
          persona_id: idPersona,
        });
      }
    });
  }

  return preguntasTemp;
}
