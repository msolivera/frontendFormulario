import React, { useState } from "react";
import { Row, Col, Form, Button, Jumbotron } from "react-bootstrap";
import DatePicker from "react-date-picker";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faUsers,
  faSave,
  faCloudDownloadAlt,
} from "@fortawesome/free-solid-svg-icons";

import "../FormPostulante/FormPostulante.scss";

export default function FormOtrosFamiliares() {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <div className="form-otros-familiares">
        <Jumbotron>
          <div>
            <h2>Datos de Otros Familiares</h2>
            <Form>
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Label>Parentesco</Form.Label>
                    <Form.Control as="select" defaultValue="Seleccione">
                      <option>Padre</option>
                      <option>Madre</option>
                    </Form.Control>
                  </Col>
                  <Col>
                    <Button variant="outline-primary">
                      Añadir mas
                      <FontAwesomeIcon icon={faPlus} />
                      <FontAwesomeIcon icon={faUsers} />
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Control type="text" placeholder="Primer Nombre" />
                  </Col>

                  <Col>
                    <Form.Control type="text" placeholder="Primer Apellido" />
                  </Col>
                  <Col>
                    <Form.Label>Fecha de Nacimiento</Form.Label>
                    <DatePicker onChange={onChange} value={value} />
                  </Col>
                </Row>
              </Form.Group>
            </Form>
          </div>
        </Jumbotron>
      </div>

      <Button variant="primary" type="submit">
        Guardar y Descargar <FontAwesomeIcon icon={faSave} />
        <FontAwesomeIcon icon={faCloudDownloadAlt} />
      </Button>
    </>
  );
}
