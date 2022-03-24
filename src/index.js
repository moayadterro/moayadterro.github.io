import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Providers from "./components/particles/providers";
import HomePage from "./components/pages/home";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <HomePage />
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
