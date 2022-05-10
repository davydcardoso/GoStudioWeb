import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";

import { AppColors } from "../../../../../constants/AppColors";

export const Container = styled.div`
  width: 640px;
  height: 112px;

  background: #3e3b47;

  border-radius: 10px;

  margin: 10px;

  box-shadow: 5px 5px 5px ${AppColors.BlackMedium};

  display: flex;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;

export const ContainerUserPhoto = styled.div`
  width: 70px;
  height: 70px;

  display: flex;

  align-items: center;
  justify-content: center;

  background-color: ${AppColors.Inputs};
  box-shadow: 4px 4px 5px ${AppColors.BlackMedium};

  border-radius: 10px;

  margin: 20px;

  position: relative;
`;

type StatusAppointmentProps = {
  status: string;
};

const StatusProps = ["PENDING", "CONFIRMED", "CANCELLED", "CONCLUDED"] as const;

type TypeStatus = typeof StatusProps[number];

function returnColorStatusIcon(status: string): string {
  switch (status as TypeStatus) {
    case "CONFIRMED":
      return "green";
    case "CANCELLED":
      return "red";
    case "PENDING":
      return "orange";
    default:
      return "green";
  }
}

export const StatusAppointment = styled.div<StatusAppointmentProps>`
  width: 20px;
  height: 20px;

  position: absolute;
  top: -10px;
  right: -10px;

  border-radius: 50%;

  background-color: ${({ status }) => returnColorStatusIcon(status)};
`;

export const TooltTipStatusUser = styled.span<StatusAppointmentProps>`
  visibility: visible;

  width: 120px;

  background-color: ${({ status }) => returnColorStatusIcon(status)};

  color: #fff;
  text-align: center;

  border-radius: 6px;
  border-bottom-left-radius: 0px;

  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  top: -30px;
  right: -120px;

  z-index: 1;
`;

export const UserPhotoLoader = styled(ClipLoader).attrs({})`
  position: absolute;
  top: -10px;
  right: -10px;
`;

export const UserName = styled.h1`
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;

  color: #f4ede8;
`;

export const ContainerDetailsAppointment = styled.div`
  margin-left: 200px;

  display: flex;
  flex-direction: column;
`;

export const RowItemDetail = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
`;

export const TimeAppointment = styled.h1`
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;

  color: #999591;

  margin-left: 10px;
`;
