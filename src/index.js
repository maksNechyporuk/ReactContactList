import React from "react";
import { render } from "react-dom";
import App from "./Components/App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

const aplication = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

render(aplication, document.getElementById("root"));
