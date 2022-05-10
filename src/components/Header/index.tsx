import React from "react";

import { useAuth, UserProps } from "../../contexts/AuthContext";
import { LogoRocketApps } from "../LogoRocketApps";

import * as S from "./styles";

export const Header: React.FC = () => {
  const { user: userdata, signOut } = useAuth();

  const user = userdata as UserProps;

  return (
    <S.Container>
      <LogoRocketApps />

      <S.ContainerTexts>
        <S.Title>Bem vindo,</S.Title>
        <S.UserName>{userdata ? user.name : "In development"}</S.UserName>
      </S.ContainerTexts>

      <S.LogOffIcon size={30} onClick={() => signOut()} />
    </S.Container>
  );
};
