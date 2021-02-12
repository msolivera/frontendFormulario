import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button, Spinner, Jumbotron } from "react-bootstrap";
import { values, size } from "lodash";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../FormPostulante/FormPostulante.scss";

import { crearOcupacion, getIdPostu } from "../../../../api/auth";

export default function Laboral() {
  //state que guarda el id del postulante en cero pero lo uso para cambiarlo una vez que di submit en datos personales
  const [idPostulante, setIdPostulante] = useState(0);
  //state para hacer funcionar el Spinner
  const [guardadoLoading, setGuardadoLoading] = useState(false);
  //state que guarda la info del formulario
  const [formData, setFormData] = useState(initialFormValue());
  //funcion que controla cuando se va a guardara el fomrulario

  useEffect(() => {
    getIdPostu();
    setIdPostulante(getIdPostu());

    //console.log(idPostulante);
    setFormData({
      ...formData,
      persona_id: getIdPostu(),
    });

    return getIdPostu();
  }, []);
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
      setGuardadoLoading(true);
      crearOcupacion(formData)
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
  };

  /////////////////////////////////EMPIEZA FORMULARIO
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Jumbotron>
          <div className="form-datos-personales">
            <h2>Laboral/Ocupacion Actual</h2>
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
                        })
                      }
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
                        })
                      }
                    >
                      <option value="0">Seleccione</option>
                      <option value="Publico">Publico</option>
                      <option value="Privado">Privado</option>
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
                        })
                      }
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
                        })
                      }
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Form>
          </div>
        </Jumbotron>
        <Button variant="primary" type="submit">
          {!guardadoLoading ? "Siguiente" : <Spinner animation="border" />}
        </Button>
      </Form>
    </div>
  );
}

function initialFormValue() {
  return {
    cargo_funcion: "",
    ente: "",
    nombreEmpresa: "",
    direccion: "",
    persona_id: "",
  };
}
