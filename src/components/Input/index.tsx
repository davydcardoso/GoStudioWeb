import React from "react";
import { FiSearch, FiUser } from "react-icons/fi";
import { AiOutlineLock } from "react-icons/ai";

import * as S from "./styles";

type Props = {
  iconName?: string;
  value: string;
  onChangeText: React.ChangeEventHandler<HTMLInputElement>;
  typeInput: React.HTMLInputTypeAttribute;
};

export const Input: React.FC<Props> = ({
  value,
  iconName,
  typeInput,
  onChangeText,
}) => {
  function handleIcon() {
    switch (iconName) {
      case "user":
        return <FiUser size={30} />;
      case "pass":
        return <AiOutlineLock size={30} />;
      default:
        return <FiSearch size={30} />;
    }
  }

  return (
    <S.BoxInput>
      {iconName && <S.BoxIcon>{handleIcon()}</S.BoxIcon>}
      <S.Input value={value} onChange={onChangeText} type={typeInput} />
    </S.BoxInput>
  );
};
