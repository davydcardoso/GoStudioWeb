import React, { useState } from "react";
import { BsPhone } from "react-icons/bs";
import { RiTimerFlashLine } from "react-icons/ri";

import * as S from "./styles";

type Props = {
  id: string;
  username: string;
  phonenumber: string;
  appointmentStatus: string;
  appointmentHour: string;
};

export const ItemList: React.FC<Props> = ({
  id,
  username,
  appointmentHour,
  phonenumber,
  appointmentStatus,
}) => {
  const [visibleStatus, setVisibleStatus] = useState(false);

  return (
    <S.Container>
      <S.ContainerUserPhoto>
        <S.StatusAppointment
          onClick={() => setVisibleStatus(!visibleStatus)}
          status={appointmentStatus}
        />
        {visibleStatus && (
          <S.TooltTipStatusUser status={appointmentStatus}>
            {appointmentStatus}
          </S.TooltTipStatusUser>
        )}
        <S.UserPhotoLoader color={"#FF9000"} size={50} />
      </S.ContainerUserPhoto>
      <S.UserName>{username}</S.UserName>
      <S.ContainerDetailsAppointment>
        <S.RowItemDetail>
          <RiTimerFlashLine size={20} color={"#FF9000"} />
          <S.TimeAppointment>{appointmentHour}</S.TimeAppointment>
        </S.RowItemDetail>
        <S.RowItemDetail>
          <BsPhone size={20} color={"#FF9000"} />
          <S.TimeAppointment>
            {phonenumber ? phonenumber : "Sem contato"}
          </S.TimeAppointment>
        </S.RowItemDetail>
      </S.ContainerDetailsAppointment>
    </S.Container>
  );
};
