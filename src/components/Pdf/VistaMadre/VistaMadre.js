import { getDataMadre, getIdMadre, getLabMadre } from "../../../api/auth";
import "./../pdf.scss";
import "../../../scss/index.scss";

import React, { useState } from "react";

export default function VistaMadre() {
  const [dataMadre, setdataMadre] = useState(getDataMadre());
  const [idMadre, setidMadre] = useState(getIdMadre());
  const [laboralMadre, setlaboralMadre] = useState(getLabMadre());
  return (
    <div class="div-margen">
      {dataMadre.fallecido === "NO" ? (
        <>
          <p class="p-titulo">Datos de la Madre:</p>
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
              <td>{dataMadre.primerNombre + " " + dataMadre.segundoNombre}</td>
              <td>
                {dataMadre.primerApellido + " " + dataMadre.segundoApellido}
              </td>
              <td>{dataMadre.cedula}</td>
              <td>{dataMadre.fechaNacimiento}</td>
              <td>{dataMadre.sexo} </td>
              <td>{dataMadre.identidadGenero}</td>
              <td>{dataMadre.raza}</td>
            </tr>
          </table>
          <hr />
          <table class="table-data">
            <tr>
              <th>Estado Civil</th>
              <th>CC Serie</th>
              <th>CC Numero</th>
              <th>País Nacimiento</th>
              <th>Domicilio</th>
              <th>Departamento</th>
              <th>Ciudad/Barrio</th>
            </tr>
            <tr>
              <td>{localStorage.getItem("estCivil_postu")}</td>
              <td>{dataMadre.credencialSerie}</td>
              <td>{dataMadre.credencialNumero}</td>
              <td>{localStorage.getItem("paisPostu")} </td>
              <td>{dataMadre.domicilioActual} </td>
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
              <td>{dataMadre.seccionalPolicial}</td>
              <td>{dataMadre.telefono_celular}</td>
              <td>{dataMadre.apodo} </td>
              <td>{laboralMadre.cargo_funcion}</td>
              <td>{laboralMadre.nombreEmpresa}</td>
              <td>{laboralMadre.direccion}</td>
              <td>{laboralMadre.ente}</td>
            </tr>
          </table>
          <hr />
          <table class="table-data">
            <tr>
              <th>Email</th>
              <th>Domicilio anterior</th>
            </tr>
            <tr>
              <td>{dataMadre.correoElectronico}</td>
              <td>{dataMadre.domicilioAnterior}</td>
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
              <td>{laboralMadre.respuesta2}</td>
              <td>{laboralMadre.observaciones2}</td>
            </tr>
          </table>
        </>
      ) : dataMadre.fallecido === "SI" ? (
        <>
          <p class="p-titulo">Datos de la Madre:</p>
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
              <td>{dataMadre.primerNombre + " " + dataMadre.segundoNombre}</td>
              <td>
                {dataMadre.primerApellido + " " + dataMadre.segundoApellido}
              </td>
              <td>{dataMadre.cedula}</td>
              <td>{dataMadre.fechaNacimiento}</td>
              <td>{dataMadre.fechaDefuncion}</td>
            </tr>
          </table>
        </>
      ) : dataMadre.fallecido === "DESCONOCIDO" ||
        dataMadre.fallecido === "" ? (
        <p class="p-titulo">Datos de la Madre: Desconocida</p>
      ) : (
        <h1></h1>
      )}
    </div>
  );
}
