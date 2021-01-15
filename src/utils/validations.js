export function isEmailValid(email) {
  // eslint-disable-next-line no-useless-escape
  const emailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return emailValid.test(String(email).toLowerCase());
}

export function sinCaracteresEspeciales(content) {
  const validacion = /^[A-Za-z0-9\-! ,ñ@\.\(\)]+$/;

  return validacion.test(String(content)).toLowerCase();
}
