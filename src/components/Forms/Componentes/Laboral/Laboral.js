import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button, Spinner, Jumbotron } from "react-bootstrap";
import { values, size } from "lodash";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../FormPostulante/FormPostulante.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

import {
  crearOcupacion,
  updateOcupacion,
  getSuId,
  setLabPostu,
  setLabMadre,
  setLabPadre,
  setLabPareja,
} from "../../../../api/auth";

export default function Laboral(props) {
  const { tipoPerstate, setguardadoBoton } = props;
  //state que guarda el id del postulante en cero pero lo uso para cambiarlo una vez que di submit en datos personales
  const [idPostulante, setIdPostulante] = useState(0);
  //state para hacer funcionar el Spinner
  const [guardadoLoading, setGuardadoLoading] = useState(false);
  //state que guarda la info del formulario
  const [formData, setFormData] = useState(initialFormValue(tipoPerstate));
  //funcion que controla cuando se va a guardara el fomrulario

  useEffect(() => {
    getSuId(tipoPerstate);
    setIdPostulante(getSuId(tipoPerstate));

    //console.log(idPostulante);
    setFormData({
      ...formData,
      persona_id: getSuId(tipoPerstate),
    });
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    //lo siguiente se encarga de recorrer el form y ver si tiene el campo relleno o no
    //si el valid count tiene tiene el mismo numero que el total de keys del formdata entonces significa que tiene todos los campos rellenados

    setGuardadoLoading(true);
    if (tipoPerstate === 1) {
      if (localStorage.getItem("guardadoLabPostu") == null) {
        crearOcupacion(formData)
          .then((response) => {
            if (response.code) {
              toast.warning(response.message);
            } else {
              toast.success("Registro correcto");
              localStorage.setItem("guardadoLabPostu", "true");
              setLabPostu(JSON.stringify(formData));
              localStorage.setItem("idLabPostu", response.data);
              setguardadoBoton(false);
              setFormData(initialFormValue(tipoPerstate));
            }
          })
          .catch(() => {
            toast.error("Error del servidor");
          })
          .finally(() => {
            setGuardadoLoading(false);
          });
      } else {
        let idOcupacion = localStorage.getItem("idLabPostu");
        updateOcupacion(formData, idOcupacion)
          .then((response) => {
            if (response.code) {
              toast.warning(response.message);
            } else {
              toast.success("Actualizacion correcta");
              setLabPostu(JSON.stringify(formData));
              setguardadoBoton(false);
              setFormData(initialFormValue(tipoPerstate));
            }
          })
          .catch(() => {
            toast.error("Error del servidor");
          })
          .finally(() => {
            setGuardadoLoading(false);
          });
      }
    }
    if (tipoPerstate === 2) {
      if (localStorage.getItem("guardadoLabMadre") == null) {
        crearOcupacion(formData)
          .then((response) => {
            if (response.code) {
              toast.warning(response.message);
            } else {
              toast.success("Registro correcto");
              localStorage.setItem("guardadoLabMadre", "true");
              setLabMadre(JSON.stringify(formData));
              localStorage.setItem("idLabMadre", response.data);
              setguardadoBoton(false);
              setFormData(initialFormValue(tipoPerstate));
            }
          })
          .catch(() => {
            toast.error("Error del servidor");
          })
          .finally(() => {
            setGuardadoLoading(false);
          });
      } else {
        let idOcupacion = localStorage.getItem("idLabMadre");
        updateOcupacion(formData, idOcupacion)
          .then((response) => {
            if (response.code) {
              toast.warning(response.message);
            } else {
              toast.success("Actualizacion correcta");
              setLabMadre(JSON.stringify(formData));
              setguardadoBoton(false);
              setFormData(initialFormValue(tipoPerstate));
            }
          })
          .catch(() => {
            toast.error("Error del servidor");
          })
          .finally(() => {
            setGuardadoLoading(false);
          });
      }
    }
    if (tipoPerstate === 3) {
      if (localStorage.getItem("guardadoLabPadre") == null) {
        crearOcupacion(formData)
          .then((response) => {
            if (response.code) {
              toast.warning(response.message);
            } else {
              toast.success("Registro correcto");
              localStorage.setItem("guardadoLabPadre", "true");
              setLabPadre(JSON.stringify(formData));
              localStorage.setItem("idLabPadre", response.data);
              setguardadoBoton(false);
              setFormData(initialFormValue(tipoPerstate));
            }
          })
          .catch(() => {
            toast.error("Error del servidor");
          })
          .finally(() => {
            setGuardadoLoading(false);
          });
      } else {
        let idOcupacion = localStorage.getItem("idLabPadre");
        updateOcupacion(formData, idOcupacion)
          .then((response) => {
            if (response.code) {
              toast.warning(response.message);
            } else {
              toast.success("Actualizacion correcta");
              setLabPadre(JSON.stringify(formData));
              setguardadoBoton(false);
              setFormData(initialFormValue(tipoPerstate));
            }
          })
          .catch(() => {
            toast.error("Error del servidor");
          })
          .finally(() => {
            setGuardadoLoading(false);
          });
      }
    }
    if (tipoPerstate === 10) {
      if (localStorage.getItem("guardadoLabPareja") == null) {
        crearOcupacion(formData)
          .then((response) => {
            if (response.code) {
              toast.warning(response.message);
            } else {
              toast.success("Registro correcto");
              localStorage.setItem("guardadoLabPareja", "true");
              setLabPareja(JSON.stringify(formData));
              localStorage.setItem("idLabPareja", response.data);
              setguardadoBoton(false);
              setFormData(initialFormValue(tipoPerstate));
            }
          })
          .catch(() => {
            toast.error("Error del servidor");
          })
          .finally(() => {
            setGuardadoLoading(false);
          });
      } else {
        let idOcupacion = localStorage.getItem("idLabPareja");
        updateOcupacion(formData, idOcupacion)
          .then((response) => {
            if (response.code) {
              toast.warning(response.message);
            } else {
              toast.success("Actualizacion correcta");
              setLabPareja(JSON.stringify(formData));
              setguardadoBoton(false);
              setFormData(initialFormValue(tipoPerstate));
            }
          })
          .catch(() => {
            toast.error("Error del servidor");
          })
          .finally(() => {
            setGuardadoLoading(false);
          });
      }
    }
  };

  /////////////////////////////////EMPIEZA FORMULARIO
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Jumbotron>
          <div className="form-datos-personales">
            <h3>Ocupacion Actual</h3>
            <Form>
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Label>Cargo o Funcion</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Cargo o Funcion"
                      value={formData.cargo_funcion}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          cargo_funcion: e.target.value,
                        }) | guardandoLocal(tipoPerstate, formData)
                      }
                      onKeyUp={() => guardandoLocal(tipoPerstate, formData)}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Ente</Form.Label>
                    <Form.Control
                      as="select"
                      defaultValue="Seleccione"
                      placeholder="Cargo o Funcion"
                      value={formData.ente}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          ente: e.target.value,
                        }) | guardandoLocal(tipoPerstate, formData)
                      }
                      onKeyUp={() => guardandoLocal(tipoPerstate, formData)}
                    >
                      <option value="0">Seleccione</option>
                      <option value="Publico">Publico</option>
                      <option value="Privado">Privado</option>
                      <option value="No trabaja">No Trabaja</option>
                    </Form.Control>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Label>Nombre de la Empresa</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nombre de la Empresa"
                      value={formData.nombreEmpresa}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          nombreEmpresa: e.target.value,
                        }) | guardandoLocal(tipoPerstate, formData)
                      }
                      onKeyUp={() => guardandoLocal(tipoPerstate, formData)}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Direccion de la Empresa</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Direccion de empresa"
                      value={formData.direccion}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          direccion: e.target.value,
                        }) | guardandoLocal(tipoPerstate, formData)
                      }
                      onKeyUp={() => guardandoLocal(tipoPerstate, formData)}
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Form>
          </div>
          <Button variant="guardar" type="submit">
            {!guardadoLoading ? "Guardar " : <Spinner animation="border" />}
            <FontAwesomeIcon icon={faSave} />
          </Button>
        </Jumbotron>
      </Form>
    </div>
  );
}

