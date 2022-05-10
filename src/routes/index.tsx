import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Splash } from "../screens/Splash";
import { AuthRoutes } from "./auth.routes";
import { PublicRoutes } from "./public.routes";

export const Routes: React.FC = () => {
  const { loading, user } = useAuth();

  if (loading) {
    return <Splash />;
  }

  return user ? <AuthRoutes /> : <PublicRoutes />;
};
