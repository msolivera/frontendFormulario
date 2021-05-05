import React, { useEffect, useState } from "react";
import { Form, Button, Spinner, Jumbotron, Table } from "react-bootstrap";
import { map } from "lodash";
import { crearEstudiosBasicos } from "../../../../api/auth";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate, faSave } from "@fortawesome/free-solid-svg-icons";

import BasicModal from "../../../Modal/BasicModal";
import OtrosEstudios from "../OtrosEstudios";
import TableRowEducacion from "../TableRowEducacion";
import { getIdPostu, setEstudiosBasicos } from "../../../../api/auth";
import { getEstudiosLocal, getEstudiosPersona } from "../../../../api/tablas";
import "../../FormPostulante/FormPostulante.scss";
export default function Educacion(props) {
  const { setguardadoBoton } = props;
  //state que guarda el id del postulante en cero pero lo uso para cambiarlo una vez que di submit en datos personales
  const [idPostulante, setIdPostulante] = useState(getIdPostu());
  //Para manejar el Modal
  const [showModal, setShowModal] = useState(false);
  const [contentModal, setContentModal] = useState(null);
  const [refresh, setrefresh] = useState(false);
  //funcion que abre el modal y le agrega el contenido de los form
  const openModal = (content) => {
    setShowModal(true);
    setContentModal(content);
  };
  //state que va a guardar los estudios de la persona
  const [estudios, setEstudios] = useState([]);
  //retornarId("hola");
  useEffect(() => {
    let isMounted = true;
    getEstudiosPersona(getIdPostu())
      .then((response) => {
        let listaEstudios = formatModel(response.data);
        if (isMounted) {
          setEstudios(listaEstudios);
        }
      })
      .catch(() => {});
    return () => {
      isMounted = false;
    };
  }, []);
  //recibo el id de postulante (del local storage y cambio mi estado para luego asignarlo al form data)
  useEffect(() => {
    getIdPostu();
    setIdPostulante(getIdPostu());
    setFormData({
      ...formData,
      primeroPrimaria_persona_id: idPostulante,
      primeroSecu_persona_id: idPostulante,
      cuartoBach_persona_id: idPostulante,
    });

    return getIdPostu();
  }, []);

  //state para hacer funcionar el Spinner
  const [guardadoLoading, setGuardadoLoading] = useState(false);
  //state que guarda la info del formulario
  const [formData, setFormData] = useState(initialFormValue());
  //funcion que controla cuando se va a guardara el fomrulario
  const onSubmit = (e) => {
    e.preventDefault();
    setGuardadoLoading(true);
    setEstudiosBasicos(JSON.stringify(formData));
    crearEstudiosBasicos(formData)
      .then((response) => {
        if (response.code) {
          toast.warning(response.message);
        } else {
          toast.success("Registro correcto");
          setFormData(initialFormValue());
          setguardadoBoton(false);
          localStorage.setItem(
            "estudiosGuardados",
            JSON.stringify(response.data)
          );
        }
      })
      .catch(() => {
        toast.error("Error del servidor");
      })
      .finally(() => {
        setGuardadoLoading(false);
      });
    //}
  };
  return (
    <div>
      <BasicModal show={showModal} setShow={setShowModal}>
        {contentModal}
      </BasicModal>

      <Form onSubmit={onSubmit}>
        <Jumbotron>
          <h4>Educación</h4>
          <div>
            <Table>
              <tbody>
                <tr>
                  <td>
                    <Form.Control
                      type="text"
                      defaultValue="Primaria"
                      readOnly
                    />
                  </td>
                  <td>
                    {" "}
                    <Form.Control
                      type="text"
                      placeholder="Nombre de escuela/colegio"
                      value={formData.primeroPrimaria_nombreInstituto}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          primeroPrimaria_nombreInstituto: e.target.value,
                        }) | setEstudiosBasicos(JSON.stringify(formData))
                      }
                      onKeyUp={() =>
                        setEstudiosBasicos(JSON.stringify(formData))
                      }
                    />
                  </td>
                </tr>
              </tbody>
            </Table>

            <Table>
              <tbody>
                <tr>
                  <td>
                    <Form.Control
                      type="text"
                      defaultValue="Secundaria"
                      readOnly
                    />
                  </td>
                  <td>
                    {" "}
                    <Form.Control
                      type="text"
                      placeholder="Nombre de liceo/colegio"
                      value={formData.primeroSecu_nombreInstituto}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          primeroSecu_nombreInstituto: e.target.value,
                        }) | setEstudiosBasicos(JSON.stringify(formData))
                      }
                      onKeyUp={() =>
                        setEstudiosBasicos(JSON.stringify(formData))
                      }
                    />
                  </td>
                </tr>
              </tbody>
            </Table>

            <Table>
              <tbody>
                <tr>
                  <td>
                    <Form.Control
                      type="text"
                      defaultValue="Bachillerato"
                      readOnly
                    />
                  </td>
                  <td>
                    {" "}
                    <Form.Control
                      type="text"
                      placeholder="Nombre de liceo/colegio"
                      value={formData.cuartoBach_nombreInstituto}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          cuartoBach_nombreInstituto: e.target.value,
                        }) | setEstudiosBasicos(JSON.stringify(formData))
                      }
                      onKeyUp={() =>
                        setEstudiosBasicos(JSON.stringify(formData))
                      }
                    />
                  </td>
                </tr>
              </tbody>
            </Table>

            <h3>Otros Estudios Realizados</h3>
            <Button
              variant="agregar"
              onClick={() =>
                openModal(<OtrosEstudios setShowModal={setShowModal} />)
              }
            >
              <span>
                Añadir <FontAwesomeIcon icon={faUserGraduate} />{" "}
              </span>
            </Button>
            <Table id="tabla">
              <thead>
                <tr>
                  <th>Años Cursados</th>
                  <th>Nombre del Estudio/Capacitacion</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {(estudios.length === 0) | (estudios === null) ? (
                  <tr>No hay Estudios ingresados</tr>
                ) : (
                  map(estudios, (est, index) => (
                    <TableRowEducacion estudio={est} key={index} />
                  ))
                )}
              </tbody>
            </Table>
          </div>
          <Button variant="guardar" type="submit">
            {!guardadoLoading ? "Guardar  " : <Spinner animation="border" />}
            <FontAwesomeIcon icon={faSave} />
          </Button>
        </Jumbotron>
      </Form>
    </div>
  );
}

