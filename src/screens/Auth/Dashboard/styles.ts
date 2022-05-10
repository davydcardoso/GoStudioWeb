import styled from "styled-components";

import { AppColors } from "../../../constants/AppColors";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;

  background-color: ${AppColors.Background};
`;

export const ContainerBody = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
`;

export const BoxLeft = styled.div`
  width: 70%;

  position: absolute;
  top: 12%;

  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const TitlePage = styled.h1`
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 47px;

  color: #f4ede8;
`;

export const ListAppointments = styled.div`
  width: 100%;
  height: 73.5vh;

  display: grid;
  flex-direction: column;
  
  /* align-items: center; */
  justify-content: center;

  overflow: scroll;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const BoxRight = styled.div`
  width: 30%;

  position: absolute;
  top: 20%;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  
`;
