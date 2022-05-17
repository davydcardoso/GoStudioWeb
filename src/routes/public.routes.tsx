import React from "react";
import { Routes, Route } from "react-router-dom";
import { Scheduler } from "../screens/Public/Scheduler";

import { SignIn } from "../screens/Public/SignIn";
import { SignUp } from "../screens/Public/SignUp";

export const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/scheduler" element={<Scheduler />} />
      <Route path="/create-account" element={<SignUp />} />
      <Route path="/forgot-password" />
    </Routes>
  );
};
