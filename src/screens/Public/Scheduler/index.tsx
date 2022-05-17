import React from "react";

import * as S from "./styles";

export const Scheduler: React.FC = () => {
  return (
    <>
      <S.Container>
        <S.Header>
          <S.ImageHeader src="https://rocketapps.dev/assets/img/logo-fonts.png" />
        </S.Header>

        <S.ContainerBody>
          <S.CalendarItem />
        </S.ContainerBody>
      </S.Container>
    </>
  );
};
