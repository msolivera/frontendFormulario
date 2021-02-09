import React, { useState } from "react";
import { Row, Col, Form, Jumbotron, Button, Spinner } from "react-bootstrap";

import DatePicker from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
import range from "lodash/range";

import { values, size } from "lodash";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { isEmailValid } from "../../../../utils/validations";
import { crearPersona } from "../../../../api/auth";

import "../../FormPostulante/FormPostulante.scss";

export default function DatosPersonales(props) {
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
  /*DATE PICKER PERSONALIZADO**********************************************/

  //este estate me lo manda el form que lo llame para harcodear tipo de persona
  const { tipoPerstate } = props;

  console.log(tipoPerstate);
  const [guardadoLoading, setGuardadoLoading] = useState(false);
  //state que guarda la info del formulario
  const [formData, setFormData] = useState(initialFormValue());
  //funcion que controla cuando se va a guardara el fomrulario

  function formatearDate(startDate) {
    let year = startDate.getFullYear();
    let month = "" + (startDate.getMonth() + 1);
    let day = "" + startDate.getDate();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    let fechaFinal = year + "-" + month + "-" + day;
    return fechaFinal;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    //lo siguiente se encarga de recorrer el form y ver si tiene el campo relleno o no
    //si el valid count tiene tiene el mismo numero que el total de keys del formdata entonces significa que tiene todos los campos rellenados
    let validCount = 0;
    values(formData).some((value) => {
      value && validCount++;
      return null;
    });

    if (validCount !== size(formData)) {
      toast.warning("Faltan campos que completar");
    } else {
      if (!isEmailValid(formData.correoElectronico)) {
        toast.warning("email invalido");
      } else {
        setGuardadoLoading(true);
        crearPersona(formData)
          .then((response) => {
            if (response.code) {
              toast.warning(response.message);
            } else {
              toast.success("Registro correcto");
              setFormData(initialFormValue());
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
  //###################EMPIEZA FORMULARIO####################################################
  return (
    <div className="form-datos-personales">
      <Form onSubmit={onSubmit}>
        {/*SECCION DE DATOS PERSONALES DE LA PERSONA*/}
        <Jumbotron>
          <div>
            <h2>Datos Personales</h2>

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
                        tipo_persona_id: tipoPerstate,
                      })
                    }
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
                      })
                    }
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
                      })
                    }
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
                      })
                    }
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
                      })
                    }
                  />
                </Col>
                <Col>
                  <Form.Label>Cedula de identidad</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Cedula de Identidad"
                    value={formData.cedula}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        cedula: e.target.value,
                      })
                    }
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
                      })
                    }
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
                    locale={es}
                    selected={startDate}
                    onChange={(date) =>
                      setStartDate(date) |
                      setFormData({
                        ...formData,
                        fechaNacimiento: formatearDate(date),
                      })
                    }
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
                      })
                    }
                  >
                    <option value="0"> Seleccione</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Femenino">Masculino</option>
                  </Form.Control>
                </Col>
              </Row>
            </Form.Group>

            <Form.Group>
              <Row>
                <Col>
                  <Col>
                    <Form.Label>Estado Civil</Form.Label>
                    <Form.Label>Estado Civil</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      as="select"
                      value={formData.estadocivil_id}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          estadocivil_id: e.target.value,
                        })
                      }
                    >
                      <option value="0"> Seleccione</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </Form.Control>
                  </Col>
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
                      })
                    }
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
                      })
                    }
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group>
              <Row>
                <Col>
                  <Form.Label>Correo Electronico</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Correo Electronico"
                    value={formData.correoElectronico}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        correoElectronico: e.target.value,
                      })
                    }
                  />
                </Col>
              </Row>
            </Form.Group>
          </div>
        </Jumbotron>

        {/*SECCION DE DOMICILIO DE LA PERSONA*/}
        <Jumbotron>
          <div>
            <h2>Domicilio</h2>

            <Form.Group>
              <Row>
                <Col>
                  <Form.Label>Pais de Nacimiento</Form.Label>
                  <Form.Label>Pais de Nacimiento</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue="Seleccione"
                    value={formData.pais_id}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        pais_id: e.target.value,
                      })
                    }
                  >
                    <option value="0"> Seleccione</option>
                    <option value="1">Uruguay</option>
                    <option value="2">España</option>
                    <option value="3">Inglaterra</option>
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
                      })
                    }
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Label>Departamento de Domicilio</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue="Seleccione"
                    value={formData.departamento_id}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        departamento_id: e.target.value,
                      })
                    }
                  >
                    <option value="0"> Seleccione</option>
                    <option value="1">Montevideo</option>
                    <option value="2">Artigas</option>
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Label>Ciudad/Barrio</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue="Seleccione"
                    value={formData.ciudadBarrio_id}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        ciudadBarrio_id: e.target.value,
                      })
                    }
                  >
                    <option value="0"> Seleccione</option>
                    <option value="1">Pocitos</option>
                    <option value="2">Maroñas</option>
                  </Form.Control>
                </Col>
              </Row>

              <Row>
                <Col>
                  <h5>Informacion del Extranjero: </h5>
                </Col>
                <Col>
                  <Form.Label>Departamento/Estado</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nombre de Departamento/Estado"
                    value={formData.nombre_departamento_estado}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        nombre_departamento_estado: e.target.value,
                      })
                    }
                  />
                </Col>
                <Col>
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ciudad"
                    value={formData.nombre_ciudad}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        nombre_ciudad: e.target.value,
                      })
                    }
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Label>Seccional Policial</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Seccional Policial"
                    value={formData.seccionalPolicial}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        seccionalPolicial: e.target.value,
                      })
                    }
                  />
                </Col>
              </Row>

              <Row>
                <Form.Label>Domicilios Anteriores</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  value={formData.domicilioAnterior}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      domicilioAnterior: e.target.value,
                    })
                  }
                />
              </Row>
            </Form.Group>
          </div>
        </Jumbotron>

        <Button variant="primary" type="submit">
          {!guardadoLoading ? "Siguiente" : <Spinner animation="border" />}
        </Button>
      </Form>
    </div>
  );
}

//Ver su funciona esto o no o como implementar el asunto
/**function AbirMiniComponente(content) {
  if (content == "Uruguay") {
    return <MiniComponenteDepa />;
  }
  return <MiniComponentPais />;
}*/

//FUNCION QUE GUARDA LA INFO QUE UNO ESCRIBE EN EL FORMULARIO
function initialFormValue() {
  return {
    primerNombre: "",
    segundoNombre: "",
    primerApellido: "",
    segundoApellido: "",
    apodo: "",
    fechaNacimiento: "1994-03-04",
    cedula: "",
    credencialSerie: "",
    credencialNumero: "",
    sexo: "",
    domicilioActual: "",
    domicilioAnterior: "",
    telefono_celular: "",
    correoElectronico: "",
    seccionalPolicial: "",
    estadocivil_id: "",
    pais_id: "",
    tipo_persona_id: "",
    inscripcion_id: "1",
    departamento_id: "",
    ciudadBarrio_id: "",

    nombre_departamento_estado: "",
    nombre_ciudad: "",
  };
}

/*

 <DatePicker
                    dateFormat="yyyy/MM/dd"
                    locale={es}
                    mode="datatime"
                    selected={startDate}
                    onChange={(date) =>
                      setStartDate(date) |
                      setFormData({
                        ...formData,
                        fechaNacimiento: formatearDate(date),
                      })
                    }
                  />

                  */
