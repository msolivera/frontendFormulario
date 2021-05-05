import { getDataPareja, getIdPareja, getLabPareja } from "../../../api/auth";
import "./../pdf.scss";
import "../../../scss/index.scss";

import React, { useState } from "react";

export default function VistaPareja() {
  const [dataPareja, setdataPareja] = useState(getDataPareja());
  const [idPareja, setidPareja] = useState(getIdPareja());
  const [laboralPareja, setlaboralPareja] = useState(getLabPareja());
  return (
    <div class="div-margen">
      {dataPareja.fallecido === "NO" ? (
        <>
          <h5 style={{ textAlign: "left" }}>Datos de la Pareja:</h5>
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
              <td>
                {dataPareja.primerNombre + " " + dataPareja.segundoNombre}
              </td>
              <td>
                {dataPareja.primerApellido + " " + dataPareja.segundoApellido}
              </td>
              <td>{dataPareja.cedula}</td>
              <td>{dataPareja.fechaNacimiento}</td>
              <td>{dataPareja.sexo} </td>
              <td>{dataPareja.identidadGenero}</td>
              <td>{dataPareja.raza}</td>
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
              <td>{dataPareja.credencialSerie}</td>
              <td>{dataPareja.credencialNumero}</td>
              <td>{localStorage.getItem("paisPostu")} </td>
              <td>{dataPareja.domicilioActual} </td>
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
              <td>{dataPareja.seccionalPolicial}</td>
              <td>{dataPareja.telefono_celular}</td>
              <td>{dataPareja.apodo} </td>
              <td>{laboralPareja.cargo_funcion}</td>
              <td>{laboralPareja.nombreEmpresa}</td>
              <td>{laboralPareja.direccion}</td>
              <td>{laboralPareja.ente}</td>
            </tr>
          </table>
          <hr />
          <table class="table-data">
            <tr>
              <th>Email</th>
              <th>Domicilio anterior</th>
            </tr>
            <tr>
              <td>{dataPareja.correoElectronico}</td>
              <td>{dataPareja.domicilioAnterior}</td>
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
              <td>{laboralPareja.respuesta2}</td>
              <td>{laboralPareja.observaciones2}</td>
            </tr>
          </table>
        </>
      ) : dataPareja.fallecido === "SI" ? (
        <>
          <h5 style={{ textAlign: "left" }}>Datos de la Pareja:</h5>
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
              <td>
                {dataPareja.primerNombre + " " + dataPareja.segundoNombre}
              </td>
              <td>
                {dataPareja.primerApellido + " " + dataPareja.segundoApellido}
              </td>
              <td>{dataPareja.cedula}</td>
              <td>{dataPareja.fechaNacimiento}</td>
              <td>{dataPareja.fechaDefuncion}</td>
            </tr>
          </table>
        </>
      ) : dataPareja.fallecido === "DESCONOCIDO" ||
        dataPareja.fallecido === "" ? (
        <h5 style={{ textAlign: "left" }}>Datos de la Pareja: No tiene</h5>
      ) : (
        <h1></h1>
      )}
    </div>
  );
}
