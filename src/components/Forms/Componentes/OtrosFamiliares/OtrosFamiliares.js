import React, { useState, useEffect } from "react";
import { Form, Button, Jumbotron, Table, Container } from "react-bootstrap";

import "react-toastify/dist/ReactToastify.css";
import { map } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faPlus,
  faSave,
  faCloudDownloadAlt,
} from "@fortawesome/free-solid-svg-icons";

import BasicModal from "../../../Modal/BasicModal/index";
import AgregarOtrosFamiliares from "../AgregarOtrosFamiliares/index";
import { getIdPostu } from "../../../../api/auth";
import { getOtrosFamiliaresPersona } from "../../../../api/tablas";
import TableRowFamiliares from "../TableRowFamiliares";

import "../../FormPostulante/FormPostulante";

export default function FormOtrosFamiliares() {
  //Para manejar el Modal
  const [showModal, setShowModal] = useState(false);
  const [contentModal, setContentModal] = useState(null);
  //estate que uso para mandar al modal de agregar otros fliares e incrementar cuando se cierra el mismo para hacer que el useEfect que carga los familiares se ejecute al cambiar contador
  const [contador, setcontador] = useState(1);
  const [fliares, setfliares] = useState([]);
  //funcion que abre el modal y le agrega el contenido de los form
  const openModal = (content) => {
    setShowModal(true);
    setContentModal(content);
  };
  //state para hacer funcionar el Spinner
  const [guardadoLoading, setGuardadoLoading] = useState(false);
  console.log(contador);
  useEffect(() => {
    getOtrosFamiliaresPersona(getIdPostu())
      .then((response) => {
        let listaFliares = formatModel(response.data);
        setfliares(listaFliares);
      })
      .catch(() => {});
  }, [contador]);

  const onSubmit = (e) => {
    e.preventDefault();
    setGuardadoLoading(true);
  };

  return (
    <div>
      <Container>
        <BasicModal show={showModal} setShow={setShowModal}>
          {contentModal}
        </BasicModal>

        <Form onSubmit={onSubmit}>
          <Jumbotron>
            <div>
              <h2>Otros Familiares</h2>
              <Button
                variant="outline-primary"
                onClick={() =>
                  openModal(
                    <AgregarOtrosFamiliares
                      setShowModal={setShowModal}
                      contador={contador}
                      setcontador={setcontador}
                    />
                  )
                }
              >
                Añadir
                <FontAwesomeIcon icon={faPlus} />
                <FontAwesomeIcon icon={faUsers} />
              </Button>

              {fliares.length == 0 ? (
                <tr>No hay Familiares ingresados</tr>
              ) : (
                map(fliares, (fliar, index) => (
                  <TableRowFamiliares pariente={fliar} key={index} />
                ))
              )}
            </div>
          </Jumbotron>
        </Form>

        <Button variant="primary" type="submit">
          Guardar y Descargar <FontAwesomeIcon icon={faSave} />
          <FontAwesomeIcon icon={faCloudDownloadAlt} />
        </Button>
      </Container>
    </div>
  );
}
function formatModel(fliares) {
  //lista temporal
  const fliaresTemp = [];

  fliares.forEach((fliar) => {
    fliaresTemp.push({
      //creo el formato
      id: fliar.familiar_id,
      primerNombre: fliar.primerNombre,
      primerApellido: fliar.primerApellido,
      fechaNacimiento: fliar.fechaNacimiento,
      parentesco: fliar.nombre,
    });
  });
  return fliaresTemp;
}
