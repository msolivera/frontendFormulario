import React, { useState } from "react";
import { Row, Col, Form, Button, Spinner } from "react-bootstrap";
import "../../FormPostulante/FormPostulante.scss";

export default function MiniComponenteDepa() {
  return (
    <div>
      <Col>
        <Form.Label>Departamento</Form.Label>
        <Form.Control as="select" defaultValue="Seleccione">
          <option>Montevideo</option>
          <option>Artigas</option>
        </Form.Control>
      </Col>
      <Col>
        <Form.Label>Ciudad/Barrio</Form.Label>
        <Form.Control as="select" defaultValue="Seleccione">
          <option>Pocitos</option>
          <option>Maroñas</option>
        </Form.Control>
      </Col>
    </div>
  );
}
