import React, { useState, useEffect } from "react";
import { Row, Col, Form, Jumbotron, Button, Spinner } from "react-bootstrap";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import range from "lodash/range";

import { values } from "lodash";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { isEmailValid } from "../../../../utils/validations";

import {
  crearPostulante,
  updatePostulante,
  setIdsApi,
  getIdPostu,
  getIdMadre,
  getIdPadre,
  getIdPareja,
  crearParentesco,
  crearFamiliarPostulante,
  updateFamiliarPostulante,
  setDataPostu,
  setDataMadre,
  setDataPadre,
  setDataPareja,
  getSuId,
} from "../../../../api/auth";
import {
  getPaisesApi,
  getEstadosCivilesApi,
  getDepartamentosApi,
  getCiudades,
  setearPais,
  setearDepartamento,
  setearCiudad,
  setearEstadoCivil,
} from "../../../../api/combos";

import "../../FormPostulante/FormPostulante.scss";

export default function DatosPersonales(props) {
  //este estate me lo manda el form que lo llame para harcodear tipo de persona
  const { tipoPerstate, setguardadoBoton } = props;

  const [guardadoLoading, setGuardadoLoading] = useState(false);
  //state que guarda la info del formulario
  const [formData, setFormData] = useState(initialFormValue(tipoPerstate));

  const [estadoCivi, setEstadoCivi] = useState([]);

  const [ciudades, setciudades] = useState([]);

  //useEffect que recibe la respuesta de la funcion de obtener paises y luego la procesa en una lista de opciones.
  useEffect(() => {
    getPaisesApi()
      .then((response) => {
        let lista = response.data;
        let opciones = lista.map((pais) => {
          return { id: `${pais.id}`, nombre: `${pais.nombre}` };
        });
        cargarCombos(opciones, "select_form_pais");
        return { opciones: opciones };
      })
      .catch(() => {});
  }, []);

  //useEffect que recibe la respuesta de la funcion de obtener departamentos y luego la procesa en una lista de opciones.
  useEffect(() => {
    getDepartamentosApi()
      .then((response) => {
        let lista = response.data;
        let opciones = lista.map((departamento) => {
          return { id: `${departamento.id}`, nombre: `${departamento.nombre}` };
        });
        cargarCombos(opciones, "select_form_departamento");
        return { opciones: opciones };
      })
      .catch(() => {});
  }, []);

  //useEffect que recibe la respuesta de la funcion de obtener estados civiles y luego la procesa en una lista de opciones.''

  useEffect(() => {
    getEstadosCivilesApi()
      .then((response) => {
        let lista = response.data;
        let opciones = lista.map((estadocivil) => {
          return { id: `${estadocivil.id}`, nombre: `${estadocivil.nombre}` };
        });
        setEstadoCivi(opciones);

        cargarCombos(opciones, "select_form_estadoCivil");
        return { opciones: opciones };
      })
      .catch(() => {});
  }, []);

  //useEffect que recibe la respuesta de la funcion de obtener ciudades segun departamento seleccionado y luego la procesa en una lista de opciones.
  useEffect(() => {
    getCiudades()
      .then((response) => {
        let lista = response.data;
        let opciones = lista.map((ciudad) => {
          return {
            id: `${ciudad.id}`,
            nombre: `${ciudad.nombre}`,
            depa: `${ciudad.departamento_id}`,
          };
        });
        setciudades(opciones);
        //cargarComboCiudad(ciudades, 2);
        return { opciones: opciones };
      })
      .catch(() => {});
  }, []);

  /*DATE PICKER PERSONALIZADO**********************************************/
  const [startDate, setStartDate] = useState(new Date());

  const years = range(1920, new Date().getFullYear() + 1, 1);
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Setiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  function formatearDate(startDate) {
    let year = startDate.getFullYear();
    let month = "" + (startDate.getMonth() + 1);
    let day = "" + startDate.getDate();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    let fechaFinal = year + "-" + month + "-" + day;
    return fechaFinal;
  }
  /*DATE PICKER PERSONALIZADO**********************************************/
  //funcion que controla cuando se va a guardara el fomrulario
  const onSubmit = (e) => {
    e.preventDefault();
    //lo siguiente se encarga de recorrer el form y ver si tiene el campo relleno o no
    //si el valid count tiene tiene el mismo numero que el total de keys del formdata entonces significa que tiene todos los campos rellenados
    let validCount = 0;
    values(formData).some((value) => {
      value && validCount++;
      return null;
    });

    if (tipoPerstate === 1) {
      if (localStorage.getItem("guardadoDataPostu") == null) {
        if (validCount < 20) {
          toast.warning("Faltan campos que completar");
        } else {
          if (!isEmailValid(formData.correoElectronico)) {
            toast.warning("email invalido");
          } else {
            setGuardadoLoading(true);
            setDataPostu(JSON.stringify(formData));

            crearPostulante(formData)
              .then((response) => {
                if (response.code) {
                  toast.warning(response.message);
                } else {
                  toast.success("Registro correcto");
                  setFormData(initialFormValue(tipoPerstate));
                  setIdsApi(tipoPerstate, response.data);
                  setguardadoBoton(false);
                  localStorage.setItem("guardadoDataPostu", "true");
                }
              })
              .catch(() => {
                //toast.error("Error del servidor");
              })
              .finally(() => {
                setGuardadoLoading(false);
              });
          }
        }
      } else {
        if (validCount < 20) {
          toast.warning("Faltan campos que completar");
        } else {
          if (!isEmailValid(formData.correoElectronico)) {
            toast.warning("email invalido");
          } else {
            setGuardadoLoading(true);
            setDataPostu(JSON.stringify(formData));

            updatePostulante(formData, getIdPostu())
              .then((response) => {
                if (response.code) {
                  toast.warning(response.message);
                } else {
                  toast.success("Actualizacion correcta");
                  setFormData(initialFormValue(tipoPerstate));
                  setIdsApi(tipoPerstate, response.data);
                  setguardadoBoton(false);
                  localStorage.setItem("guardadoDataPostu", "true");
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
      }
    } else {
      setGuardadoLoading(true);
      if (tipoPerstate === 2) {
        if (localStorage.getItem("guardadoDataMadre") == null) {
          setDataMadre(JSON.stringify(formData));
          crearFamiliarPostulante(formData)
            .then((response) => {
              if (response.code) {
                toast.warning(response.message);
              } else {
                toast.success("Registro correcto");
                setFormData(initialFormValue(tipoPerstate));
                setIdsApi(tipoPerstate, response.data);
                localStorage.setItem("guardadoDataMadre", "true");
                setguardadoBoton(false);
              }
            })
            .catch(() => {
              toast.error("Error del servidor");
            })
            .finally(() => {
              crearParentesco(jsonParientes(tipoPerstate));
              setGuardadoLoading(false);
            });
        } else {
          setguardadoBoton(false);
          setDataMadre(JSON.stringify(formData));
          updateFamiliarPostulante(formData, getIdMadre())
            .then((response) => {
              if (response.code) {
                toast.warning(response.message);
              } else {
                toast.success("Actualizacion correcta");
                setFormData(initialFormValue(tipoPerstate));
                setIdsApi(tipoPerstate, response.data);
                setguardadoBoton(false);
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
        if (localStorage.getItem("guardadoDataPadre") == null) {
          //console.log("NO hay datos Padre");
          setDataPadre(JSON.stringify(formData));
          crearFamiliarPostulante(formData)
            .then((response) => {
              if (response.code) {
                toast.warning(response.message);
              } else {
                toast.success("Registro correcto");
                setFormData(initialFormValue(tipoPerstate));
                setIdsApi(tipoPerstate, response.data);
                localStorage.setItem("guardadoDataPadre", "true");
                setguardadoBoton(false);
              }
            })
            .catch(() => {
              toast.error("Error del servidor");
            })
            .finally(() => {
              crearParentesco(jsonParientes(tipoPerstate));
              setGuardadoLoading(false);
            });
        } else {
          setguardadoBoton(false);
          setDataPadre(JSON.stringify(formData));
          updateFamiliarPostulante(formData, getIdPadre())
            .then((response) => {
              if (response.code) {
                toast.warning(response.message);
              } else {
                toast.success("Actualizacion correcta");
                setFormData(initialFormValue(tipoPerstate));
                setIdsApi(tipoPerstate, response.data);
                setguardadoBoton(false);
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
        if (localStorage.getItem("guardadoDataPreja") == null) {
          //console.log("NO hay datos Pareja");
          setDataPareja(JSON.stringify(formData));
          crearFamiliarPostulante(formData)
            .then((response) => {
              if (response.code) {
                toast.warning(response.message);
              } else {
                toast.success("Registro correcto");
                setFormData(initialFormValue(tipoPerstate));
                setIdsApi(tipoPerstate, response.data);
                localStorage.setItem("guardadoDataPreja", "true");
                setguardadoBoton(false);
              }
            })
            .catch(() => {
              toast.error("Error del servidor");
            })
            .finally(() => {
              crearParentesco(jsonParientes(tipoPerstate));
              setGuardadoLoading(false);
            });
        } else {
          setguardadoBoton(false);
          setDataPareja(JSON.stringify(formData));
          updateFamiliarPostulante(formData, getIdPareja())
            .then((response) => {
              if (response.code) {
                toast.warning(response.message);
              } else {
                toast.success("Actualizacion correcta");
                setFormData(initialFormValue(tipoPerstate));
                setIdsApi(tipoPerstate, response.data);
                setguardadoBoton(false);
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
    }
  };
  //###################EMPIEZA FORMULARIO####################################################
  return (
    <div className="form-datos-personales">
      <Form onSubmit={onSubmit}>
        {/*SECCION DE DATOS PERSONALES DE LA PERSONA*/}
        <Jumbotron>
          <div>
            <Form.Group>
              <Row>
                <Col>
                  <Form.Label>Primer Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Primer Nombre"
                    value={formData.primerNombre}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        primerNombre: e.target.value,
                      }) | guardandoLocal(tipoPerstate, formData)
                    }
                    onKeyUp={() => guardandoLocal(tipoPerstate, formData)}
                  />
                </Col>
                <Col>
                  <Form.Label>Segundo Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Segundo Nombre"
                    value={formData.segundoNombre}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        segundoNombre: e.target.value,
                      }) | guardandoLocal(tipoPerstate, formData)
                    }
                    onKeyUp={() => guardandoLocal(tipoPerstate, formData)}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Primer Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Primer Apellido"
                    value={formData.primerApellido}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        primerApellido: e.target.value,
                      }) | guardandoLocal(tipoPerstate, formData)
                    }
                    onKeyUp={() => guardandoLocal(tipoPerstate, formData)}
                  />
                </Col>
                <Col>
                  <Form.Label>Segundo Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Segundo Apellido"
                    value={formData.segundoApellido}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        segundoApellido: e.target.value,
                      }) | guardandoLocal(tipoPerstate, formData)
                    }
                    onKeyUp={() => guardandoLocal(tipoPerstate, formData)}
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group>
              <Row>
                <Col>
                  <Form.Label>Telefono/Celular</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Telefono/Celular"
                    value={formData.telefono_celular}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        telefono_celular: e.target.value,
                      }) | guardandoLocal(tipoPerstate, formData)
                    }
                    onKeyUp={() => guardandoLocal(tipoPerstate, formData)}
                  />
                </Col>
                <Col>
                  <Form.Label>
                    Cedula de identidad (sin puntos ni guión)
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Cedula de Identidad"
                    value={formData.cedula}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        cedula: e.target.value,
                      }) | guardandoLocal(tipoPerstate, formData)
                    }
                    onKeyUp={() => guardandoLocal(tipoPerstate, formData)}
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group>
              <Row>
                <Col>
                  <Form.Label>Apodo</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Apodo"
                    value={formData.apodo}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        apodo: e.target.value,
                      }) | guardandoLocal(tipoPerstate, formData)
                    }
                    onKeyUp={() => guardandoLocal(tipoPerstate, formData)}
                  />
                </Col>
                <Col>
                  <Form.Label>Fecha de Nacimiento</Form.Label>
                  <DatePicker
                    dateFormat="yyyy/MM/dd"
                    renderCustomHeader={({
                      date,
                      changeYear,
                      changeMonth,
                      decreaseMonth,
                      increaseMonth,
                      prevMonthButtonDisabled,
                      nextMonthButtonDisabled,
                    }) => (
                      <div
                        style={{
                          margin: 10,
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <button
                          onClick={decreaseMonth}
                          disabled={prevMonthButtonDisabled}
                        >
                          {"<"}
                        </button>
                        <select
                          value={date.getFullYear()}
                          onChange={({ target: { value } }) =>
                            changeYear(value)
                          }
                        >
                          {years.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>

                        <select
                          value={months[date.getMonth()]}
                          onChange={({ target: { value } }) =>
                            changeMonth(months.indexOf(value))
                          }
                        >
                          {months.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>

                        <button
                          onClick={increaseMonth}
                          disabled={nextMonthButtonDisabled}
                        >
                          {">"}
                        </button>
                      </div>
                    )}
                    selected={startDate}
                    onChange={(date) =>
                      setStartDate(date) |
                      setFormData({
                        ...formData,
                        fechaNacimiento: formatearDate(date),
                      }) |
                      guardandoLocal(tipoPerstate, formData)
                    }
                    onKeyUp={() => guardandoLocal(tipoPerstate, formData)}
                  />
                </Col>
                <Col>
                  <Form.Label>Sexo</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue="Seleccione"
                    value={formData.sexo}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        sexo: e.target.value,
                      }) | guardandoLocal(tipoPerstate, formData)
                    }
                    onKeyUp={() => guardandoLocal(tipoPerstate, formData)}
                  >
                    <option value="0"> Seleccione</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Masculino">Masculino</option>
                  </Form.Control>
                </Col>
              </Row>
            </Form.Group>

            <Form.Group>
              <Row>
                <Col>
                  <Form.Label>Raza</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue="Seleccione"
                    value={formData.raza}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        raza: e.target.value,
                      }) | guardandoLocal(tipoPerstate, formData)
                    }
                    onKeyUp={() => guardandoLocal(tipoPerstate, formData)}
                  >
                    <option value="0"> Seleccione</option>
                    <option value="Afrodescendiente">Afrodescendiente</option>
                    <option value="No afrodescendiente">
                      No afrodescendiente
                    </option>
                  </Form.Control>
                </Col>

                <Col>
                  <Form.Label>Identidad de Género</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue="Seleccione"
                    value={formData.identidadGenero}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        identidadGenero: e.target.value,
                      }) | guardandoLocal(tipoPerstate, formData)
                    }
                    onKeyUp={() => guardandoLocal(tipoPerstate, formData)}
                  >
                    <option value="0"> Seleccione</option>
                    <option value="Mujer">Mujer</option>
                    <option value="Hombre">Hombre</option>
                    <option value="Trans">Trans</option>
                  </Form.Control>
                </Col>
              </Row>
            </Form.Group>

            <Form.Group>
              <Row>
                <Col>
                  <Form.Label>Estado Civil</Form.Label>

                  <Form.Control
                    id="select_form_estadoCivil"
                    as="select"
                    value={formData.estadocivil_id}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        estadocivil_id: e.target.value,
                      }) |
                      guardandoLocal(tipoPerstate, formData) |
                      setearEstadoCivil(e.target.value, tipoPerstate)
                    }
                    onKeyUp={() => guardandoLocal(tipoPerstate, formData)}
                  >
                    <option value=""> Seleccione</option>
                  </Form.Control>
                </Col>

                <Col>
                  <Form.Label>Credencial Civica Serie</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Credencial Serie"
                    value={formData.credencialSerie}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        credencialSerie: e.target.value,
                      }) | guardandoLocal(tipoPerstate, formData)
                    }
                    onKeyUp={() => guardandoLocal(tipoPerstate, formData)}
                  />
                </Col>
                <Col>
                  <Form.Label>Credencial Civica Numero</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Credencial Numero"
                    value={formData.credencialNumero}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        credencialNumero: e.target.value,
                      }) | guardandoLocal(tipoPerstate, formData)
                    }
                    onKeyUp={() => guardandoLocal(tipoPerstate, formData)}
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group>
              <Row>
                <Col>
                  <Form.Label>Correo Electrónico</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Correo Electronico"
                    value={formData.correoElectronico}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        correoElectronico: e.target.value,
                      }) | guardandoLocal(tipoPerstate, formData)
                    }
                    onKeyUp={() => guardandoLocal(tipoPerstate, formData)}
                  />
                </Col>
              </Row>
            </Form.Group>
          </div>
        </Jumbotron>

        {/*SECCION DE DOMICILIO DE LA PERSONA*/}
        <Jumbotron>
          <div>
            <h3>Domicilio</h3>

            <Form.Group>
              <Row>
                <Col>
                  <Form.Label>País de Nacimiento</Form.Label>
                  <Form.Control
                    id="select_form_pais"
                    as="select"
                    defaultValue="Seleccione"
                    value={formData.pais_id}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        pais_id: e.target.value,
                      }) |
                      guardandoLocal(tipoPerstate, formData) |
                      setearPais(e.target.value, tipoPerstate)
                    }
                    onKeyUp={() => guardandoLocal(tipoPerstate, formData)}
                  >
                    <option value=""> Seleccione</option>
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Label>Domicilio Actual</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Domicilio Actual"
                    value={formData.domicilioActual}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        domicilioActual: e.target.value,
                      }) | guardandoLocal(tipoPerstate, formData)
                    }
                    onKeyUp={() => guardandoLocal(tipoPerstate, formData)}
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Label>Departamento de Domicilio</Form.Label>
                  <Form.Control
                    id="select_form_departamento"
                    as="select"
                    defaultValue="Seleccione"
                    value={formData.departamento_id}
                    //value={1}
                    onChange={(e) =>
                      cargarComboCiudad(ciudades, e.target.value) |
                      setFormData({
                        ...formData,
                        departamento_id: e.target.value,
                      }) |
                      guardandoLocal(tipoPerstate, formData) |
                      setearDepartamento(e.target.value, tipoPerstate)
                    }
                    onKeyUp={() => guardandoLocal(tipoPerstate, formData)}
                  >
                    <option value="0">Seleccione</option>
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Label>Ciudad/Barrio</Form.Label>
                  <Form.Control
                    id="select_form_ciudad"
                    as="select"
                    defaultValue={
                      formData.ciudadBarrio_id /*|
                      cargarComboCiudad(ciudades, formData.departamento_id)*/
                    }
                    value={formData.ciudadBarrio_id}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        ciudadBarrio_id: e.target.value,
                      }) |
                      guardandoLocal(tipoPerstate, formData) |
                      setearCiudad(e.target.value, tipoPerstate)
                    }
                    onKeyUp={() => guardandoLocal(tipoPerstate, formData)}
                  >
                    <option value="0"> Seleccione</option>
                  </Form.Control>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Label>Seccional Policial (solo números)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Seccional Policial"
                    value={formData.seccionalPolicial}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        seccionalPolicial: e.target.value,
                      }) | guardandoLocal(tipoPerstate, formData)
                    }
                    onKeyUp={() => guardandoLocal(tipoPerstate, formData)}
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Label>Domicilios Anteriores</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    value={formData.domicilioAnterior}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        domicilioAnterior: e.target.value,
                      }) | guardandoLocal(tipoPerstate, formData)
                    }
                    onKeyUp={() => guardandoLocal(tipoPerstate, formData)}
                  />
                </Col>
              </Row>
            </Form.Group>
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

