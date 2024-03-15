import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import { router } from "./router/router.jsx";
import UserContextProvider from "./context/UserContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </HelmetProvider>
  </React.StrictMode>
);
