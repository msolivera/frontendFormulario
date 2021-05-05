import { getDataPadre, getIdPadre, getLabPadre } from "../../../api/auth";
import "./../pdf.scss";
import "../../../scss/index.scss";

import React, { useState } from "react";

export default function VistaPadre() {
  const [dataPadre, setdataPadre] = useState(getDataPadre());
  const [idPadre, setidPadre] = useState(getIdPadre());
  const [laboralPadre, setlaboralPadre] = useState(getLabPadre());
  return (
    <div class="div-margen">
      {dataPadre.fallecido === "NO" ? (
        <>
          <h5 style={{ textAlign: "left" }}>Datos del Padre:</h5>
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
              <td>{dataPadre.primerNombre + " " + dataPadre.segundoNombre}</td>
              <td>
                {dataPadre.primerApellido + " " + dataPadre.segundoApellido}
              </td>
              <td>{dataPadre.cedula}</td>
              <td>{dataPadre.fechaNacimiento}</td>
              <td>{dataPadre.sexo} </td>
              <td>{dataPadre.identidadGenero}</td>
              <td>{dataPadre.raza}</td>
            </tr>
          </table>
          <hr />
          <table class="table-data">
            <tr>
              <th>Estado Civil</th>
              <th>CC Serie</th>
              <th>CC Numero</th>
              <th>País Nacimiento</th>
              <th>Domicilio actual</th>
              <th>Departamento</th>
              <th>Ciudad/Barrio</th>
            </tr>
            <tr>
              <td>{localStorage.getItem("estCivil_postu")}</td>
              <td>{dataPadre.credencialSerie}</td>
              <td>{dataPadre.credencialNumero}</td>
              <td>{localStorage.getItem("paisPostu")} </td>
              <td>{dataPadre.domicilioActual} </td>
              <td>{localStorage.getItem("depaPostu")}</td>
              <td>{localStorage.getItem("barrioPostu")}</td>
            </tr>
          </table>
          <hr />
          <table class="table-data">
            <tr>
              <th>Secc. Policial</th>
              <th>Telefono</th>
              <th>Apodo</th>
              <th>Cargo/Función</th>
              <th>Empresa</th>
              <th>Dirección</th>
              <th>Ente</th>
            </tr>
            <tr>
              <td>{dataPadre.seccionalPolicial}</td>
              <td>{dataPadre.telefono_celular}</td>
              <td>{dataPadre.apodo} </td>
              <td>{laboralPadre.cargo_funcion}</td>
              <td>{laboralPadre.nombreEmpresa}</td>
              <td>{laboralPadre.direccion}</td>
              <td>{laboralPadre.ente}</td>
            </tr>
          </table>
          <hr />
          <table class="table-data">
            <tr>
              <th>Email</th>
              <th>Domicilio anterior</th>
            </tr>
            <tr>
              <td>{dataPadre.correoElectronico}</td>
              <td>{dataPadre.domicilioAnterior}</td>
            </tr>
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
                Si ha sido detenido: Dependencia, Fecha y Causa de detenciones.
              </td>
              <td>{laboralPadre.respuesta2}</td>
              <td>{laboralPadre.observaciones2}</td>
            </tr>
          </table>
        </>
      ) : dataPadre.fallecido === "SI" ? (
        <>
          <h5 style={{ textAlign: "left" }}>Datos del Padre:</h5>
          <hr />
          <table class="table-data">
            <tr>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>CI</th>
              <th>Fecha Nacimiento</th>
              <th>Fecha Defuncion</th>
            </tr>
            <tr>
              <td>{dataPadre.primerNombre + " " + dataPadre.segundoNombre}</td>
              <td>
                {dataPadre.primerApellido + " " + dataPadre.segundoApellido}
              </td>
              <td>{dataPadre.cedula}</td>
              <td>{dataPadre.fechaNacimiento}</td>
              <td>{dataPadre.fechaDefuncion}</td>
            </tr>
          </table>
        </>
      ) : dataPadre.fallecido === "DESCONOCIDO" ||
        dataPadre.fallecido === "" ? (
        <h5 style={{ textAlign: "left" }}>Datos del Padre: Desconocido</h5>
      ) : (
        <h1></h1>
      )}
    </div>
  );
}
