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
      segundoPrimaria_persona_id: idPostulante,
      terceroPrimaria_persona_id: idPostulante,
      cuartoPrimaria_persona_id: idPostulante,
      quintoPrimaria_persona_id: idPostulante,
      sextoPrimaria_persona_id: idPostulante,
      primeroSecu_persona_id: idPostulante,
      segundoSecu_persona_id: idPostulante,
      terceroSecu_persona_id: idPostulante,
      cuartoBach_persona_id: idPostulante,
      quintoBach_persona_id: idPostulante,
      sextoBach_persona_id: idPostulante,
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
          <div>
            <h2>Educacion</h2>
            <h3>Primaria</h3>
            <Table>
              <thead>
                <tr>
                  <th>Año</th>
                  <th>Nombre de institucion</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Form.Control
                      type="text"
                      defaultValue="Primer Año"
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
                <tr>
                  <td>
                    <Form.Control
                      type="text"
                      defaultValue="Segundo Año"
                      readOnly
                    />
                  </td>
                  <td>
                    {" "}
                    <Form.Control
                      type="text"
                      placeholder="Nombre de escuela/colegio"
                      value={formData.segundoPrimaria_nombreInstituto}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          segundoPrimaria_nombreInstituto: e.target.value,
                        }) | setEstudiosBasicos(JSON.stringify(formData))
                      }
                      onKeyUp={() =>
                        setEstudiosBasicos(JSON.stringify(formData))
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form.Control
                      type="text"
                      defaultValue="Tercer Año"
                      readOnly
                    />
                  </td>
                  <td>
                    {" "}
                    <Form.Control
                      type="text"
                      placeholder="Nombre de escuela/colegio"
                      value={formData.terceroPrimaria_nombreInstituto}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          terceroPrimaria_nombreInstituto: e.target.value,
                        }) | setEstudiosBasicos(JSON.stringify(formData))
                      }
                      onKeyUp={() =>
                        setEstudiosBasicos(JSON.stringify(formData))
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form.Control
                      type="text"
                      defaultValue="Cuarto Año"
                      readOnly
                    />
                  </td>
                  <td>
                    {" "}
                    <Form.Control
                      type="text"
                      placeholder="Nombre de escuela/colegio"
                      value={formData.cuartoPrimaria_nombreInstituto}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          cuartoPrimaria_nombreInstituto: e.target.value,
                        }) | setEstudiosBasicos(JSON.stringify(formData))
                      }
                      onKeyUp={() =>
                        setEstudiosBasicos(JSON.stringify(formData))
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form.Control
                      type="text"
                      defaultValue="Quinto Año"
                      readOnly
                    />
                  </td>
                  <td>
                    {" "}
                    <Form.Control
                      type="text"
                      placeholder="Nombre de escuela/colegio"
                      value={formData.quintoPrimaria_nombreInstituto}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          quintoPrimaria_nombreInstituto: e.target.value,
                        }) | setEstudiosBasicos(JSON.stringify(formData))
                      }
                      onKeyUp={() =>
                        setEstudiosBasicos(JSON.stringify(formData))
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form.Control
                      type="text"
                      defaultValue="Sexto Año"
                      readOnly
                    />
                  </td>
                  <td>
                    {" "}
                    <Form.Control
                      type="text"
                      placeholder="Nombre de escuela/colegio"
                      value={formData.sextoPrimaria_nombreInstituto}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          sextoPrimaria_nombreInstituto: e.target.value,
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

            <h3>Secundaria</h3>
            <Table>
              <thead>
                <tr>
                  <th>Año</th>
                  <th>Nombre de institucion</th>
                  <th hidden>tipo_estudio</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Form.Control
                      type="text"
                      defaultValue="Primer Año"
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
                <tr>
                  <td>
                    <Form.Control
                      type="text"
                      defaultValue="Segundo Año"
                      readOnly
                    />
                  </td>
                  <td>
                    {" "}
                    <Form.Control
                      type="text"
                      placeholder="Nombre de liceo/colegio"
                      value={formData.segundoSecu_nombreInstituto}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          segundoSecu_nombreInstituto: e.target.value,
                        }) | setEstudiosBasicos(JSON.stringify(formData))
                      }
                      onKeyUp={() =>
                        setEstudiosBasicos(JSON.stringify(formData))
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form.Control
                      type="text"
                      defaultValue="Tercer Año"
                      readOnly
                    />
                  </td>
                  <td>
                    {" "}
                    <Form.Control
                      type="text"
                      placeholder="Nombre de liceo/colegio"
                      value={formData.terceroSecu_nombreInstituto}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          terceroSecu_nombreInstituto: e.target.value,
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
            <h3>Bachillerato</h3>
            <Table>
              <thead>
                <tr>
                  <th>Año</th>
                  <th>Nombre de institucion</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Form.Control
                      type="text"
                      defaultValue="Cuarto Año"
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
                <tr>
                  <td>
                    <Form.Control
                      type="text"
                      defaultValue="Quinto Año"
                      readOnly
                    />
                  </td>
                  <td>
                    {" "}
                    <Form.Control
                      type="text"
                      placeholder="Nombre de liceo/colegio"
                      value={formData.quintoBach_nombreInstituto}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          quintoBach_nombreInstituto: e.target.value,
                        }) | setEstudiosBasicos(JSON.stringify(formData))
                      }
                      onKeyUp={() =>
                        setEstudiosBasicos(JSON.stringify(formData))
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form.Control
                      type="text"
                      defaultValue="Sexto Año"
                      readOnly
                    />
                  </td>
                  <td>
                    {" "}
                    <Form.Control
                      type="text"
                      placeholder="Nombre de liceo/colegio"
                      value={formData.sextoBach_nombreInstituto}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          sextoBach_nombreInstituto: e.target.value,
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
    primeroPrimaria_anioEstudio: "Primer año",
    primeroPrimaria_nombreInstituto: llenarDelStorage(
      "primeroPrimaria_nombreInstituto",
      ""
    ),
    primeroPrimaria_tipo_estudio_id: "1",
    primeroPrimaria_persona_id: "",

    segundoPrimaria_anioEstudio: "Segundo año",
    segundoPrimaria_nombreInstituto: llenarDelStorage(
      "segundoPrimaria_nombreInstituto",
      ""
    ),
    segundoPrimaria_tipo_estudio_id: "1",
    segundoPrimaria_persona_id: "",
    segundoPrimaria_id: "",

    terceroPrimaria_anioEstudio: "Tercer año",
    terceroPrimaria_nombreInstituto: llenarDelStorage(
      "terceroPrimaria_nombreInstituto",
      ""
    ),
    terceroPrimaria_tipo_estudio_id: "1",
    terceroPrimaria_persona_id: "",
    terceroPrimaria_id: "",

    cuartoPrimaria_anioEstudio: "Cuarto año",
    cuartoPrimaria_nombreInstituto: llenarDelStorage(
      "cuartoPrimaria_nombreInstituto",
      ""
    ),
    cuartoPrimaria_tipo_estudio_id: "1",
    cuartoPrimaria_persona_id: "",
    cuartoPrimaria_id: "",

    quintoPrimaria_anioEstudio: "Quinto año",
    quintoPrimaria_nombreInstituto: llenarDelStorage(
      "quintoPrimaria_nombreInstituto",
      ""
    ),
    quintoPrimaria_tipo_estudio_id: "1",
    quintoPrimaria_persona_id: "",
    quintoPrimaria_id: "",

    sextoPrimaria_anioEstudio: "Sexto año",
    sextoPrimaria_nombreInstituto: llenarDelStorage(
      "sextoPrimaria_nombreInstituto",
      ""
    ),
    sextoPrimaria_tipo_estudio_id: "1",
    sextoPrimaria_persona_id: "",
    sextoPrimaria_id: "",

    primeroSecu_anioEstudio: "Primer año",
    primeroSecu_nombreInstituto: llenarDelStorage(
      "primeroSecu_nombreInstituto",
      ""
    ),
    primeroSecu_tipo_estudio_id: "2",
    primeroSecu_persona_id: "",
    primeroSecu_id: "",

    segundoSecu_anioEstudio: "Segundo año",
    segundoSecu_nombreInstituto: llenarDelStorage(
      "segundoSecu_nombreInstituto",
      ""
    ),
    segundoSecu_tipo_estudio_id: "2",
    segundoSecu_persona_id: "",
    segundoSecu_id: "",

    terceroSecu_anioEstudio: "Tercer año",
    terceroSecu_nombreInstituto: llenarDelStorage(
      "terceroSecu_nombreInstituto",
      ""
    ),
    terceroSecu_tipo_estudio_id: "2",
    terceroSecu_persona_id: "",
    terceroSecu_id: "",

    cuartoBach_anioEstudio: "Cuarto año",
    cuartoBach_nombreInstituto: llenarDelStorage(
      "cuartoBach_nombreInstituto",
      ""
    ),
    cuartoBach_tipo_estudio_id: "3",
    cuartoBach_persona_id: "",
    cuartoBach_id: "",

    quintoBach_anioEstudio: "Quinto año",
    quintoBach_nombreInstituto: llenarDelStorage(
      "quintoBach_nombreInstituto",
      ""
    ),
    quintoBach_tipo_estudio_id: "3",
    quintoBach_persona_id: "",
    quintoBach_id: "",

    sextoBach_anioEstudio: "Sexto año",
    sextoBach_nombreInstituto: llenarDelStorage(
      "sextoBach_nombreInstituto",
      ""
    ),
    sextoBach_tipo_estudio_id: "3",
    sextoBach_persona_id: "",
    sextoBach_id: "",
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