function llenarDelStorage(campo, defval, tipoPerstate) {
  switch (tipoPerstate) {
    case 1:
      var datosStorage = JSON.parse(localStorage.getItem("dataPostu"));
      if (datosStorage != undefined) {
        return datosStorage[campo];
      }
    case 2:
      var datosStorage = JSON.parse(localStorage.getItem("dataMadre"));
      if (datosStorage != undefined) {
        return datosStorage[campo];
      }

    case 3:
      var datosStorage = JSON.parse(localStorage.getItem("dataPadre"));
      if (datosStorage != undefined) {
        return datosStorage[campo];
      }

    case 10:
      var datosStorage = JSON.parse(localStorage.getItem("dataPareja"));
      if (datosStorage != undefined) {
        return datosStorage[campo];
      }
    default:
      break;
  }
  return defval;
}

//FUNCION QUE GUARDA LA INFO QUE UNO ESCRIBE EN EL FORMULARIO
function initialFormValue(tipoPerstate) {
  if (tipoPerstate == 1) {
    return {
      primerNombre: llenarDelStorage("primerNombre", "", tipoPerstate),
      segundoNombre: llenarDelStorage("segundoNombre", "", tipoPerstate),
      primerApellido: llenarDelStorage("primerApellido", "", tipoPerstate),
      segundoApellido: llenarDelStorage("segundoApellido", "", tipoPerstate),
      apodo: llenarDelStorage("apodo", "", tipoPerstate),
      fechaNacimiento: llenarDelStorage("fechaNacimiento", "", tipoPerstate),
      cedula: llenarDelStorage("cedula", "", tipoPerstate),
      credencialSerie: llenarDelStorage("credencialSerie", "", tipoPerstate),
      credencialNumero: llenarDelStorage("credencialNumero", "", tipoPerstate),
      sexo: llenarDelStorage("sexo", "", tipoPerstate),
      identidadGenero: llenarDelStorage("identidadGenero", "", tipoPerstate),
      raza: llenarDelStorage("raza", "", tipoPerstate),
      domicilioActual: llenarDelStorage("domicilioActual", "", tipoPerstate),
      domicilioAnterior: llenarDelStorage(
        "domicilioAnterior",
        "",
        tipoPerstate
      ),
      telefono_celular: llenarDelStorage("telefono_celular", "", tipoPerstate),
      correoElectronico: llenarDelStorage(
        "correoElectronico",
        "ejemplo@mail.com",
        tipoPerstate
      ),
      seccionalPolicial: llenarDelStorage(
        "seccionalPolicial",
        "",
        tipoPerstate
      ),
      estadocivil_id: llenarDelStorage("estadocivil_id", "", tipoPerstate),
      pais_id: llenarDelStorage("pais_id", "", tipoPerstate),
      tipo_persona_id: tipoPerstate,
      inscripcion_id: "1",
      departamento_id: llenarDelStorage("departamento_id", "", tipoPerstate),
      ciudadBarrio_id: llenarDelStorage("ciudadBarrio_id", "", tipoPerstate),

      nombre_departamento_estado: llenarDelStorage(
        "nombre_departamento_estado",
        "",
        tipoPerstate
      ),
      nombre_ciudad: llenarDelStorage("nombre_ciudad", "", tipoPerstate),
    };
  } else {
    return {
      primerNombre: llenarDelStorage("primerNombre", "", tipoPerstate),
      segundoNombre: llenarDelStorage("segundoNombre", "", tipoPerstate),
      primerApellido: llenarDelStorage("primerApellido", "", tipoPerstate),
      segundoApellido: llenarDelStorage("segundoApellido", "", tipoPerstate),
      apodo: llenarDelStorage("apodo", "", tipoPerstate),
      fechaNacimiento: llenarDelStorage("fechaNacimiento", "", tipoPerstate),
      cedula: llenarDelStorage("cedula", "0", tipoPerstate),
      credencialSerie: llenarDelStorage("credencialSerie", "", tipoPerstate),
      credencialNumero: llenarDelStorage("credencialNumero", "0", tipoPerstate),
      sexo: llenarDelStorage("sexo", "", tipoPerstate),
      identidadGenero: llenarDelStorage("identidadGenero", "", tipoPerstate),
      raza: llenarDelStorage("raza", "", tipoPerstate),
      domicilioActual: llenarDelStorage("domicilioActual", "", tipoPerstate),
      domicilioAnterior: llenarDelStorage(
        "domicilioAnterior",
        "",
        tipoPerstate
      ),
      telefono_celular: llenarDelStorage("telefono_celular", "0", tipoPerstate),
      correoElectronico: llenarDelStorage(
        "correoElectronico",
        "ejemplo@mail.com",
        tipoPerstate
      ),
      seccionalPolicial: llenarDelStorage(
        "seccionalPolicial",
        "",
        tipoPerstate
      ),
      estadocivil_id: llenarDelStorage("estadocivil_id", "0", tipoPerstate),
      pais_id: llenarDelStorage("pais_id", "0", tipoPerstate),
      tipo_persona_id: tipoPerstate,
      inscripcion_id: "1",
      departamento_id: llenarDelStorage("departamento_id", "0", tipoPerstate),
      ciudadBarrio_id: llenarDelStorage("ciudadBarrio_id", "0", tipoPerstate),
      nombre_departamento_estado: llenarDelStorage(
        "nombre_departamento_estado",
        "",
        tipoPerstate
      ),
      nombre_ciudad: llenarDelStorage("nombre_ciudad", "", tipoPerstate),
    };
  }
}

