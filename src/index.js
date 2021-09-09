import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { persistor } from "./redux/store/store";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "./context/themeContext";

ReactDOM.render(
  <ThemeProvider>
    <Router>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);
