import styled from "styled-components";
import Calendar from "react-calendar";

import { AppColors } from "../../../constants/AppColors";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${AppColors.Background};

  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  position: absolute;
  top: 0;

  width: 100%;
  height: 80px;

  background-color: ${AppColors.BlackMedium};
`;

export const ImageHeader = styled.img`
  width: 30%;

  position: absolute;
  top: 20px;
  left: 20px;
`;

export const ContainerBody = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;

  padding-top: 100px;
`;

export const CalendarItem = styled(Calendar).attrs({})`
  background-color: ${AppColors.BlackMedium};

  border-radius: 15px;

  color: ${AppColors.Gray};

  box-shadow: 8px 4px 6px black;

  border: none;
`;
