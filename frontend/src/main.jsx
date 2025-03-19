import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import EditPatient from "./components/EditPatient.jsx";
import DeletePatient from "./components/DeletePatient.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/edit/:id" element={<EditPatient />} />
        <Route path="/delete/:id" element={<DeletePatient />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
