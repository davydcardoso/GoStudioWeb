import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Routes } from "./routes";
import { AuthProvider } from "./contexts/AuthContext";

import "react-calendar/dist/Calendar.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
