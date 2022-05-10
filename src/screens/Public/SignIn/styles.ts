import styled from "styled-components";
import { AppColors } from "../../../constants/AppColors";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  flex: 1;

  background-color: ${AppColors.Background};
`;

export const LeftContainer = styled.div`
  width: 55%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const BoxInputs = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const TitleInputs = styled.h1`
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: 500;
  text-align: center;

  color: #f4ede8;
`;

export const Form = styled.form`
  align-items: center;
`;

export const ImageBackground = styled.img`
  height: 99.9vh;

  position: absolute;

  top: 0;
  right: 0;
  bottom: 0;
`;
