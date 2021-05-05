import {
  getDataPostu,
  getIdPostu,
  getEstudiosBasicos,
  getLabPostu,
} from "../../../api/auth";
import "./../pdf.scss";
import "../../../scss/index.scss";
import TableRowEducacion from "../../Forms/Componentes/TableRowEducacion/index";
import { listaOtrosEstudios, getEstudiosLocal } from "../../../api/tablas";
import { map } from "lodash";
import React, { useState } from "react";
import { Row, Col, Form, Container, Table, Button } from "react-bootstrap";

export default function VistaPostulante() {
  const [dataPostu, setdataPostu] = useState(getDataPostu());
  const [idPostu, setidPostu] = useState(getIdPostu());
  const [listaEstudios, setlistaEstudios] = useState(
    listaOtrosEstudios(getIdPostu())
  );
  const [estudios, setestudios] = useState(getEstudiosLocal());
  const [estudiosBasicos, setestudiosBasicos] = useState(getEstudiosBasicos());
  const [laboralPostu, setlaboralPostu] = useState(getLabPostu());
  return (
    <div class="div-margen">
      <h5 style={{ textAlign: "left" }}>Datos Del postulante:</h5>
      <hr />
      <table class="table-data">
        <tr>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>CI</th>
          <th>Fecha Nac.</th>
          <th>Sexo</th>
          <th>Identidad Genero</th>
          <th>Raza</th>
        </tr>
        <tr>
          <td>{dataPostu.primerNombre + " " + dataPostu.segundoNombre}</td>
          <td>{dataPostu.primerApellido + " " + dataPostu.segundoApellido}</td>
          <td>{dataPostu.cedula}</td>
          <td>{dataPostu.fechaNacimiento}</td>
          <td>{dataPostu.sexo} </td>
          <td>{dataPostu.identidadGenero}</td>
          <td>{dataPostu.raza}</td>
        </tr>
      </table>
      <hr />
      <table class="table-data">
        <tr>
          <th>Estado Civil</th>
          <th>Credencial</th>
          <th>País Nacimiento</th>
          <th>Domicilio actual</th>
          <th>Departamento</th>
          <th>Ciudad/Barrio</th>
          <th>Telefono</th>
        </tr>
        <tr>
          <td>{localStorage.getItem("estCivil_postu")}</td>
          <td>
            {dataPostu.credencialSerie + " " + dataPostu.credencialNumero}
          </td>
          <td>{localStorage.getItem("paisPostu")} </td>
          <td>{dataPostu.domicilioActual} </td>
          <td>{localStorage.getItem("depaPostu")}</td>
          <td>{localStorage.getItem("barrioPostu")}</td>
          <td>{dataPostu.telefono_celular}</td>
        </tr>
      </table>
      <hr />
      <table class="table-data">
        <tr>
          <th>Ed. Primaria</th>
          <th>Ed. Secundaria</th>
          <th>Ed. Bachillerato</th>
          <th>Cargo/Función</th>
          <th>Empresa</th>
          <th>Dirección</th>
          <th>Ente</th>
        </tr>
        <tr>
          <td>{estudiosBasicos.primeroPrimaria_nombreInstituto}</td>
          <td>{estudiosBasicos.primeroSecu_nombreInstituto}</td>
          <td>{estudiosBasicos.cuartoBach_nombreInstituto}</td>
          <td>{laboralPostu.cargo_funcion}</td>
          <td>{laboralPostu.nombreEmpresa}</td>
          <td>{laboralPostu.direccion}</td>
          <td>{laboralPostu.ente}</td>
        </tr>
      </table>
      <hr />
      <table class="table-data">
        <tr>
          <th>Apodo</th>
          <th>Secc. Policial</th>
          <th>Email</th>
          <th>Domicilio anterior</th>
        </tr>
        <tr>
          <td>{dataPostu.apodo} </td>
          <td>{dataPostu.seccionalPolicial}</td>
          <td>{dataPostu.correoElectronico}</td>
          <td>{dataPostu.domicilioAnterior}</td>
        </tr>
      </table>
      <hr />
      <table class="table-pregunta">
        <thead>
          <tr>
            <th style={{ width: "640px" }}>
              Otros estudios: Nombre de Curso/Capacitacion
            </th>
            <th>Años Cursados</th>
          </tr>
        </thead>
        <tbody>
          {(estudios === 0) | (estudios === null) | (estudios === undefined) ? (
            <tr>No hay Estudios ingresados</tr>
          ) : (
            map(estudios, (est, index) => (
              <TableRowEducacion estudio={est} key={index} />
            ))
          )}
        </tbody>
      </table>
      <hr />
      <table class="table-pregunta">
        <tr>
          <th style={{ width: "670px" }}>Pregunta</th>
          <th style={{ width: "95px" }}>Respuesta</th>
          <th style={{ width: "400px" }}>Observaciones</th>
        </tr>
        <tr>
          <td>
            Sol. ingreso realizada a Unidades o Reparticiones de FF.AA. o
            Policiales(Fecha/Dependencia).
          </td>
          <td>{laboralPostu.respuesta1}</td>
          <td>{laboralPostu.observaciones1}</td>
        </tr>
        <tr>
          <td>
            Si ha sido detenido: Dependencia, Fecha y Causa de detenciones.
          </td>
          <td>{laboralPostu.respuesta2}</td>
          <td>{laboralPostu.observaciones2}</td>
        </tr>
        <tr>
          <td>
            Si ha consumido o consume psicofarmacos/drogas alucinogenas:
            nombre/fecha consumo.
          </td>
          <td>{laboralPostu.respuesta3}</td>
          <td>{laboralPostu.observaciones3}</td>
        </tr>
      </table>
    </div>
  );
}
