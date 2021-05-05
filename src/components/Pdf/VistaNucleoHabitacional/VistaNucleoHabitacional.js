import {
  getOtrosFamiliaresPersona,
  getfliaresLocal,
  listaOtrosFamiliaresPersona,
} from "../../../api/tablas";
import "./../pdf.scss";
import "../../../scss/index.scss";
import { map } from "lodash";
import TableRowFliaresPdf from "../TableRowFliaresPdf/index";

import React, { useState } from "react";

export default function VistaNucleoHabitacional() {
  const [parientes, setparientes] = useState(getfliaresLocal());
  console.log(parientes);
  return (
    <div class="div-margen">
      {parientes === null ? (
        <p class="p-titulo">
          Otros integrantes del núcleo familiar (quienes conviven): N/A
        </p>
      ) : (
        <>
          <p class="p-titulo">
            Otros integrantes del núcleo familiar (quienes conviven):
          </p>
          <table
            class="table-preguntas"
            style={{ marginLeft: "10px", marginBottom: "10px" }}
          >
            <div>
              {parientes === null ? (
                <tr>No hay Familiares ingresados</tr>
              ) : (
                map(parientes, (fliar, index) => (
                  <TableRowFliaresPdf pariente={fliar} key={index} />
                ))
              )}
            </div>
          </table>
        </>
      )}
    </div>
  );
}
