import React from "react";
import ReactDOM from "react-dom/client";
import ContextProvider from "./utils/ContextProvider";
import App from "./App";
import { EthosConnectProvider } from 'ethos-connect';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EthosConnectProvider >
      <App />
    </EthosConnectProvider>
  </React.StrictMode>
);
