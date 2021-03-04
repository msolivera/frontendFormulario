import React from "react";
import ReactToPrint from "react-to-print";

import { map } from "lodash";
import TableRowEducacion from "../Forms/Componentes/TableRowEducacion/index";
import TableRowPregPDF from "../Forms/Componentes/TableRowPregPDF/index";
import TableRowFamiliares from "../Forms/Componentes/TableRowFamiliares/index";
import {
  listaOtrosEstudios,
  getEstudiosLocal,
  listarRespuestas,
  getRespuestasLocal,
  getOtrosFamiliaresPersona,
  getfliaresLocal,
  listaOtrosFamiliaresPersona,
} from "../../api/tablas";

import { Row, Col, Form, Container, Table } from "react-bootstrap";
import {
  getDataPostu,
  getDataMadre,
  getDataPadre,
  getDataPareja,
  getIdPostu,
  getIdMadre,
  getIdPadre,
  getIdPareja,
  getEstudiosBasicos,
  getLabPostu,
  getLabMadre,
  getLabPadre,
  getLabPareja,
} from "../../api/auth";

class ComponentToPrint extends React.Component {
  constructor(props) {
    super(props);
    //STATES QUE USO PARA RELLENAR EL PDF
    this.dataPostu = getDataPostu();
    this.dataMadre = getDataMadre();
    this.dataPadre = getDataPadre();
    this.dataPareja = getDataPareja();
    this.idPostu = getIdPostu();
    this.idMadre = getIdMadre();
    this.idPadre = getIdPadre();
    this.idPareja = getIdPareja();
    this.listaEstudios = listaOtrosEstudios(getIdPostu());
    this.estudios = getEstudiosLocal();
    this.estudiosBasicos = getEstudiosBasicos();
    this.laboralPostu = getLabPostu();
    this.laboralMadre = getLabMadre();
    this.laboralPadre = getLabPadre();
    this.laboralPareja = getLabPareja();
    this.listaPreguntasPostu = listarRespuestas(getIdPostu(), 1);
    this.preguntasPostu = getRespuestasLocal(1);
    this.listaPreguntasMadre = listarRespuestas(getIdMadre(), 2);
    this.preguntasMadre = getRespuestasLocal(2);
    this.listaPreguntasPadre = listarRespuestas(getIdPadre(), 3);
    this.preguntasPadre = getRespuestasLocal(3);
    this.listaPreguntasPareja = listarRespuestas(getIdPareja(), 10);
    this.preguntasPareja = getRespuestasLocal(10);
    this.listaParientes = listaOtrosFamiliaresPersona(getIdPostu());
    this.parientes = getfliaresLocal();
  }

