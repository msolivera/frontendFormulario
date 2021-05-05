import {
  API_HOST,
  ESTUDIOS,
  RESP_POSTU,
  RESP_MADRE,
  RESP_PADRE,
  RESP_PAREJA,
  FAMILIARES,
} from "../utils/constant";

export function getEstudiosPersona(idPersona) {
  const url = `${API_HOST}estudios/${idPersona}`;
  const params = {
    headers: {
      "Content-Type": "application-json",
    },
  };
  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}
/*esto lo uso para formar el pdf*/
export function listaOtrosEstudios(id) {
  var lista = [];
  getEstudiosPersona(id).then((response) => {
    lista = formatModel(response.data);
    // console.log(lista);

    return lista;
  });
}
export function formatModel(estudios) {
  //lista temporal
  const estudiosTemp = [];

  estudios.forEach((estudio) => {
    estudiosTemp.push({
      //creo el formato
      id: estudio.id,
      nombreInstituto: estudio.nombreInstituto,
      anioEstudio: estudio.anioEstudio,
    });
  });
  localStorage.setItem(ESTUDIOS, JSON.stringify(estudiosTemp));
  return;
}

export function getEstudiosLocal() {
  var guardado = localStorage.getItem(ESTUDIOS);

  return JSON.parse(guardado);
}

export function getRespuestasPersona(idPersona) {
  const url = `${API_HOST}respuestaPersona/${idPersona}`;
  const params = {
    headers: {
      "Content-Type": "application-json",
    },
  };
  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}
export function listarRespuestas(id, tipoPer) {
  var lista = [];
  getRespuestasPersona(id).then((response) => {
    lista = formatModelResp(response.data, tipoPer);
    // console.log(lista);

    return lista;
  });
}
export function formatModelResp(respuestas, tipoPer) {
  //lista temporal
  const respuestasTemp = [];

  respuestas.forEach((respuesta) => {
    respuestasTemp.push({
      //creo el formato
      idPregunta: respuesta.pregunta_id,
      idRespuesta: respuesta.id,
      textoPregunta: respuesta.textoPregunta,
      respuesta: respuesta.respuesta,
    });
  });

  switch (tipoPer) {
    case 1:
      localStorage.setItem(RESP_POSTU, JSON.stringify(respuestasTemp));
      break;
    case 2:
      localStorage.setItem(RESP_MADRE, JSON.stringify(respuestasTemp));
      break;
    case 3:
      localStorage.setItem(RESP_PADRE, JSON.stringify(respuestasTemp));
      break;
    case 10:
      localStorage.setItem(RESP_PAREJA, JSON.stringify(respuestasTemp));
      break;

    default:
      break;
  }

  return;
}

export function getRespuestasLocal(tipoPer) {
  switch (tipoPer) {
    case 1:
      var guardado = localStorage.getItem(RESP_POSTU);
      break;
    case 2:
      var guardado = localStorage.getItem(RESP_MADRE);

      break;
    case 3:
      var guardado = localStorage.getItem(RESP_PADRE);

      break;
    case 10:
      var guardado = localStorage.getItem(RESP_PAREJA);

      break;

    default:
      break;
  }

  return JSON.parse(guardado);
}
/**/

export function getOtrosFamiliaresPersona(idPersona) {
  const url = `${API_HOST}pariente/${idPersona}`;
  const params = {
    headers: {
      "Content-Type": "application-json",
    },
  };
  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function listaOtrosFamiliaresPersona(id) {
  var lista = [];
  getOtrosFamiliaresPersona(id).then((response) => {
    lista = formatModelOtrosFliares(response.data);
    return lista;
  });
}
export function formatModelOtrosFliares(fliares) {
  //lista temporal
  const fliaresTemp = [];

  fliares.forEach((fliar) => {
    fliaresTemp.push({
      //creo el formato
      id: fliar.familiar_id,
      primerNombre: fliar.primerNombre,
      primerApellido: fliar.primerApellido,
      fechaNacimiento: fliar.fechaNacimiento,
      tipo_persona_id: fliar.tipo_persona_id,
      tipoPersona: fliar.nombre,
      cedula: fliar.cedula,
    });
  });
  localStorage.setItem(FAMILIARES, JSON.stringify(fliaresTemp));
  return;
}
export function getfliaresLocal() {
  var guardado = localStorage.getItem(FAMILIARES);
  return JSON.parse(guardado);
}

export function getPreguntasApi() {
  const url = `${API_HOST}preguntas`;

  const params = {
    headers: {
      "Content-Type": "application-json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function setPreguntasPostu(data) {
  return localStorage.setItem(RESP_POSTU, data);
}

export function getPreguntasPostu() {
  var guardado = localStorage.getItem(RESP_POSTU);

  return JSON.parse(guardado);
}

export function setPreguntasMadre(data) {
  return localStorage.setItem(RESP_MADRE, data);
}

export function getPreguntasMadre() {
  var guardado = localStorage.getItem(RESP_MADRE);

  return JSON.parse(guardado);
}

export function setPreguntasPadre(data) {
  return localStorage.setItem(RESP_PADRE, data);
}

export function getPreguntasPadre() {
  var guardado = localStorage.getItem(RESP_PADRE);

  return JSON.parse(guardado);
}

export function setPreguntasPareja(data) {
  return localStorage.setItem(RESP_PAREJA, data);
}

export function getPreguntasPareja() {
  var guardado = localStorage.getItem(RESP_PAREJA);

  return JSON.parse(guardado);
}
