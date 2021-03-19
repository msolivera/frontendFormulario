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
import "../../index.scss";
import "../../pdf.scss";

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
        <div>
          <div class="container">
            <td style={{ width: "88%" }} align={"left"}>
              <div>
                <table class="table">
                  <tr>
                    <td>
                      <h5>SOLICITUD DE INGRESOS</h5>
                    </td>
                    <td>
                      <table>
                        <tr>
                          <td>
                              <img src="logoArmada.jpg" style={{ width: "100px", height: "100px", marginLeft:"40%", marginRight:"50%"}} ></img>
                          </td>
                        </tr>
                        <tr>
                          <td>
                              <h5>COMANDO GENERAL DE LA ARMADA</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                              <h2 style={{ textAlign: "center" }}>Reservado</h2>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td>
                      <h5>FORMULARIO 04</h5>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
            <tr align={"right"} style={{ width: "25%", textAlign: "left" }}>
              <div>
                <table class="table" >
                  <tr>
                    <td>
                      <h5>UNIDAD ORIGINADORA: ________________</h5>
                    </td>
                    <td>
                      <h5>FECHA: ___/___/____</h5>
                    </td>
                    <td>
                      <h5>SOL. NRO: ________________</h5>
                    </td>
                  </tr>
                </table>
              </div>
            </tr>
          </div>
        </div>
        <h2 style={{ textAlign: "center" }}>Informacion del Postulante</h2>

        <Container>
          <h3 style={{ textAlign: "left" }}>Datos Personales:</h3>
          <Form.Group>
            <Row>
              <Col style={{  display: (this.dataPostu.primerNombre=='')?' block;':' none;' }}>
                <Form.Label>Primer Nombre</Form.Label>
                <Form.Control value={this.dataPostu.primerNombre} />
              </Col>
              <Col>
                <Form.Label>Segundo Nombre</Form.Label>
                <Form.Control value={this.dataPostu.segundoNombre} />
              </Col>

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
                <Form.Label>Estado Civil</Form.Label>

                <Form.Control
                  value={localStorage.getItem("estCivil_postu")}
                ></Form.Control>
              </Col>

              <Col>
                <Form.Label>Credencial Civica Serie</Form.Label>
                <Form.Control value={this.dataPostu.credencialSerie} />
              </Col>
              <Col>
                <Form.Label>Credencial Civica Numero</Form.Label>
                <Form.Control value={this.dataPostu.credencialNumero} />
              </Col>
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
            <h3 style={{ textAlign: "left" }}>Domicilio:</h3>

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
              </Row>

              <Row>
                <Col>
                  <Form.Label>Seccional Policial</Form.Label>
                  <Form.Control value={this.dataPostu.seccionalPolicial} />
                </Col>
                <Col>
                  <Form.Label>Domicilios Anteriores</Form.Label>
                  <Form.Control value={this.dataPostu.domicilioAnterior} />
                </Col>
              </Row>
            </Form.Group>
          </Container>
           {/*LABORAL POSTULANTE*/}
           <Container>
            <Form>
              <div className="form-datos-personales">
                <h3 style={{ textAlign: "left" }}>Ocupacion Actual</h3>
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
          {/*estudios dela persona */}
          <Container>
            <Form>
              <div>
                <h3 style={{ textAlign: "left", pageBreakBefore:"always" }}>Educacion</h3>

                <Table>
                  <th>
                    <h4>Primaria</h4>
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
                              this.estudiosBasicos
                                .primeroPrimaria_nombreInstituto
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
                              this.estudiosBasicos
                                .segundoPrimaria_nombreInstituto
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
                              this.estudiosBasicos
                                .terceroPrimaria_nombreInstituto
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
                              this.estudiosBasicos
                                .cuartoPrimaria_nombreInstituto
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
                              this.estudiosBasicos
                                .quintoPrimaria_nombreInstituto
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
                  </th>
                  <th>
                    <h4>Secundaria y Bachillerato</h4>
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
                            value={
                              this.estudiosBasicos.sextoBach_nombreInstituto
                            }
                          />
                        </td>
                      </tr>
                    </tbody>
                  </th>
                </Table>

                <h3 style={{ textAlign: "left" }}>
                  Otros Estudios Realizados
                </h3>

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
         

          {/*PREGUNTAS POSTULANTE*/}
          <Container>
            <Form>
              <h3 style={{ textAlign: "left" }}>Respuestas Ingresadas:</h3>
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
        <h2 style={{ textAlign: "center" }}>Informacion de la Madre</h2>
        <Container>
          <h3 style={{ textAlign: "left" }}>Datos Personales</h3>
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
            <Col style={{  display: ((localStorage.getItem("estCivil_madre")!=null) ?'block':'none') }}>
                <Form.Label>Estado Civil</Form.Label>

                <Form.Control
                  value={localStorage.getItem("estCivil_madre")}
                ></Form.Control>
              </Col>

              <Col>
                <Form.Label>Credencial Civica Serie</Form.Label>
                <Form.Control value={this.dataMadre.credencialSerie} />
              </Col>
              <Col>
                <Form.Label>Credencial Civica Numero</Form.Label>
                <Form.Control value={this.dataMadre.credencialNumero} />
              </Col>

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
            <h3 style={{ textAlign: "left" }}>Domicilio</h3>

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
              </Row>

              <Row>
                <Col>
                  <Form.Label>Seccional Policial</Form.Label>
                  <Form.Control value={this.dataMadre.seccionalPolicial} />
                </Col>
                <Col>
                  <Form.Label>Domicilios Anteriores</Form.Label>
                  <Form.Control value={this.dataMadre.domicilioAnterior} />
                </Col>
              </Row>
            </Form.Group>
          </Container>
          {/*LABORAL Madre*/}
          <Container>
            <Form>
              <div className="form-datos-personales">
                <h3 style={{ textAlign: "left" }}>Ocupacion Actual</h3>
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
              <h3 style={{ textAlign: "left" }}>Respuestas Ingresadas:</h3>
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
        <h2 style={{ textAlign: "center" }}>Informacion del Padre</h2>
        <Container>
          <h3 style={{ textAlign: "left" }}>Datos Personales</h3>
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
                <Form.Label>Estado Civil</Form.Label>

                <Form.Control
                  value={localStorage.getItem("estCivil_padre")}
                ></Form.Control>
              </Col>

              <Col>
                <Form.Label>Credencial Civica Serie</Form.Label>
                <Form.Control value={this.dataPadre.credencialSerie} />
              </Col>
              <Col>
                <Form.Label>Credencial Civica Numero</Form.Label>
                <Form.Control value={this.dataPadre.credencialNumero} />
              </Col>

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
            <h3 style={{ textAlign: "left" }}>Domicilio</h3>

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
              </Row>

              <Row>
                <Col>
                  <Form.Label>Seccional Policial</Form.Label>
                  <Form.Control value={this.dataPadre.seccionalPolicial} />
                </Col>
                <Col>
                  <Form.Label>Domicilios Anteriores</Form.Label>
                  <Form.Control value={this.dataPadre.domicilioAnterior} />
                </Col>
              </Row>
            </Form.Group>
          </Container>
          {/*LABORAL PADRE*/}
          <Container>
            <Form>
              <div className="form-datos-personales">
                <h3 style={{ textAlign: "left" }}>Ocupacion Actual</h3>
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
              <h3 style={{ textAlign: "left", pageBreakBefore:"always"}}>Respuestas Ingresadas:</h3>
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
        <h2 style={{ textAlign: "center" }}>
          Informacion de Conyuge, Concubino/a , Novio/a
        </h2>
        <Container>
          <h3 style={{ textAlign: "left" }}>Datos Personales</h3>
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
                <Form.Label>Estado Civil</Form.Label>

                <Form.Control
                  value={localStorage.getItem("estCivil_pareja")}
                ></Form.Control>
              </Col>
              <Col>
                <Form.Label>Credencial Civica Serie</Form.Label>
                <Form.Control value={this.dataPareja.credencialSerie} />
              </Col>
              <Col>
                <Form.Label>Credencial Civica Numero</Form.Label>
                <Form.Control value={this.dataPareja.credencialNumero} />
              </Col>

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
            <h3 style={{ textAlign: "left" }}>Domicilio</h3>

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
              </Row>

              <Row>
                <Col>
                  <Form.Label>Seccional Policial</Form.Label>
                  <Form.Control value={this.dataPareja.seccionalPolicial} />
                </Col>
                <Col>
                  <Form.Label>Domicilios Anteriores</Form.Label>
                  <Form.Control value={this.dataPareja.domicilioAnterior} />
                </Col>
              </Row>
            </Form.Group>
          </Container>
          {/*LABORAL PADRE*/}
          <Container>
            <Form>
              <div className="form-datos-personales">
                <h3 style={{ textAlign: "left" }}>Ocupacion Actual</h3>
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
              <h3 style={{ textAlign: "left" }}>Respuestas Ingresadas:</h3>
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
              <h3 style={{ textAlign: "left", pageBreakBefore:"always" }}>
                Otros integrantes del ambito habitacional:
              </h3>
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
        <div >
          <Container>
            <p>
              CERTIFICO, que las declaraciones que ha brindado revisten al
              carácter de DECLARACIÓN JURADA, y que las mismas son verdaderas,
              completas y correctas, según mi mejor saber y entender, y que las
              he hecho de buena fé, y si se comprobara por parte de la Autoridad
              Naval , falsedad y omisión intencional, podré ser automáticamente
              eliminado como Posstulante a ingreso a la Armada Nacional,
              aceptando la aplicación del ARTÍCULO 239 DEL CODIGO PENAL,
              FALSIFICACIÓN IDEOLÓGICA POR UN PARTICULAR;"El que, con motivo del
              otorgamiento o formalización de un documento Público, ante un
              funcionario Público, prestare declaración falsa sobre su
              identidad, o estado, o cualquier otra circunstancia del hecho,
              será castigado con tres a veinticuatro meses de Prisión"
            </p>
            <td>
              <h5>FECHA:</h5>
            </td>
            <td>
              <h5>_____/_____/_________</h5>
            </td>

            <div style={{ padding: "10px", textAlign: "right" }}>
              <h5>FIRMA ....................................</h5>
              <p style={{ marginLeft: "100px" }}>
                {this.dataPostu.primerNombre +
                  " " +
                  this.dataPostu.primerApellido}
              </p>
            </div>
          </Container>
        </div>
        <Container>
          <div>
            <td>
              <h5>
                FIRMA:______________________________ACLARACIÓN____________________________MATRÍCULA_________
              </h5>
            </td>
            <p>
              <strong>
                De quien controló primariamente el formulario completo.
              </strong>
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
          trigger={() => <a href="#" class="btn btn-success descargar">DESCARGAR PDF</a>}
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}

export default Example;
