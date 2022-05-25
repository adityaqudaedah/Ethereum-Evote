import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Fonts } from "./Fonts";
import { EvoteProvider } from "./context/evote";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const theme = extendTheme({
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Inter, sans-serif",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <EvoteProvider>
          <App />
        </EvoteProvider>
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
