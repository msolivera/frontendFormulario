import React, { useState, useEffect } from "react";
import { Form, Button, Table } from "react-bootstrap";
import "../../FormPostulante/FormPostulante.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  crearEstudio,
  obtenerOtrosEstudios,
  getIdPostu,
} from "../../../../api/auth";

export default function OtrosEstudios(props) {
  //state que guarda el id del postulante en cero pero lo uso para cambiarlo una vez que di submit en datos personales
  const [idPostulante, setIdPostulante] = useState(0);
  //state para hacer funcionar el Spinner
  const [guardadoLoading, setGuardadoLoading] = useState(false);
  //state que guarda la info del formulario
  const [formData, setFormData] = useState(initialFormValue());
  const { setShowModal } = props;

  //recibo el id de postulante (del local storage y cambio mi estado para luego asignarlo al form data)
  useEffect(() => {
    getIdPostu();
    setIdPostulante(getIdPostu());
    setFormData({
      ...formData,
      persona_id: getIdPostu(),
    });

    return getIdPostu();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
    // obtenerOtrosEstudios();
    setGuardadoLoading(true);
    crearEstudio(formData)
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
    /*}*/
  };

  return (
    <div>
      <h2>Agregar nuevo Estudio</h2>

      <Form onSubmit={onSubmit}>
        <Table>
          <thead>
            <tr>
              <th>Estudio/Capacitacion</th>
              <th>Años Cursados</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <Form.Control
                  type="text"
                  placeholder="Nombre"
                  value={formData.nombreInstituto}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      nombreInstituto: e.target.value,
                    })
                  }
                />
              </th>
              <th>
                {" "}
                <Form.Control
                  type="text"
                  placeholder="Años Cursados"
                  value={formData.anioEstudio}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      anioEstudio: e.target.value,
                    })
                  }
                />
              </th>
            </tr>
          </tbody>
        </Table>

        <Button variant="info" type="submit">
          <FontAwesomeIcon icon={faSave} />
          Guardar
        </Button>
      </Form>
    </div>
  );
}

function initialFormValue() {
  return {
    anioEstudio: "",
    nombreInstituto: "",
    tipo_estudio_id: "4",
    persona_id: "",
  };
}