function jsonParientes(tipoPerstate) {
  switch (tipoPerstate) {
    case 2:
      return {
        postulante_id: getIdPostu(),
        familiar_id: getIdMadre(),
      };
    case 3:
      return {
        postulante_id: getIdPostu(),
        familiar_id: getIdPadre(),
      };

    case 10:
      return {
        postulante_id: getIdPostu(),
        familiar_id: getIdPareja(),
      };

    default:
      break;
  }
}

function cargarCombos(listaOpciones, idComponente) {
  var options = listaOpciones;
  var listaACargar = document.getElementById(idComponente);

  for (var i in options) {
    // creamos un elemento de tipo option
    var opt = document.createElement("option");
    // le damos un valor
    opt.value = options[i].id;
    // le ponemos un texto
    opt.textContent = options[i].nombre;
    // lo agregamos al select
    listaACargar.options.add(opt);
  }
}

function cargarComboCiudad(listaOpciones, idDepa) {
  var options = listaOpciones;
  var listaACargar = document.getElementById("select_form_ciudad");

  if (listaACargar.length != 0) {
    for (var i in listaACargar) {
      listaACargar.remove(listaACargar[i]);
    }
  }
  for (var i in options) {
    if (options[i].depa == idDepa) {
      // creamos un elemento de tipo option
      var opt = document.createElement("option");
      // le damos un valor
      opt.value = options[i].id;
      // le ponemos un texto
      opt.textContent = options[i].nombre;
      // lo agregamos al select
      listaACargar.options.add(opt);
    }
  }
}

function guardandoLocal(tipoPerstate, formData) {
  switch (tipoPerstate) {
    case 1:
      setDataPostu(JSON.stringify(formData));
      break;
    case 2:
      setDataMadre(JSON.stringify(formData));
      break;
    case 3:
      setDataPadre(JSON.stringify(formData));
      break;
    case 10:
      setDataPareja(JSON.stringify(formData));
      break;

    default:
      break;
  }
}
