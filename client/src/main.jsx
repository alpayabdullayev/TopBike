import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ClickProvider } from "./context/ClickContext.jsx";
import { UserProvider } from "./context/userContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <ClickProvider>
        <App />
      </ClickProvider>
    </UserProvider>
  </React.StrictMode>
);
