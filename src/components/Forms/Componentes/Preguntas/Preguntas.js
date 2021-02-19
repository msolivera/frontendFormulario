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
    <div>
      <Container>
        <Form onSubmit={onSubmit}>
          <Jumbotron>
            <h2>Responda las siguientes preguntas:</h2>
            <Table>
              <thead>
                <tr>
                  <th>Responda cada pregunta y luego haga click en Guardar.</th>
                </tr>
              </thead>
              <tbody>
                {/**En esta parte hago un if que controla si el array de preguntas no tiene nada cargado aun
                 * muestra el mensaje que no hay preguntas, sino hace un map con la lista de preguntas y llama al
                 * tableRow que yo hice mandandole los parametros del map.
                 */}
                {preguntas.length == 0 ? (
                  <tr>No hay preguntas</tr>
                ) : (
                  map(preguntas, (preg, index) => (
                    <TableRow pregunta={preg} key={index} />
                  ))
                )}
              </tbody>
            </Table>
          </Jumbotron>
        </Form>
      </Container>
    </div>
  );
}

/**Esta funcion se encarga de dar formato a la respuesta del servidor cuando pido todas las preguntas segun el tipo de persona
 * respuesta del servidor= preg
 * tipoPerState = tipo de persona
 * idPersona = obtengo el id de persona desde el localStorage esto facilita el insert de la respuesta posteriormente xq ya tengo el id de la persona
 */
function formatModel(preg, tipoPerstate, idPersona) {
  //lista temporal
  const preguntasTemp = [];
  //si es postulante
  if (tipoPerstate == 1) {
    preg.forEach((pregunta) => {
      //tomo las preguntas que son para el tipoPer 1 (postulante)
      if (pregunta.tipo_persona_id == 1) {
        preguntasTemp.push({
          //creo el formato
          id: pregunta.id,
          texto: pregunta.textoPregunta,
          tipo_persona: pregunta.tipo_persona_id,
          persona_id: idPersona,
        });
      }
    });
  } else {
    preg.forEach((pregunta) => {
      //si la pregunta es para  cualquiera persona menos postulante
      if (pregunta.tipo_persona_id != 1) {
        preguntasTemp.push({
          //creo formato
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
