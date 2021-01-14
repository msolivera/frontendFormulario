import React from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./BasicModal.scss";

export default function BasicModal(props) {
  const { show, setShow, children } = props;
  return (
    <Modal
      className="basic-modal "
      show={show}
      onHide={() => setShow(false)}
      centered
      size="lg"
    >
      <Modal.Header>
        <FontAwesomeIcon icon={faSearch} />
      </Modal.Header>
      <Modal.Title>
        <h2>Titulo</h2>
      </Modal.Title>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}