function initialFormValue(tipoPerstate) {
  return {
    cargo_funcion: llenarDelStorage("cargo_funcion", "", tipoPerstate),
    ente: llenarDelStorage("ente", "", tipoPerstate),
    nombreEmpresa: llenarDelStorage("nombreEmpresa", "", tipoPerstate),
    direccion: llenarDelStorage("direccion", "", tipoPerstate),
    persona_id: llenarDelStorage("persona_id", "", tipoPerstate),
  };
}

function guardandoLocal(tipoPerstate, formData) {
  switch (tipoPerstate) {
    case 1:
      setLabPostu(JSON.stringify(formData));
      break;
    case 2:
      setLabMadre(JSON.stringify(formData));
      break;
    case 3:
      setLabPadre(JSON.stringify(formData));
      break;
    case 10:
      setLabPareja(JSON.stringify(formData));
      break;

    default:
      break;
  }
}

function llenarDelStorage(campo, defval, tipoPerstate) {
  switch (tipoPerstate) {
    case 1:
      var datosStorage = JSON.parse(localStorage.getItem("laboralPostu"));
      if (datosStorage != undefined) {
        return datosStorage[campo];
      }
    case 2:
      var datosStorage = JSON.parse(localStorage.getItem("laboralMadre"));
      if (datosStorage != undefined) {
        return datosStorage[campo];
      }

    case 3:
      var datosStorage = JSON.parse(localStorage.getItem("laboralPadre"));
      if (datosStorage != undefined) {
        return datosStorage[campo];
      }

    case 10:
      var datosStorage = JSON.parse(localStorage.getItem("laboralPareja"));
      if (datosStorage != undefined) {
        return datosStorage[campo];
      }
    default:
      break;
  }
  return defval;
}
