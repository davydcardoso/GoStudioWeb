import { AxiosError } from "axios";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../contexts/AuthContext";
import { AppointmentsWithUserDto } from "../dtos/AppointmentsWithUserDTO";
import { api } from "../services/api";

export const useAppointment = () => {
  const { signOut } = useAuth();

  const [loading, setLoading] = useState(true);
  const [appointmentsList, setAppointmentsList] = useState<
    AppointmentsWithUserDto[]
  >([]);

  const getAllAppointments = useCallback(async (date: string) => {
    try {
      const token = localStorage.getItem("@gostudio:token");

      const response = await api.get("/appointments/all", {
        headers: { Authorization: `Bearer ${token}` },
        params: { date: date },
      });

      const appointments = response.data
        .appointments as AppointmentsWithUserDto[];

      toast.success(
        `Agendamentos buscados com sucesso, Total: ${appointments.length}`,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );

      setAppointmentsList(appointments);
      setLoading(false);
    } catch (err: any) {
      if (err.response) {
        const error = err as AxiosError;
        const status = error.response?.status;

        if (status === 401 || status === 403) {
          toast.warn("Sua sessão expirou, faça login novamente!!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            onClose: () => signOut(),
          });

          setLoading(false);
          return;
        }

        toast.error(JSON.stringify(error.response?.data), {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setLoading(false);
        return;
      }

      toast.error(err.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, appointmentsList, getAllAppointments };
};
