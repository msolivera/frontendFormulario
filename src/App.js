import React from "react";
import InicioForm from "./page/InicioForm/Index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Layout/Header";

import "./index.scss";
import Routing from "./routes/Routing";
export default function App() {
  return (
    <div>
      <Header />
      <Routing />
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
}
