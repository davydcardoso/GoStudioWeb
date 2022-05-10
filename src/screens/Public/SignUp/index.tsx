import React, { useState } from "react";
import { Input } from "../../../components/Input";
import { LargeButton } from "../../../components/LargeButton";
import { LogoRocketApps } from "../../../components/LogoRocketApps";

import * as S from "./styles";

export const SignUp: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event.currentTarget);
  };

  return (
    <S.Container>
      <S.RightContainer>
        <LogoRocketApps />

        <form onSubmit={handleSubmit}>
          <S.TitleInputs>Cadastre sua barbearia</S.TitleInputs>

          <Input
            iconName="user"
            value={name}
            onChangeText={(event) => setName(event.target.value)}
            typeInput="text"
          />

          <Input
            iconName="email"
            value={email}
            onChangeText={(event) => setEmail(event.target.value)}
            typeInput="email"
          />

          <Input
            iconName="pass"
            value={password}
            onChangeText={(event) => setPassword(event.target.value)}
            typeInput="password"
          />
        </form>
        <LargeButton typeButton="submit" title="Enviar" />
      </S.RightContainer>
      <S.ImageBackground
        src={require("../../../assets/signup-background-image.png")}
      />
    </S.Container>
  );
};
