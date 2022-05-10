import React from "react";

import * as S from "./styles";

type Props = {
  functionPress: () => void;
};

export const CreateAccountButton: React.FC<Props> = ({ functionPress }) => {
  function handleCreateAccount() {
    window.location.href = "/create-account"
  }

  return (
    <>
      <S.Button onClick={() => handleCreateAccount()}>
        <S.IconButton size={25} />
        <S.TextButton>Criar conta</S.TextButton>
      </S.Button>
    </>
  );
};
