import {
  API_HOST,
  PAIS_POSTU,
  DEPARTAMENTO_POSTU,
  BARRIO_POSTU,
  PAIS_MADRE,
  DEPARTAMENTO_MADRE,
  BARRIO_MADRE,
  PAIS_PADRE,
  DEPARTAMENTO_PADRE,
  BARRIO_PADRE,
  PAIS_PAREJA,
  DEPARTAMENTO_PAREJA,
  BARRIO_PAREJA,
  ESTCIVIL_POSTU,
  ESTCIVIL_MADRE,
  ESTCIVIL_PADRE,
  ESTCIVIL_PAREJA,
} from "../utils/constant";

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

export function getNombrePais(idPais) {
  const url = `${API_HOST}pais/${idPais}`;

  const params = {
    method: "GET",
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

export function setearPais(idPais, tipoPerstate) {
  getNombrePais(idPais).then((response) => {
    switch (tipoPerstate) {
      case 1:
        localStorage.setItem(PAIS_POSTU, response.data);
        break;
      case 2:
        localStorage.setItem(PAIS_MADRE, response.data);
        break;
      case 3:
        localStorage.setItem(PAIS_PADRE, response.data);
        break;
      case 10:
        localStorage.setItem(PAIS_PAREJA, response.data);
        break;

      default:
        break;
    }
  });
}

export function getNombreDepartamento(idDepartamento) {
  const url = `${API_HOST}departamento/${idDepartamento}`;

  const params = {
    method: "GET",
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

export function setearDepartamento(idDepartamento, tipoPerstate) {
  getNombreDepartamento(idDepartamento).then((response) => {
    switch (tipoPerstate) {
      case 1:
        localStorage.setItem(DEPARTAMENTO_POSTU, response.data);
        break;
      case 2:
        localStorage.setItem(DEPARTAMENTO_MADRE, response.data);
        break;
      case 3:
        localStorage.setItem(DEPARTAMENTO_PADRE, response.data);
        break;
      case 10:
        localStorage.setItem(DEPARTAMENTO_PAREJA, response.data);
        break;

      default:
        break;
    }
  });
}

export function getNombreCiudad(idCiudad) {
  const url = `${API_HOST}ciudad/${idCiudad}`;

  const params = {
    method: "GET",
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

export function setearCiudad(idCiudad, tipoPerstate) {
  getNombreCiudad(idCiudad).then((response) => {
    switch (tipoPerstate) {
      case 1:
        localStorage.setItem(BARRIO_POSTU, response.data);
        break;
      case 2:
        localStorage.setItem(BARRIO_MADRE, response.data);
        break;
      case 3:
        localStorage.setItem(BARRIO_PADRE, response.data);
        break;
      case 10:
        localStorage.setItem(BARRIO_PAREJA, response.data);
        break;

      default:
        break;
    }
  });
}

export function getNombreEstadoCivil(idestadoCivil) {
  const url = `${API_HOST}estadoCivil/${idestadoCivil}`;

  const params = {
    method: "GET",
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

export function setearEstadoCivil(idEstadoCivil, tipoPerstate) {
  getNombreEstadoCivil(idEstadoCivil).then((response) => {
    switch (tipoPerstate) {
      case 1:
        localStorage.setItem(ESTCIVIL_POSTU, response.data);
        console.log("ESTADO CIVIL");
        console.log(response.data);
        break;
      case 2:
        localStorage.setItem(ESTCIVIL_MADRE, response.data);
        break;
      case 3:
        localStorage.setItem(ESTCIVIL_PADRE, response.data);
        break;
      case 10:
        localStorage.setItem(ESTCIVIL_PAREJA, response.data);
        break;
      default:
        break;
    }
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
