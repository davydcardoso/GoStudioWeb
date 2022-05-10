import React from "react";

import * as S from "./styles";

type Props = {
  title: string;
  onPressFunction?: () => void;
  typeButton: "button" | "submit" | "reset";
};

export const LargeButton: React.FC<Props> = ({
  title,
  typeButton,
  onPressFunction,
}) => {
  return (
    <S.Button onClick={onPressFunction} type={typeButton}>
      {title}
    </S.Button>
  );
};
