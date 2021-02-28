import FormPostulante from "../components/Forms/FormPostulante/index";
import FormPostulanteEducacion from "../components/Forms/FormPostulanteEducacion/index";
import FormPostulanteLaboral from "../components/Forms/FormPostulanteLaboral/index";
import FormPostulantePreguntas from "../components/Forms/FormPostulantePreguntas/index";
import FormMadre from "../components/Forms/FormMadre/index";
import FormMadreLaboral from "../components/Forms/FormMadreLaboral/index";
import FormMadrePreguntas from "../components/Forms/FormMadrePreguntas/index";
import FormPadre from "../components/Forms/FormPadre/index";
import FormPadreLaboral from "../components/Forms/FormPadreLaboral/index";
import FormPadrePreguntas from "../components/Forms/FormPadrePreguntas/index";
import FormPareja from "../components/Forms/FormPareja/index";
import FormParejaLaboral from "../components/Forms/FormParejaLaboral/index";
import FormParejaPreguntas from "../components/Forms/FormParejaPreguntas/index";
import FormOtrosFamiliares from "../components/Forms/FormOtrosFamiliares/index";
import Pdf from "../components/Pdf/Pdf";

export default [
  {
    path: "/",
    exact: true,
    page: FormPostulante,
  },

  {
    path: "/educacionPostulante",
    exact: true,
    page: FormPostulanteEducacion,
  },

  {
    path: "/laboralPostulante",
    exact: true,
    page: FormPostulanteLaboral,
  },

  {
    path: "/preguntasPostulante",
    exact: true,
    page: FormPostulantePreguntas,
  },
  {
    path: "/datosMadre",
    exact: true,
    page: FormMadre,
  },
  {
    path: "/laboralMadre",
    exact: true,
    page: FormMadreLaboral,
  },
  {
    path: "/preguntasMadre",
    exact: true,
    page: FormMadrePreguntas,
  },
  {
    path: "/datosPadre",
    exact: true,
    page: FormPadre,
  },
  {
    path: "/laboralPadre",
    exact: true,
    page: FormPadreLaboral,
  },
  {
    path: "/preguntasPadre",
    exact: true,
    page: FormPadrePreguntas,
  },
  {
    path: "/datosPareja",
    exact: true,
    page: FormPareja,
  },
  {
    path: "/laboralPareja",
    exact: true,
    page: FormParejaLaboral,
  },
  {
    path: "/preguntasPareja",
    exact: true,
    page: FormParejaPreguntas,
  },
  {
    path: "/otrosFliares",
    exact: true,
    page: FormOtrosFamiliares,
  },
  {
    path: "/formFinal",
    exact: true,
    page: Pdf,
  },
];
