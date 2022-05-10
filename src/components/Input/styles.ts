import styled from "styled-components";
import { AppColors } from "../../constants/AppColors";

export const BoxInput = styled.div`
  display: flex;
  align-items: center;
`;

export const BoxIcon = styled.div`
  width: 40px;

  position: absolute;

  display: flex;
  justify-content: center;

  margin-left: 10px;
`;

export const Input = styled.input`
  width: 340px;
  height: 56px;

  background-color: ${AppColors.Inputs};

  margin: 10px;

  color: #f4ede8;
  text-align: center;
  font-size: large;

  border: none;
  border-radius: 10px;
`;
