import styled from "styled-components";
import { CgLogOff } from "react-icons/cg";

import { AppColors } from "../../constants/AppColors";

export const Container = styled.div`
  width: 100%;
  height: 15%;

  background-color: ${AppColors.BlackMedium};

  position: fixed;
  top: 0;

  display: flex;
  align-items: center;

  padding-left: 30px;
`;

export const ContainerTexts = styled.div`
  margin-left: 20px;
`;

export const Title = styled.h1`
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;

  color: #999591;
  
  margin-bottom: 1px;
`;

export const UserName = styled.h1`
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;

  color: #ff9000;

  margin-top: 1px;
  margin-left: 10px;
`;

export const LogOffIcon = styled(CgLogOff).attrs({})`
  position: absolute;
  right: 100px;

  color: ${AppColors.Orange};

  transition-duration: 0.4s;

  :hover {
    cursor: pointer;
    color: ${AppColors.GrayHard};
  }
`;
