import React from "react";
import { ReactNode } from "react";
import { AuthProvider } from "./AuthContext";

type Props = {
  children: ReactNode;
};

export const AppProvider: React.FC<Props> = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
