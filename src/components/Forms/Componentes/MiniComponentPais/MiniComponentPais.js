import React, { useState } from "react";
import { Row, Col, Form, Button, Spinner } from "react-bootstrap";
import "../../FormPostulante/FormPostulante.scss";

export default function MiniComponentPais() {
  return (
    <div>
      <Col>
        <Form.Control type="text" placeholder="Nombre de Departamento/Estado" />
      </Col>
      <Col>
        <Form.Control type="text" placeholder="Ciudad" />
      </Col>
    </div>
  );
}
