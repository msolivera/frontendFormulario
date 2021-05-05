import {
  API_HOST,
  ID_POSTU,
  ID_MADRE,
  ID_PAREJA,
  ID_PADRE,
  ID_OTRO_FLIAR,
  DATA_POSTU,
  DATA_MADRE,
  DATA_PADRE,
  DATA_PAREJA,
  EST_BASICO,
  LAB_POSTU,
  LAB_MADRE,
  LAB_PADRE,
  LAB_PAREJA,
} from "../utils/constant";

/**LIMPIAR ESTA CLASE POR FAVOR */
export function crearPostulante(persona) {
  const url = `${API_HOST}persona`;

  const personaTemp = {
    ...persona,
    correoElectronico: persona.correoElectronico.toLowerCase(),
  };

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(personaTemp),
  };

  return fetch(url, params)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      return { code: 404, message: "Error al guardar los datos" };
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function updatePostulante(persona, id) {
  const url = `${API_HOST}persona/${id}`;

  const personaTemp = {
    ...persona,
    correoElectronico: persona.correoElectronico.toLowerCase(),
  };

  const params = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(personaTemp),
  };

  return fetch(url, params)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      return { code: 404, message: "Error al guardar los datos" };
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function crearFamiliarPostulante(persona) {
  const url = `${API_HOST}personaFamiliar`;

  //console.log(persona);
  // console.log(url);

  const personaTemp = {
    ...persona,
    correoElectronico: persona.correoElectronico.toLowerCase(),
  };

  //console.log(personaTemp);
  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(personaTemp),
  };

  return fetch(url, params)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      return { code: 404, message: "Error al guardar los datos" };
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}
export function updateFamiliarPostulante(persona, idPersona) {
  const url = `${API_HOST}personaFamiliar/${idPersona}`;

  //console.log(persona);
  // console.log(url);

  const personaTemp = {
    ...persona,
    correoElectronico: persona.correoElectronico.toLowerCase(),
  };

  //console.log(personaTemp);
  const params = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(personaTemp),
  };

  return fetch(url, params)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      return { code: 404, message: "Error al guardar los datos" };
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function crearOcupacion(ocupacion) {
  const url = `${API_HOST}ocupacion`;

  const ocupacionTemp = {
    ...ocupacion,
    cargo_funcion: ocupacion.cargo_funcion.toLowerCase(),
    nombreEmpresa: ocupacion.nombreEmpresa.toLowerCase(),
    direccion: ocupacion.direccion.toLowerCase(),
  };

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ocupacionTemp),
  };

  return fetch(url, params)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      return { code: 404, message: "Error al guardar los datos" };
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}
export function updateOcupacion(ocupacion, idOcupacion) {
  const url = `${API_HOST}ocupacion/${idOcupacion}`;
  console.log(ocupacion);

  const ocupacionTemp = {
    ...ocupacion,
    cargo_funcion: ocupacion.cargo_funcion.toLowerCase(),
    nombreEmpresa: ocupacion.nombreEmpresa.toLowerCase(),
    direccion: ocupacion.direccion.toLowerCase(),
  };

  const params = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ocupacionTemp),
  };

  return fetch(url, params)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      return { code: 404, message: "Error al guardar los datos" };
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function crearEstudiosBasicos(estudios) {
  const url = `${API_HOST}estudiosBasicos`;
  console.log(estudios);
  console.log(url);
  const estudiosTemp = {
    ...estudios,
    primeroPrimaria_nombreInstituto: estudios.primeroPrimaria_nombreInstituto.toLowerCase(),
  };
  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(estudiosTemp),
  };

  return fetch(url, params)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      return { code: 404, message: "Error al guardar los datos" };
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function crearEstudio(estudio) {
  const url = `${API_HOST}estudio`;
  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(estudio),
  };

  return fetch(url, params)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      return { code: 404, message: "Error al guardar los datos" };
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function crearOtroFliar(familiar) {
  const url = `${API_HOST}familiar`;

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(familiar),
  };

  return fetch(url, params)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      return { code: 404, message: "Error al guardar los datos" };
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function crearParentesco(parientes) {
  const url = `${API_HOST}parentesco`;

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(parientes),
  };

  return fetch(url, params)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      return { code: 404, message: "Error al guardar los datos" };
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function crearRespuesta(respuesta) {
  const url = `${API_HOST}respuesta`;

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(respuesta),
  };

  return fetch(url, params)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      return { code: 404, message: "Error al guardar los datos" };
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function updateRespuesta(respuesta, idRespuesta) {
  const url = `${API_HOST}respuesta/${idRespuesta}`;

  const params = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(respuesta),
  };

  return fetch(url, params)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      return { code: 404, message: "Error al guardar los datos" };
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function setIdsApi(tipoPer, id) {
  switch (tipoPer) {
    case 1:
      localStorage.setItem(ID_POSTU, id);
      break;
    case 2:
      localStorage.setItem(ID_MADRE, id);
      break;
    case 3:
      localStorage.setItem(ID_PADRE, id);
      break;
    case 10:
      localStorage.setItem(ID_PAREJA, id);
      break;

    default:
      localStorage.setItem(ID_OTRO_FLIAR, id);
      break;
  }
}

