import React, { useState } from "react";
import {
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Jumbotron,
  Container,
} from "react-bootstrap";
import DatePicker from "react-date-picker";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faPlus,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";

import MiniComponentPais from "../MiniComponentPais/index";
import MiniComponenteDepa from "../MiniComponenteDepa/Index";

import "../../FormPostulante/FormPostulante.scss";

export default function Domicilio() {
  return (
    <div className="form-datos-personales">
      <Jumbotron>
        <div>
          <h2>Domicilio</h2>

          <Form.Group>
            <Row>
              <Col>
                <Form.Label>Pais de Nacimiento</Form.Label>
                <Form.Control as="select" defaultValue="Seleccione">
                  <option>Uruguay</option>
                  <option>España</option>
                  <option>Inglaterra</option>
                </Form.Control>
              </Col>
              <Col>AbirMiniComponente</Col>
            </Row>

            <Row>
              <Col>
                <Form.Control type="text" placeholder="Domicilio Actual" />
              </Col>
              <Col>
                <Form.Control type="text" placeholder="Seccional Policial" />
              </Col>
            </Row>

            <Row>
              <Form.Label>Domicilios Anteriores</Form.Label>
              <Form.Control as="textarea" rows={2} />
            </Row>
          </Form.Group>
        </div>
      </Jumbotron>
    </div>
  );
}

function AbirMiniComponente(content) {
  if (content == "Uruguay") {
    return <MiniComponenteDepa />;
  }
  return <MiniComponentPais />;
}
