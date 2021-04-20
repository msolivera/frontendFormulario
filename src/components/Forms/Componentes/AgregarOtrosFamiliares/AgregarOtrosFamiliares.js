import React, { useState, useEffect } from "react";
import { Form, Button, Table } from "react-bootstrap";
import "../../FormPostulante/FormPostulante.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { values, size } from "lodash";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  crearOtroFliar,
  setIdsApi,
  getIdPostu,
  getIdOtro,
  crearParentesco,
} from "../../../../api/auth";
import { getTipoPersonaApi } from "../../../../api/combos";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import range from "lodash/range";

export default function AgregarOtrosFamiliares(props) {
  //state para hacer funcionar el Spinner
  const [guardadoLoading, setGuardadoLoading] = useState(false);
  //state que guarda la info del formulario
  const [formData, setFormData] = useState(initialFormValue());
  const { setShowModal, contador, setcontador } = props;

  useEffect(() => {
    getTipoPersonaApi()
      .then((response) => {
        let lista = response.data;
        let opciones = lista.map((tipopersona) => {
          return { id: `${tipopersona.id}`, nombre: `${tipopersona.nombre}` };
        });
        cargarCombos(opciones, "select_form_personas");
        return { opciones: opciones };
      })
      .catch(() => {});
  }, []);

  /*DATE PICKER PERSONALIZADO**********************************************/
  const [startDate, setStartDate] = useState(null);

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

  const onSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
    //lo siguiente se encarga de recorrer el form y ver si tiene el campo relleno o no
    //si el valid count tiene tiene el mismo numero que el total de keys del formdata entonces significa que tiene todos los campos rellenados

    setGuardadoLoading(true);
    crearOtroFliar(formData)
      .then((response) => {
        if (response.code) {
          toast.warning(response.message);
        } else {
          toast.success("Registro correcto");
          setcontador(contador + 1);
          setFormData(initialFormValue());
          setIdsApi(0, response.data);
        }
      })
      .catch(() => {
        toast.error("Error del servidor");
      })
      .finally(() => {
        setGuardadoLoading(false);
        crearParentesco(jsonParientes());
      });
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
              <th>CI (Sin puntos ni guión)</th>
              <th>Fecha de Nacimiento</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <Form.Control
                  id="select_form_personas"
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
                  <option value=""> Seleccione</option>
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
                <Form.Control
                  type="text"
                  value={formData.cedula}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      cedula: e.target.value,
                    })
                  }
                />
              </th>
              <th>
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
                        onChange={({ target: { value } }) => changeYear(value)}
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
                    })
                  }
                />
              </th>
            </tr>
          </tbody>
        </Table>
        <Button variant="agregar" type="submit">
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
    fechaNacimiento: "",
    cedula: "",
    tipo_persona_id: "",
  };
}

function jsonParientes() {
  return {
    postulante_id: getIdPostu(),
    familiar_id: getIdOtro(),
  };
}

function cargarCombos(listaOpciones, idComponente) {
  var options = listaOpciones;
  var listaACargar = document.getElementById(idComponente);

  for (var i in options) {
    //saco las opciones de los familiares madre padre y pareja y postulante
    if (
      (options[i].id != 2) &
      (options[i].id != 3) &
      (options[i].id != 10) &
      (options[i].id != 14) &
      (options[i].id != 1)
    ) {
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
