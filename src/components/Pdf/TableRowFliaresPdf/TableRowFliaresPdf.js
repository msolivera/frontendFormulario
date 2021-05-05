import React from "react";
import "./../pdf.scss";
//este componente se usa para cargar dinamicamente LOS FLIARES que traigo de la base
export default function TableRowFliaresPdf(props) {
  const { pariente } = props;

  return (
    <>
      <thead class="thead-fliares">
        <tr>
          <th style={{ width: "1200px" }}>Parentezco</th>
          <th style={{ width: "1200px" }}>Nombre</th>
          <th style={{ width: "1200px" }}>Apellido</th>
          <th style={{ width: "1200px" }}>Cedula</th>
          <th style={{ width: "1200px" }}>Fecha Nac.</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{pariente.tipoPersona}</td>
          <td>{pariente.primerNombre}</td>
          <td>{pariente.primerApellido}</td>
          <td>{pariente.cedula}</td>
          <td>{pariente.fechaNacimiento}</td>
        </tr>
      </tbody>
    </>
  );
}
