import React from "react";
import ReactToPrint from "react-to-print";

import { map } from "lodash";
import TableRowEducacion from "../Forms/Componentes/TableRowEducacion/index";
import TableRowPregPDF from "../Forms/Componentes/TableRowPregPDF/index";
import {
  listaOtrosEstudios,
  getEstudiosLocal,
  listarRespuestas,
  getRespuestasLocal,
} from "../../api/tablas";

import {
  Row,
  Col,
  Form,
  Jumbotron,
  Button,
  Spinner,
  Container,
  Table,
} from "react-bootstrap";
import {
  getDataPostu,
  getIdPostu,
  getEstudiosBasicos,
  getLabPostu,
  getLabMadre,
  getLabPadre,
  getLabPareja,
} from "../../api/auth";

class ComponentToPrint extends React.Component {
  constructor(props) {
    super(props);
    this.dataPostu = getDataPostu();
    this.idPostu = getIdPostu();
    this.listaEstudios = listaOtrosEstudios(getIdPostu());
    this.estudios = getEstudiosLocal();
    this.estudiosBasicos = getEstudiosBasicos();
    this.laboralPostu = getLabPostu();
    this.listaPreguntasPostu = listarRespuestas(getIdPostu(), 1);
    this.preguntasPostu = getRespuestasLocal(getIdPostu(), 1);
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
                  <Form.Control value={this.dataPostu.pais_id}></Form.Control>
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
                    value={this.dataPostu.departamento_id}
                  ></Form.Control>
                </Col>
                <Col>
                  <Form.Label>Ciudad/Barrio</Form.Label>
                  <Form.Control
                    value={this.dataPostu.ciudadBarrio_id}
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
                    {this.estudios.length == 0 ? (
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
      </div>
    );
  }
}

class Example extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => <a href="#">Print this out!</a>}
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}

export default Example;
