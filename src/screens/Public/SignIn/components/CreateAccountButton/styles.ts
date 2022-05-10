import styled from "styled-components";
import { BiLogIn } from "react-icons/bi";

import { AppColors } from "../../../../../constants/AppColors";

export const Button = styled.button`
  margin: 10px;

  border: none;
  background-color: ${AppColors.Background};

  display: flex;
  flex-direction: row;

  align-items: center;

  :hover {
    cursor: pointer;
    color: #f4ede8;
  }
`;

export const IconButton = styled(BiLogIn).attrs({})`
  color: ${AppColors.Orange};
  margin-right: 10px;
`;

export const TextButton = styled.span`
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  text-align: center;

  color: #ff9000;
`;
