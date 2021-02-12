import { API_HOST } from "../utils/constant";

export function getPaisesApi() {
  const url = `${API_HOST}paises`;

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

export function getEstadosCivilesApi() {
  const url = `${API_HOST}estadosCiviles`;
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

export function getDepartamentosApi() {
  const url = `${API_HOST}departamentos`;
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

export function getTipoPersonaApi() {
  const url = `${API_HOST}tiposPersonas`;
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

export function getCiudades() {
  const url = `${API_HOST}ciudades`;
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
