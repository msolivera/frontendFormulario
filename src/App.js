import React, { useState } from "react";
import Principal from "./page/Principal";
import InicioForm from "./page/InicioForm/Index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import "./index.scss";
export default function App() {
  /*const [user, serUser] = useState({ name: "micaela" });

  return <div>{user ? <Principal /> : <h1>no estas logueado</h1>}</div>;*/
  return (
    <div>
      <Header />
      <InicioForm />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />
    </div>
  );

  /*<Footer className="footer" />*/
}
