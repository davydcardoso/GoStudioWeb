import React from "react";

import * as S from "./styles";

export const Loading: React.FC = () => {
  return (
    <S.ContainerLoading>
      <S.LoaderIcon color={"#FF9000"} size={150} />
    </S.ContainerLoading>
  );
};
