import React from "react";
import { Row, Col, Form, Button, Spinner } from "react-bootstrap";

import "./FormEjemplo.scss";

export default function FormEjemplo(props) {
  const { setShowModal } = props;
  const onSubmit = (e) => {
    e.preventDefault(); //esto es para que cuando aprete el boton de registrarme no se refresque la pag
    setShowModal(false);
  };
  return (
    <div className="form-ejemplo ">
      <h2>titulo del formulario</h2>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Control type="text" placeholder="Nombre" />
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Apellido" />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Row>
            <Col>
              <Form.Control type="email" placeholder="correo electronico" />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Row>
            <Col>
              <Form.Control type="password" placeholder="contraseña" />
            </Col>
            <Col>
              <Form.Control type="password" placeholder="repetir contraseña" />
            </Col>
          </Row>
        </Form.Group>

        <Button variant="primary" type="submit">
          registrate
        </Button>
      </Form>
    </div>
  );
}
