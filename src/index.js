import React from "react";
import ReactDOM, { render } from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import "react-datepicker/dist/react-datepicker.css";
import Pdf from "./components/Pdf/Pdf";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*ReactDOM.render(
    <Header />,
   <App />,
    <Footer />,
   document.getElementById("root")
 );*/
