import { API_HOST } from "../utils/constant";

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
