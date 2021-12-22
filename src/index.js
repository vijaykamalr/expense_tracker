import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SpeechProvider } from "@speechly/react-client";
import { Provider } from "./context/context";
const theme = createTheme();

ReactDOM.render(
    <ThemeProvider theme={theme}>
      <SpeechProvider
        appId="7c4aee08-1073-4a32-b862-ebe1850e0732"
        language="en-US"
      >
        <Provider>
          <App />
        </Provider>
      </SpeechProvider>
      ,
    </ThemeProvider>,
  document.getElementById("root")
);