export function getSuId(tipoPer) {
  switch (tipoPer) {
    case 1:
      return localStorage.getItem(ID_POSTU);
      break;
    case 2:
      return localStorage.getItem(ID_MADRE);
      break;
    case 3:
      return localStorage.getItem(ID_PADRE);
      break;
    case 10:
      return localStorage.getItem(ID_PAREJA);
      break;

    default:
      break;
  }
}

export function getIdPostu() {
  return localStorage.getItem(ID_POSTU);
}
export function getIdMadre() {
  return localStorage.getItem(ID_MADRE);
}
export function getIdPadre() {
  return localStorage.getItem(ID_PADRE);
}
export function getIdPareja() {
  return localStorage.getItem(ID_PAREJA);
}
export function getIdOtro() {
  return localStorage.getItem(ID_OTRO_FLIAR);
}

export function comboPaises() {
  const url = `${API_HOST}paises`;

  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  };
  return fetch(url, params)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      return { code: 404, message: "Error" };
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

/**ESTA HAY QUE SACARLO DE ACA */
export function setDataPostu(data) {
  return localStorage.setItem(DATA_POSTU, data);
}

export function getDataPostu() {
  var guardado = localStorage.getItem(DATA_POSTU);

  return JSON.parse(guardado);
}

export function setDataMadre(data) {
  return localStorage.setItem(DATA_MADRE, data);
}

export function getDataMadre() {
  var guardado = localStorage.getItem(DATA_MADRE);

  return JSON.parse(guardado);
}
export function setDataPadre(data) {
  return localStorage.setItem(DATA_PADRE, data);
}

export function getDataPadre() {
  var guardado = localStorage.getItem(DATA_PADRE);

  return JSON.parse(guardado);
}
export function setDataPareja(data) {
  return localStorage.setItem(DATA_PAREJA, data);
}

export function getDataPareja() {
  var guardado = localStorage.getItem(DATA_PAREJA);

  return JSON.parse(guardado);
}

export function setEstudiosBasicos(data) {
  return localStorage.setItem(EST_BASICO, data);
}

export function getEstudiosBasicos() {
  var guardado = localStorage.getItem(EST_BASICO);

  return JSON.parse(guardado);
}

export function setLabPostu(data) {
  return localStorage.setItem(LAB_POSTU, data);
}

export function getLabPostu() {
  var guardado = localStorage.getItem(LAB_POSTU);

  return JSON.parse(guardado);
}

export function setLabMadre(data) {
  return localStorage.setItem(LAB_MADRE, data);
}

export function getLabMadre() {
  var guardado = localStorage.getItem(LAB_MADRE);

  return JSON.parse(guardado);
}

export function setLabPadre(data) {
  return localStorage.setItem(LAB_PADRE, data);
}

export function getLabPadre() {
  var guardado = localStorage.getItem(LAB_PADRE);

  return JSON.parse(guardado);
}

export function setLabPareja(data) {
  return localStorage.setItem(LAB_PAREJA, data);
}

export function getLabPareja() {
  var guardado = localStorage.getItem(LAB_PAREJA);

  return JSON.parse(guardado);
}
