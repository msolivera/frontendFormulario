import React from "react";
import "./../pdf.scss";
import "../../../index.scss";

export default function Cabezal() {
  return (
    <div class="div-margen">
      <table class="table">
        <tr>
          <td>
            <h6>
              <strong>SOLICITUD DE INGRESOS</strong>
            </h6>
          </td>
          <td>
            <h6>
              <strong>COMANDO GENERAL DE LA ARMADA</strong>
            </h6>
          </td>
          <td>
            <h6>
              <strong>FORMULARIO 04</strong>
            </h6>
          </td>
          <td>
            <h6>
              <strong>RESERVADO</strong>
            </h6>
          </td>
        </tr>
        <tr>
          <td>
            <h6>
              <strong>UNIDAD ORIGINADORA:</strong>
            </h6>
          </td>
          <td>
            <img class="img-pdf" src="logoArmada.jpg"></img>
          </td>
          <td>
            <h6>
              <strong>FECHA:___/___/____</strong>
            </h6>
          </td>
          <td>
            <h6>
              <strong>SOL. NRO:______</strong>
            </h6>
          </td>
        </tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </table>
    </div>
  );
}
