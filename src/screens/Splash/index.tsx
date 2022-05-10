import React from "react";

import * as S from "./styles";

export const Splash: React.FC = () => {
  return (
    <S.Container>
      <S.Loader color={"#FF9000"} size={150} />
    </S.Container>
  );
};
