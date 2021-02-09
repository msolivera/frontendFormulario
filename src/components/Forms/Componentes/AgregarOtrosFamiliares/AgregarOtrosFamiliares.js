import React, { useState } from "react";
import { Form, Button, Table } from "react-bootstrap";
import "../../FormPostulante/FormPostulante.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { values, size } from "lodash";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { crearOtroFliar } from "../../../../api/auth";
import DatePicker from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";

export default function AgregarOtrosFamiliares(props) {
  //state para hacer funcionar el Spinner
  const [guardadoLoading, setGuardadoLoading] = useState(false);
  //state que guarda la info del formulario
  const [formData, setFormData] = useState(initialFormValue());
  const { setShowModal } = props;
  const onSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
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
      crearOtroFliar(formData)
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
      <h2>Agregar nuevo Familiar</h2>

      <Form onSubmit={onSubmit}>
        <Table>
          <thead>
            <tr>
              <th>Parentezco</th>
              <th>Primer nombre</th>
              <th>Primer Apellido</th>
              <th>Fecha de Nacimiento</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <Form.Control
                  as="select"
                  defaultValue="Seleccione"
                  value={formData.tipo_persona_id}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      tipo_persona_id: e.target.value,
                    })
                  }
                >
                  <option value="0"> Seleccione</option>
                  <option value="1">Abuelo</option>
                  <option value="2">Hermano</option>
                </Form.Control>
              </th>

              <th>
                <Form.Control
                  type="text"
                  value={formData.primerNombre}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      primerNombre: e.target.value,
                    })
                  }
                />
              </th>

              <th>
                <Form.Control
                  type="text"
                  value={formData.primerApellido}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      primerApellido: e.target.value,
                    })
                  }
                />
              </th>
              <th>
                <DatePicker
                  placeholder="Fecha de Nacimiento"
                  locale={es}
                  selected={new Date()}
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
    primerNombre: "",
    primerApellido: "",
    fechaNacimiento: "1994-03-04",
    tipo_persona_id: "",
  };
}