function llenarDelStorage(campo, defval) {
  let datos = JSON.parse(localStorage.getItem("estudioBasico"));
  if (datos != undefined) {
    return datos[campo];
  }
  return defval;
}
function llenarDelStorageId(campo, defval) {
  let datos = JSON.parse(localStorage.getItem("estudiosGuardados"));
  if (datos != undefined) {
    return datos[campo];
  }
  return defval;
}
/* function retornarId(nombreEstudio) {
  let listaEstudios = localStorage.getItem("estudiosGuardados");
  console.log(listaEstudios);
} */

/*function capitalize(str) {
  return str[0].toUpperCase() + str.substring(1);
}*/
function initialFormValue() {
  let data = {
    primeroPrimaria_anioEstudio: "Primaria",
    primeroPrimaria_nombreInstituto: llenarDelStorage(
      "primeroPrimaria_nombreInstituto",
      ""
    ),
    primeroPrimaria_tipo_estudio_id: "1",
    primeroPrimaria_persona_id: "",

    primeroSecu_anioEstudio: "Segundaria",
    primeroSecu_nombreInstituto: llenarDelStorage(
      "primeroSecu_nombreInstituto",
      ""
    ),
    primeroSecu_tipo_estudio_id: "2",
    primeroSecu_persona_id: "",
    primeroSecu_id: "",

    cuartoBach_anioEstudio: "Bachillerato",
    cuartoBach_nombreInstituto: llenarDelStorage(
      "cuartoBach_nombreInstituto",
      ""
    ),
    cuartoBach_tipo_estudio_id: "3",
    cuartoBach_persona_id: "",
    cuartoBach_id: "",
  };

  return data;
}

function formatModel(estudios) {
  //lista temporal
  const estudiosTemp = [];

  estudios.forEach((estudio) => {
    estudiosTemp.push({
      //creo el formato
      id: estudio.id,
      nombreInstituto: estudio.nombreInstituto,
      anioEstudio: estudio.anioEstudio,
    });
  });
  return estudiosTemp;
}
