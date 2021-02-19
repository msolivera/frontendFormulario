import React from "react";
//este componente se usa para cargar dinamicamente los estudios que traigo de la base
export default function TableRowEducacion(props) {
  const { estudio } = props;

  return (
    <>
      <tr>
        <td>{estudio.anioEstudio}</td>
        <td>{estudio.nombreInstituto}</td>
      </tr>
    </>
  );
}