  render() {
    return (
      <div>
        <h1>DATOS POSTULANTE</h1>

        <Container>
          <h2>Datos Personales</h2>
          <Form.Group>
            <Row>
              <Col>
                <Form.Label>Primer Nombre</Form.Label>
                <Form.Control value={this.dataPostu.primerNombre} />
              </Col>
              <Col>
                <Form.Label>Segundo Nombre</Form.Label>
                <Form.Control value={this.dataPostu.segundoNombre} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Primer Apellido</Form.Label>
                <Form.Control value={this.dataPostu.primerApellido} />
              </Col>
              <Col>
                <Form.Label>Segundo Apellido</Form.Label>
                <Form.Control value={this.dataPostu.segundoApellido} />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group>
            <Row>
              <Col>
                <Form.Label>Telefono/Celular</Form.Label>
                <Form.Control value={this.dataPostu.telefono_celular} />
              </Col>
              <Col>
                <Form.Label>Cedula de identidad</Form.Label>
                <Form.Control value={this.dataPostu.cedula} />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group>
            <Row>
              <Col>
                <Form.Label>Apodo</Form.Label>
                <Form.Control value={this.dataPostu.apodo} />
              </Col>
              <Col>
                <Form.Label>Fecha de Nacimiento</Form.Label>
                <Form.Control value={this.dataPostu.fechaNacimiento} />
              </Col>
              <Col>
                <Form.Label>Sexo</Form.Label>
                <Form.Control value={this.dataPostu.sexo}></Form.Control>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group>
            <Row>
              <Col>
                <Col>
                  <Form.Label>Estado Civil</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    value={this.dataPostu.estadocivil_id}
                  ></Form.Control>
                </Col>
              </Col>
              <Col>
                <Form.Label>Credencial Civica Serie</Form.Label>
                <Form.Control value={this.dataPostu.credencialSerie} />
              </Col>
              <Col>
                <Form.Label>Credencial Civica Numero</Form.Label>
                <Form.Control value={this.dataPostu.credencialNumero} />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group>
            <Row>
              <Col>
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control value={this.dataPostu.correoElectronico} />
              </Col>
            </Row>
          </Form.Group>
        </Container>

        {/*SECCION DE DOMICILIO DE LA PERSONA*/}

        <div>
          <Container>
            <h2>Domicilio</h2>

            <Form.Group>
              <Row>
                <Col>
                  <Form.Label>Pais de Nacimiento</Form.Label>
                  <Form.Control
                    value={localStorage.getItem("paisPostu")}
                  ></Form.Control>
                </Col>
                <Col>
                  <Form.Label>Domicilio Actual</Form.Label>
                  <Form.Control value={this.dataPostu.domicilioActual} />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Label>Departamento de Domicilio</Form.Label>
                  <Form.Control
                    value={localStorage.getItem("depaPostu")}
                  ></Form.Control>
                </Col>
                <Col>
                  <Form.Label>Ciudad/Barrio</Form.Label>
                  <Form.Control
                    value={localStorage.getItem("barrioPostu")}
                  ></Form.Control>
                </Col>
                <Row></Row>
              </Row>

              <Row>
                <Col>
                  <Form.Label>Seccional Policial</Form.Label>
                  <Form.Control value={this.dataPostu.seccionalPolicial} />
                </Col>
              </Row>

              <Row>
                <Form.Label>Domicilios Anteriores</Form.Label>
                <Form.Control value={this.dataPostu.domicilioAnterior} />
              </Row>

              <h3>Complete si es nacido en el Extranjero: </h3>
              <Row>
                <Col>
                  <Form.Label>Departamento/Estado</Form.Label>
                  <Form.Control
                    value={this.dataPostu.nombre_departamento_estado}
                  />
                </Col>
                <Col>
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Control value={this.dataPostu.nombre_ciudad} />
                </Col>
              </Row>
            </Form.Group>
          </Container>
          {/*estudios dela persona */}
          <Container>
            <Form>
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
                          value={
                            this.estudiosBasicos.primeroPrimaria_nombreInstituto
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
                          value={
                            this.estudiosBasicos.segundoPrimaria_nombreInstituto
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
                          value={
                            this.estudiosBasicos.terceroPrimaria_nombreInstituto
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
                          value={
                            this.estudiosBasicos.cuartoPrimaria_nombreInstituto
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
                          value={
                            this.estudiosBasicos.quintoPrimaria_nombreInstituto
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
                          value={
                            this.estudiosBasicos.sextoPrimaria_nombreInstituto
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
                          value={
                            this.estudiosBasicos.primeroSecu_nombreInstituto
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
                          value={
                            this.estudiosBasicos.segundoSecu_nombreInstituto
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
                          value={
                            this.estudiosBasicos.terceroSecu_nombreInstituto
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
                          value={
                            this.estudiosBasicos.cuartoBach_nombreInstituto
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
                          value={
                            this.estudiosBasicos.quintoBach_nombreInstituto
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
                          value={this.estudiosBasicos.sextoBach_nombreInstituto}
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>

                <h3>Otros Estudios Realizados</h3>

                <Table id="tabla">
                  <thead>
                    <tr>
                      <th>Años Cursados</th>
                      <th>Nombre del Estudio/Capacitacion</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.estudios == null ? (
                      <tr>No hay Estudios ingresados</tr>
                    ) : (
                      map(this.estudios, (est, index) => (
                        <TableRowEducacion estudio={est} key={index} />
                      ))
                    )}
                  </tbody>
                </Table>
              </div>
            </Form>
          </Container>
          {/*LABORAL POSTULANTE*/}
          <Container>
            <Form>
              <div className="form-datos-personales">
                <h2>Laboral/Ocupacion Actual</h2>
                <Form>
                  <Form.Group>
                    <Row>
                      <Col>
                        <Form.Label>Cargo o Funcion</Form.Label>
                        <Form.Control value={this.laboralPostu.cargo_funcion} />
                      </Col>
                      <Col>
                        <Form.Label>Ente</Form.Label>
                        <Form.Control
                          value={this.laboralPostu.ente}
                        ></Form.Control>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Form.Label>Nombre de la Empresa</Form.Label>
                        <Form.Control value={this.laboralPostu.nombreEmpresa} />
                      </Col>
                      <Col>
                        <Form.Label>Direccion de la Empresa</Form.Label>
                        <Form.Control value={this.laboralPostu.direccion} />
                      </Col>
                    </Row>
                  </Form.Group>
                </Form>
              </div>
            </Form>
          </Container>

          {/*PREGUNTAS POSTULANTE*/}
          <Container>
            <Form>
              <h2>Respuestas Ingresadas:</h2>
              <Table>
                <tbody>
                  {/**En esta parte hago un if que controla si el array de preguntas no tiene nada cargado aun
                   * muestra el mensaje que no hay preguntas, sino hace un map con la lista de preguntas y llama al
                   * tableRow que yo hice mandandole los parametros del map.
                   */}
                  {this.preguntasPostu.length == 0 ? (
                    <tr>No hay respuestas</tr>
                  ) : (
                    map(this.preguntasPostu, (preg, index) => (
                      <TableRowPregPDF pregunta={preg} key={index} />
                    ))
                  )}
                </tbody>
              </Table>
            </Form>
          </Container>
        </div>

        {/**DATOS DE LA MADRE */}
        <h1>DATOS MADRE</h1>
        <Container>
          <h2>Datos Personales</h2>
          <Form.Group>
            <Row>
              <Col>
                <Form.Label>Primer Nombre</Form.Label>
                <Form.Control value={this.dataMadre.primerNombre} />
              </Col>
              <Col>
                <Form.Label>Segundo Nombre</Form.Label>
                <Form.Control value={this.dataMadre.segundoNombre} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Primer Apellido</Form.Label>
                <Form.Control value={this.dataMadre.primerApellido} />
              </Col>
              <Col>
                <Form.Label>Segundo Apellido</Form.Label>
                <Form.Control value={this.dataMadre.segundoApellido} />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group>
            <Row>
              <Col>
                <Form.Label>Telefono/Celular</Form.Label>
                <Form.Control value={this.dataMadre.telefono_celular} />
              </Col>
              <Col>
                <Form.Label>Cedula de identidad</Form.Label>
                <Form.Control value={this.dataMadre.cedula} />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group>
            <Row>
              <Col>
                <Form.Label>Apodo</Form.Label>
                <Form.Control value={this.dataMadre.apodo} />
              </Col>
              <Col>
                <Form.Label>Fecha de Nacimiento</Form.Label>
                <Form.Control value={this.dataMadre.fechaNacimiento} />
              </Col>
              <Col>
                <Form.Label>Sexo</Form.Label>
                <Form.Control value={this.dataMadre.sexo}></Form.Control>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group>
            <Row>
              <Col>
                <Col>
                  <Form.Label>Estado Civil</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    value={this.dataMadre.estadocivil_id}
                  ></Form.Control>
                </Col>
              </Col>
              <Col>
                <Form.Label>Credencial Civica Serie</Form.Label>
                <Form.Control value={this.dataMadre.credencialSerie} />
              </Col>
              <Col>
                <Form.Label>Credencial Civica Numero</Form.Label>
                <Form.Control value={this.dataMadre.credencialNumero} />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group>
            <Row>
              <Col>
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control value={this.dataMadre.correoElectronico} />
              </Col>
            </Row>
          </Form.Group>
        </Container>

        {/*SECCION DE DOMICILIO DE LA PERSONA*/}

        <div>
          <Container>
            <h2>Domicilio</h2>

            <Form.Group>
              <Row>
                <Col>
                  <Form.Label>Pais de Nacimiento</Form.Label>
                  <Form.Control
                    value={localStorage.getItem("paisMadre")}
                  ></Form.Control>
                </Col>
                <Col>
                  <Form.Label>Domicilio Actual</Form.Label>
                  <Form.Control value={this.dataMadre.domicilioActual} />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Label>Departamento de Domicilio</Form.Label>
                  <Form.Control
                    value={localStorage.getItem("depaMadre")}
                  ></Form.Control>
                </Col>
                <Col>
                  <Form.Label>Ciudad/Barrio</Form.Label>
                  <Form.Control
                    value={localStorage.getItem("barrioMadre")}
                  ></Form.Control>
                </Col>
                <Row></Row>
              </Row>

              <Row>
                <Col>
                  <Form.Label>Seccional Policial</Form.Label>
                  <Form.Control value={this.dataMadre.seccionalPolicial} />
                </Col>
              </Row>

              <Row>
                <Form.Label>Domicilios Anteriores</Form.Label>
                <Form.Control value={this.dataMadre.domicilioAnterior} />
              </Row>

              <h3>Complete si es nacido en el Extranjero: </h3>
              <Row>
                <Col>
                  <Form.Label>Departamento/Estado</Form.Label>
                  <Form.Control
                    value={this.dataMadre.nombre_departamento_estado}
                  />
                </Col>
                <Col>
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Control value={this.dataMadre.nombre_ciudad} />
                </Col>
              </Row>
            </Form.Group>
          </Container>
          {/*LABORAL Madre*/}
          <Container>
            <Form>
              <div className="form-datos-personales">
                <h2>Laboral/Ocupacion Actual</h2>
                <Form>
                  <Form.Group>
                    <Row>
                      <Col>
                        <Form.Label>Cargo o Funcion</Form.Label>
                        <Form.Control value={this.laboralMadre.cargo_funcion} />
                      </Col>
                      <Col>
                        <Form.Label>Ente</Form.Label>
                        <Form.Control
                          value={this.laboralMadre.ente}
                        ></Form.Control>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Form.Label>Nombre de la Empresa</Form.Label>
                        <Form.Control value={this.laboralMadre.nombreEmpresa} />
                      </Col>
                      <Col>
                        <Form.Label>Direccion de la Empresa</Form.Label>
                        <Form.Control value={this.laboralMadre.direccion} />
                      </Col>
                    </Row>
                  </Form.Group>
                </Form>
              </div>
            </Form>
          </Container>

          <Container>
            <Form>
              <h2>Respuestas Ingresadas:</h2>
              <Table>
                <tbody>
                  {(this.preguntasMadre.length == 0) |
                  (this.preguntasMadre == undefined) ? (
                    <tr>No hay respuestas</tr>
                  ) : (
                    map(this.preguntasMadre, (preg, index) => (
                      <TableRowPregPDF pregunta={preg} key={index} />
                    ))
                  )}
                </tbody>
              </Table>
            </Form>
          </Container>
        </div>

        {/**DATOS DEL PADRE */}
        <h1>DATOS PADRE</h1>
        <Container>
          <h2>Datos Personales</h2>
          <Form.Group>
            <Row>
              <Col>
                <Form.Label>Primer Nombre</Form.Label>
                <Form.Control value={this.dataPadre.primerNombre} />
              </Col>
              <Col>
                <Form.Label>Segundo Nombre</Form.Label>
                <Form.Control value={this.dataPadre.segundoNombre} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Primer Apellido</Form.Label>
                <Form.Control value={this.dataPadre.primerApellido} />
              </Col>
              <Col>
                <Form.Label>Segundo Apellido</Form.Label>
                <Form.Control value={this.dataPadre.segundoApellido} />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group>
            <Row>
              <Col>
                <Form.Label>Telefono/Celular</Form.Label>
                <Form.Control value={this.dataPadre.telefono_celular} />
              </Col>
              <Col>
                <Form.Label>Cedula de identidad</Form.Label>
                <Form.Control value={this.dataPadre.cedula} />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group>
            <Row>
              <Col>
                <Form.Label>Apodo</Form.Label>
                <Form.Control value={this.dataPadre.apodo} />
              </Col>
              <Col>
                <Form.Label>Fecha de Nacimiento</Form.Label>
                <Form.Control value={this.dataPadre.fechaNacimiento} />
              </Col>
              <Col>
                <Form.Label>Sexo</Form.Label>
                <Form.Control value={this.dataPadre.sexo}></Form.Control>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group>
            <Row>
              <Col>
                <Col>
                  <Form.Label>Estado Civil</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    value={this.dataPadre.estadocivil_id}
                  ></Form.Control>
                </Col>
              </Col>
              <Col>
                <Form.Label>Credencial Civica Serie</Form.Label>
                <Form.Control value={this.dataPadre.credencialSerie} />
              </Col>
              <Col>
                <Form.Label>Credencial Civica Numero</Form.Label>
                <Form.Control value={this.dataPadre.credencialNumero} />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group>
            <Row>
              <Col>
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control value={this.dataPadre.correoElectronico} />
              </Col>
            </Row>
          </Form.Group>
        </Container>

        {/*SECCION DE DOMICILIO DE LA PERSONA*/}

        <div>
          <Container>
            <h2>Domicilio</h2>

            <Form.Group>
              <Row>
                <Col>
                  <Form.Label>Pais de Nacimiento</Form.Label>
                  <Form.Control
                    value={localStorage.getItem("paisPadre")}
                  ></Form.Control>
                </Col>
                <Col>
                  <Form.Label>Domicilio Actual</Form.Label>
                  <Form.Control value={this.dataPadre.domicilioActual} />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Label>Departamento de Domicilio</Form.Label>
                  <Form.Control
                    value={localStorage.getItem("depaPadre")}
                  ></Form.Control>
                </Col>
                <Col>
                  <Form.Label>Ciudad/Barrio</Form.Label>
                  <Form.Control
                    value={localStorage.getItem("barrioPadre")}
                  ></Form.Control>
                </Col>
                <Row></Row>
              </Row>

              <Row>
                <Col>
                  <Form.Label>Seccional Policial</Form.Label>
                  <Form.Control value={this.dataPadre.seccionalPolicial} />
                </Col>
              </Row>

              <Row>
                <Form.Label>Domicilios Anteriores</Form.Label>
                <Form.Control value={this.dataPadre.domicilioAnterior} />
              </Row>

              <h3>Complete si es nacido en el Extranjero: </h3>
              <Row>
                <Col>
                  <Form.Label>Departamento/Estado</Form.Label>
                  <Form.Control
                    value={this.dataPadre.nombre_departamento_estado}
                  />
                </Col>
                <Col>
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Control value={this.dataPadre.nombre_ciudad} />
                </Col>
              </Row>
            </Form.Group>
          </Container>
          {/*LABORAL PADRE*/}
          <Container>
            <Form>
              <div className="form-datos-personales">
                <h2>Laboral/Ocupacion Actual</h2>
                <Form>
                  <Form.Group>
                    <Row>
                      <Col>
                        <Form.Label>Cargo o Funcion</Form.Label>
                        <Form.Control value={this.laboralPadre.cargo_funcion} />
                      </Col>
                      <Col>
                        <Form.Label>Ente</Form.Label>
                        <Form.Control
                          value={this.laboralPadre.ente}
                        ></Form.Control>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Form.Label>Nombre de la Empresa</Form.Label>
                        <Form.Control value={this.laboralPadre.nombreEmpresa} />
                      </Col>
                      <Col>
                        <Form.Label>Direccion de la Empresa</Form.Label>
                        <Form.Control value={this.laboralPadre.direccion} />
                      </Col>
                    </Row>
                  </Form.Group>
                </Form>
              </div>
            </Form>
          </Container>

          <Container>
            <Form>
              <h2>Respuestas Ingresadas:</h2>
              <Table>
                <tbody>
                  {this.preguntasPadre.length == 0 ? (
                    <tr>No hay respuestas</tr>
                  ) : (
                    map(this.preguntasPadre, (preg, index) => (
                      <TableRowPregPDF pregunta={preg} key={index} />
                    ))
                  )}
                </tbody>
              </Table>
            </Form>
          </Container>
        </div>

        {/**DATOS DE PAREJA */}
        <h1>DATOS PAREJA</h1>
        <Container>
          <h2>Datos Personales</h2>
          <Form.Group>
            <Row>
              <Col>
                <Form.Label>Primer Nombre</Form.Label>
                <Form.Control value={this.dataPareja.primerNombre} />
              </Col>
              <Col>
                <Form.Label>Segundo Nombre</Form.Label>
                <Form.Control value={this.dataPareja.segundoNombre} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Primer Apellido</Form.Label>
                <Form.Control value={this.dataPareja.primerApellido} />
              </Col>
              <Col>
                <Form.Label>Segundo Apellido</Form.Label>
                <Form.Control value={this.dataPareja.segundoApellido} />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group>
            <Row>
              <Col>
                <Form.Label>Telefono/Celular</Form.Label>
                <Form.Control value={this.dataPareja.telefono_celular} />
              </Col>
              <Col>
                <Form.Label>Cedula de identidad</Form.Label>
                <Form.Control value={this.dataPareja.cedula} />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group>
            <Row>
              <Col>
                <Form.Label>Apodo</Form.Label>
                <Form.Control value={this.dataPareja.apodo} />
              </Col>
              <Col>
                <Form.Label>Fecha de Nacimiento</Form.Label>
                <Form.Control value={this.dataPareja.fechaNacimiento} />
              </Col>
              <Col>
                <Form.Label>Sexo</Form.Label>
                <Form.Control value={this.dataPareja.sexo}></Form.Control>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group>
            <Row>
              <Col>
                <Col>
                  <Form.Label>Estado Civil</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    value={this.dataPareja.estadocivil_id}
                  ></Form.Control>
                </Col>
              </Col>
              <Col>
                <Form.Label>Credencial Civica Serie</Form.Label>
                <Form.Control value={this.dataPareja.credencialSerie} />
              </Col>
              <Col>
                <Form.Label>Credencial Civica Numero</Form.Label>
                <Form.Control value={this.dataPareja.credencialNumero} />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group>
            <Row>
              <Col>
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control value={this.dataPareja.correoElectronico} />
              </Col>
            </Row>
          </Form.Group>
        </Container>

        {/*SECCION DE DOMICILIO DE LA PERSONA*/}

        <div>
          <Container>
            <h2>Domicilio</h2>

            <Form.Group>
              <Row>
                <Col>
                  <Form.Label>Pais de Nacimiento</Form.Label>
                  <Form.Control
                    value={localStorage.getItem("paisPareja")}
                  ></Form.Control>
                </Col>
                <Col>
                  <Form.Label>Domicilio Actual</Form.Label>
                  <Form.Control value={this.dataPareja.domicilioActual} />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Label>Departamento de Domicilio</Form.Label>
                  <Form.Control
                    value={localStorage.getItem("depaPareja")}
                  ></Form.Control>
                </Col>
                <Col>
                  <Form.Label>Ciudad/Barrio</Form.Label>
                  <Form.Control
                    value={localStorage.getItem("barrioPareja")}
                  ></Form.Control>
                </Col>
                <Row></Row>
              </Row>

              <Row>
                <Col>
                  <Form.Label>Seccional Policial</Form.Label>
                  <Form.Control value={this.dataPareja.seccionalPolicial} />
                </Col>
              </Row>

              <Row>
                <Form.Label>Domicilios Anteriores</Form.Label>
                <Form.Control value={this.dataPareja.domicilioAnterior} />
              </Row>

              <h3>Complete si es nacido en el Extranjero: </h3>
              <Row>
                <Col>
                  <Form.Label>Departamento/Estado</Form.Label>
                  <Form.Control
                    value={this.dataPareja.nombre_departamento_estado}
                  />
                </Col>
                <Col>
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Control value={this.dataPareja.nombre_ciudad} />
                </Col>
              </Row>
            </Form.Group>
          </Container>
          {/*LABORAL PADRE*/}
          <Container>
            <Form>
              <div className="form-datos-personales">
                <h2>Laboral/Ocupacion Actual</h2>
                <Form>
                  <Form.Group>
                    <Row>
                      <Col>
                        <Form.Label>Cargo o Funcion</Form.Label>
                        <Form.Control
                          value={this.laboralPareja.cargo_funcion}
                        />
                      </Col>
                      <Col>
                        <Form.Label>Ente</Form.Label>
                        <Form.Control
                          value={this.laboralPareja.ente}
                        ></Form.Control>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Form.Label>Nombre de la Empresa</Form.Label>
                        <Form.Control
                          value={this.laboralPareja.nombreEmpresa}
                        />
                      </Col>
                      <Col>
                        <Form.Label>Direccion de la Empresa</Form.Label>
                        <Form.Control value={this.laboralPareja.direccion} />
                      </Col>
                    </Row>
                  </Form.Group>
                </Form>
              </div>
            </Form>
          </Container>

          <Container>
            <Form>
              <h2>Respuestas Ingresadas:</h2>
              <Table>
                <tbody>
                  {this.preguntasPareja.length == 0 ? (
                    <tr>No hay respuestas</tr>
                  ) : (
                    map(this.preguntasPareja, (preg, index) => (
                      <TableRowPregPDF pregunta={preg} key={index} />
                    ))
                  )}
                </tbody>
              </Table>
            </Form>
          </Container>
        </div>

        <div>
          <Container>
            <Form>
              <h2>Otros Familiares:</h2>
              <div>
                {this.parientes.length == 0 ? (
                  <tr>No hay Familiares ingresados</tr>
                ) : (
                  map(this.parientes, (fliar, index) => (
                    <TableRowFamiliares pariente={fliar} key={index} />
                  ))
                )}
              </div>
            </Form>
          </Container>
        </div>
        <Container>
          <div style={{ padding: "80px", textAlign: "center" }}>
            <h3>Firma ....................................</h3>
            <p style={{ marginLeft: "100px" }}>
              {this.dataPostu.primerNombre +
                " " +
                this.dataPostu.primerApellido}
            </p>
          </div>
        </Container>
      </div>
    );
  }
}

class Example extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => <a href="#">DESCARGAR PDF</a>}
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}

export default Example;
