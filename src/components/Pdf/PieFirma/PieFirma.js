import React from "react";
import "./../pdf.scss";
import "../../../scss/index.scss";

export default function PieFirma() {
  return (
    <div class="div-margen">
      <div>
        <p class="p-margen">
          <strong>CERTIFICO</strong>, que las declaraciones que ha brindado
          revisten al carácter de DECLARACIÓN JURADA, y que las mismas son
          verdaderas, completas y correctas, según mi mejor saber y entender, y
          que las he hecho de buena fé, y si se comprobara por parte de la
          Autoridad Naval , falsedad y omisión intencional, podré ser
          automáticamente eliminado como Postulante de ingreso a la Armada
          Nacional, aceptando la aplicación del ARTÍCULO 239 DEL CODIGO PENAL,
          FALSIFICACIÓN IDEOLÓGICA POR UN PARTICULAR;"El que, con motivo del
          otorgamiento o formalización de un documento Público, ante un
          funcionario Público, prestare declaración falsa sobre su identidad, o
          estado, o cualquier otra circunstancia del hecho, será castigado con
          tres a veinticuatro meses de Prisión"
        </p>
      </div>
      <br />
      <h6>
        FIRMA:____________________________________ACLARACIÓN__________________________________FECHA:_____/_____/______
      </h6>
      <h6>
        <p>
          <strong>Postulante.</strong>
        </p>
      </h6>

      <div>
        <h6
          style={{ marginLeft: "0px", marginBottom: "0px", marginTop: "0px" }}
        >
          --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </h6>
        <h6 style={{ marginTop: "0px" }}>
          <strong>DE USO EXCLUSIVO DE LA ARMADA:</strong>
        </h6>
        <br />
      </div>
      <div>
        <h6>
          FIRMA:____________________________________ACLARACIÓN__________________________________MATRÍCULA____________
        </h6>
        <h6>
          <p>
            <strong>
              De quien controló primariamente el formulario completo.
            </strong>
          </p>
        </h6>
      </div>
    </div>
  );
}

//ESTO HAY QUE AGREGARLO EN LA FIRMA
/* {this.dataPostu.primerNombre + " " + this.dataPostu.primerApellido}*/
