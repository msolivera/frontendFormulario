import React from "react";
import ReactToPrint from "react-to-print";
import Cabezal from "./Cabezal/index";
import PieFirma from "./PieFirma/index";
import VistaPostulante from "./VistaPostulante/index";
import VistaMadre from "./VistaMadre/index";
import VistaPadre from "./VistaPadre/index";
import VistaPareja from "./VistaPareja/index";
import VistaNucleoHabitacional from "./VistaNucleoHabitacional/index";
import "./pdf.scss";
import "../../scss/index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faHome,
  faFileDownload,
} from "@fortawesome/free-solid-svg-icons";

class ComponentToPrint extends React.Component {
  render() {
    return (
      <div style={{ width: "1200px" }}>
        <Cabezal />
        <VistaPostulante />
        <VistaPadre />
        <h3 style={{ textAlign: "left", pageBreakBefore: "always" }}></h3>
        <br />
        <VistaMadre />
        <VistaPareja />
        <VistaNucleoHabitacional />
        <PieFirma />
      </div>
    );
  }
}

class Example extends React.Component {
  render() {
    return (
      <div>
        <a
          style={{ marginLeft: "30px" }}
          href="#"
          onClick={(e) => {
            localStorage.clear();
            window.location = "/";
          }}
          class="button button1"
        >
          ELIMINAR DATOS PERSONALES
          <FontAwesomeIcon style={{ marginLeft: "5px" }} icon={faTrashAlt} />
        </a>
        <a
          href="#"
          onClick={(e) => {
            window.location = "/";
          }}
          class="button button2"
        >
          VOLVER AL INICIO
          <FontAwesomeIcon style={{ marginLeft: "5px" }} icon={faHome} />
        </a>
        <ReactToPrint
          trigger={() => (
            <a href="#" class="button button3">
              DESCARGAR PDF
              <FontAwesomeIcon
                style={{ marginLeft: "5px" }}
                icon={faFileDownload}
              />
            </a>
          )}
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}

export default Example;
