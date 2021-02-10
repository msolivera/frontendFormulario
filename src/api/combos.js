import { API_HOST } from "../utils/constant";

export function comboPaises() {
  const url = `${API_HOST}paises`;
  fetch(url)
    .then((res) => res.json())
    .then((res) => res.map((data) => data.nombre))
    .then((nombres) => console.log(nombres));
}

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
