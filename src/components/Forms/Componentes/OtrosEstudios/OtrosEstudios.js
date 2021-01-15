import React, { useState } from "react";
import { Form, Button, Table } from "react-bootstrap";
import "../../FormPostulante/FormPostulante.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faPlus } from "@fortawesome/free-solid-svg-icons";
import { values, size } from "lodash";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { crearEstudio, obtenerOtrosEstudios } from "../../../../api/auth";

export default function OtrosEstudios(props) {
  //state para hacer funcionar el Spinner
  const [guardadoLoading, setGuardadoLoading] = useState(false);
  //state que guarda la info del formulario
  const [formData, setFormData] = useState(initialFormValue());
  const { setShowModal } = props;
  const onSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
    obtenerOtrosEstudios();
    //lo siguiente se encarga de recorrer el form y ver si tiene el campo relleno o no
    //si el valid count tiene tiene el mismo numero que el total de keys del formdata entonces significa que tiene todos los campos rellenados
    let validCount = 0;
    values(formData).some((value) => {
      value && validCount++;
      return null;
    });

    //descomentar esta linea cuando tenga solucionado la fecha
    /*if (validCount !== size(formData)) {*/
    if (validCount !== size(formData)) {
      toast.warning("Faltan campos que completar");
    } else {
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
    }
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

        <Button variant="primary" type="submit">
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
    persona_id: "1",
  };
}
