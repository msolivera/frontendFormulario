//rfc para crear componente rapido
import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import BasicModal from "../../components/Modal/BasicModal";
import FormEjemplo from "../../components/FormEjemplo/Index";

export default function Principal() {
  const [showModal, setShowModal] = useState(false);
  const [contentModal, setContentModal] = useState(null);

  const openModal = (content) => {
    setShowModal(true);
    setContentModal(content);
  };
  return (
    <>
      <Container className="principal" fluid>
        <Row>
          <Izquierda />
          <Derecha openModal={openModal} setShowModal={setShowModal} />
        </Row>
      </Container>

      <BasicModal show={showModal} setShow={setShowModal}>
        {contentModal}
      </BasicModal>
    </>
  );
}

function Izquierda() {
  return (
    <Col className="principal__izq">
      <h2>izquierda</h2>
    </Col>
  );
}

function Derecha(props) {
  const { openModal, setShowModal } = props;
  return (
    <>
      <Col className="principal__der">
        <FontAwesomeIcon icon={faSearch} /> Hola
        <Button
          onClick={() => openModal(<FormEjemplo setShowModal={setShowModal} />)}
          variant="primary"
        >
          Registrate
        </Button>
        <Button
          onClick={() => openModal(<h2>formulario lalal numero 2</h2>)}
          variant="outline-primary"
        >
          Iniciar Sesion
        </Button>
      </Col>
    </>
  );
}
