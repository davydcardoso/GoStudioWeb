import React from "react";
import { Routes, Route } from "react-router-dom";

import { Dashboard } from "../screens/Auth/Dashboard";

export const AuthRoutes: React.FC = () => {
  return (
    <Routes location={"/"}>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};
