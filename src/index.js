import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";

import Poppins from "./fonts/Poppins-Regular.ttf";

const poppins = {
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
  local('Poppins'),
  local('Poppins-Regular'),
  url(${Poppins}) format('ttf')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const theme = createMuiTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [poppins],
      },
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
