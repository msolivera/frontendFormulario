import React, { useState } from "react";
import { Form, Button, Spinner, Jumbotron, Table } from "react-bootstrap";
import DatePicker from "react-date-picker";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faPlus,
  faSave,
  faCloudDownloadAlt,
} from "@fortawesome/free-solid-svg-icons";

import BasicModal from "../../../Modal/BasicModal/index";
import AgregarOtrosFamiliares from "../AgregarOtrosFamiliares/index";

import "../../FormPostulante/FormPostulante";

export default function FormOtrosFamiliares() {
  //Para manejar el Modal
  const [showModal, setShowModal] = useState(false);
  const [contentModal, setContentModal] = useState(null);
  //funcion que abre el modal y le agrega el contenido de los form
  const openModal = (content) => {
    setShowModal(true);
    setContentModal(content);
  };
  //state para hacer funcionar el Spinner
  const [guardadoLoading, setGuardadoLoading] = useState(false);
  //state que guarda la info del formulario

  const onSubmit = (e) => {
    e.preventDefault();
    setGuardadoLoading(true);
  };

  return (
    <div>
      <BasicModal show={showModal} setShow={setShowModal}>
        {contentModal}
      </BasicModal>

      <Form onSubmit={onSubmit}>
        <Jumbotron>
          <div>
            <h2>Otros Familiares</h2>
            <Table>
              <thead>
                <tr>
                  <th>Parentezco</th>
                  <th>Primer nombre</th>
                  <th>Primer Apellido</th>
                  <th>Fecha de Nacimiento</th>
                  <th>
                    {" "}
                    <Button
                      variant="outline-primary"
                      onClick={() =>
                        openModal(
                          <AgregarOtrosFamiliares setShowModal={setShowModal} />
                        )
                      }
                    >
                      Añadir
                      <FontAwesomeIcon icon={faPlus} />
                      <FontAwesomeIcon icon={faUsers} />
                    </Button>
                  </th>
                </tr>
              </thead>
              <tbody></tbody>
            </Table>
          </div>
        </Jumbotron>
      </Form>

      <Button variant="primary" type="submit">
        Guardar y Descargar <FontAwesomeIcon icon={faSave} />
        <FontAwesomeIcon icon={faCloudDownloadAlt} />
      </Button>
    </div>
  );
}
