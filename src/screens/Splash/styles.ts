import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";

import { AppColors } from "../../constants/AppColors";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;

  align-items: center;
  justify-content: center;

  background-color: ${AppColors.Background};
`;

export const Loader = styled(ClipLoader).attrs({})`

`;