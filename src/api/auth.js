import {
  API_HOST,
  ID_POSTU,
  ID_MADRE,
  ID_PAREJA,
  ID_PADRE,
  ID_OTRO_FLIAR,
} from "../utils/constant";

export function crearPostulante(persona) {
  const url = `${API_HOST}persona`;

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

export function crearOcupacion(ocupacion) {
  const url = `${API_HOST}ocupacion`;
  console.log(ocupacion);
  console.log(url);

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

//esto no funciona aun
export function obtenerOtrosEstudios() {
  const url = `${API_HOST}estudios`;
  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  console.log(params);
  console.log(url);
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
