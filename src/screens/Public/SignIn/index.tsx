import React, { useState } from "react";
import { Input } from "../../../components/Input";
import { LargeButton } from "../../../components/LargeButton";
import { LogoRocketApps } from "../../../components/LogoRocketApps";
import { useAuth } from "../../../contexts/AuthContext";
import { CreateAccountButton } from "./components/CreateAccountButton";

import * as S from "./styles";

export const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    signIn({ email, password });
  };

  return (
    <S.Container>
      <S.LeftContainer>
        <LogoRocketApps />

        <S.BoxInputs>
          <S.Form onSubmit={(event) => handleSubmit(event)}>
            <S.TitleInputs>Faça seu login</S.TitleInputs>

            <Input
              iconName="user"
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
          </S.Form>
          <LargeButton
            typeButton="button"
            title="Enviar"
            onPressFunction={() => handleSubmit()}
          />
        </S.BoxInputs>

        <CreateAccountButton functionPress={() => {}} />
      </S.LeftContainer>
      <S.ImageBackground
        src={require("../../../assets/login-backgoud-image.png")}
      />
    </S.Container>
  );
};
