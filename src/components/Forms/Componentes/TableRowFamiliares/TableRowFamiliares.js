import React from "react";
import { Table } from "react-bootstrap";
//este componente se usa para cargar dinamicamente los estudios que traigo de la base
export default function TableRowFamiliares(props) {
  const { pariente } = props;
  //console.log(pariente.cedula);
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Parentezco</th>
            <th>Primer nombre</th>
            <th>Primer Apellido</th>
            <th>Cedula</th>
            <th>Fecha Nac.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{pariente.parentesco}</td>
            <td>{pariente.primerNombre}</td>
            <td>{pariente.primerApellido}</td>
            <td>{pariente.cedula}</td>
            <td>{pariente.fechaNacimiento}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
