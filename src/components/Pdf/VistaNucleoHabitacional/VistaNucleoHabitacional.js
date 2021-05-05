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
        <h5>Otros integrantes del ambito habitacional: N/A</h5>
      ) : (
        <>
          <h5>Otros integrantes del ambito habitacional:</h5>
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
