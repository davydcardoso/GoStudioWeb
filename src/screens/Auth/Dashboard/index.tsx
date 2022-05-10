import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";

import { Header } from "../../../components/Header";
import { useAppointment } from "../../../hooks/useAppointments";
import { formatDate, getCurrentDateFormated } from "../../../services/date";

import { Loading } from "./components/Loading";
import { ItemList } from "./components/ItemList";

import * as S from "./styles";

export const Dashboard: React.FC = () => {
  const { loading, appointmentsList, getAllAppointments } = useAppointment();

  const [currentDate, setCurrentDate] = useState<string>(
    getCurrentDateFormated()
  );

  useEffect(() => {
    getAllAppointments(currentDate);
  }, [currentDate, getAllAppointments]);

  function handleSelectDate(value: any) {
    setCurrentDate(formatDate(value));
  }

  return (
    <S.Container>
      <Header />

      <S.ContainerBody>
        <S.BoxLeft>
          <S.TitlePage>Horários agendados</S.TitlePage>

          <S.ListAppointments>
            {loading ? (
              <Loading />
            ) : (
              appointmentsList.map(
                ({
                  id,
                  name,
                  appointment_time,
                  phoneNumber1,
                  appointment_status,
                }) => (
                  <ItemList
                    id={id}
                    username={name}
                    appointmentHour={appointment_time}
                    phonenumber={phoneNumber1}
                    appointmentStatus={appointment_status}
                  />
                )
              )
            )}
          </S.ListAppointments>
        </S.BoxLeft>

        <S.BoxRight>
          <Calendar onClickDay={(value) => handleSelectDate(value)} />
        </S.BoxRight>
      </S.ContainerBody>
    </S.Container>
  );
};
