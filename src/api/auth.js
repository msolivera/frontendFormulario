import { API_HOST } from "../utils/constant";

export function crearPersona(persona) {
  const url = `${API_HOST}persona`;

  console.log(persona);
  console.log(url);

  const personaTemp = {
    ...persona,
    correoElectronico: persona.correoElectronico.toLowerCase(),
  };

  console.log(personaTemp);
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

export function crearOtroFliar(familiar) {
  const url = `${API_HOST}familiar`;

  console.log(familiar);
  console.log(url);

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
