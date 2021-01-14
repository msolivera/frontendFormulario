import React, { useState } from "react";
import {
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Jumbotron,
  Container,
} from "react-bootstrap";
import DatePicker from "react-date-picker";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faPlus,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";

import "../../FormPostulante/FormPostulante.scss";

export default function Preguntas() {
  return (
    <div>
      <Jumbotron>
        <div>
          <h2>Responda las siguientes preguntas</h2>
        </div>
      </Jumbotron>
    </div>
  );
}
