import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { FilterProvider,WishlistContextProvider,AuthContextProvider  } from "./contexts/contexts";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <FilterProvider>      
        <AuthContextProvider>
          <WishlistContextProvider>
            <App />
          </WishlistContextProvider>
        </AuthContextProvider>
      </FilterProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
