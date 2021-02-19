import React from "react";
import { Table } from "react-bootstrap";
//este componente se usa para cargar dinamicamente los estudios que traigo de la base
export default function TableRowFamiliares(props) {
  const { pariente } = props;

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Primer nombre</th>
            <th>Primer Apellido</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{pariente.primerNombre}</td>
            <td>{pariente.primerApellido}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>Parentezco</th>
            <th>Fecha de Nacimiento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{pariente.parentesco}</td>
            <td>{pariente.fechaNacimiento}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
