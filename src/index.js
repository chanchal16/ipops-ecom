import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { MainContextProvider  } from "./contexts/MainProvider";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MainContextProvider>
        <App />
      </MainContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
