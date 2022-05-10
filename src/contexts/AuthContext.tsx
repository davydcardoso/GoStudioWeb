import { AxiosError } from "axios";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Buffer } from "buffer";
import { toast } from "react-toastify";

import { api } from "../services/api";

export type UserAuthProps = {
  name: string;
  email: string;
};

interface AuthState {
  token: string;
  user: object;
}

export interface SignInCredentials {
  email: string;
  password: string;
}

export type UserProps = {
  id: string;
  name: string;
  email: string;
  deviceToken: string;
  accountAmbient: string;
  accountDocumentStatus: string;
  roles: string[];
};

interface AuthContextProps {
  user: object;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

type Props = {
  children: ReactNode;
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const token = localStorage.getItem("@gostudio:token");
      const user = localStorage.getItem("@gostudio:user");

      if (token && user) {
        setData({ token: token, user: JSON.parse(user) });
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  const signIn = async ({
    email,
    password,
  }: SignInCredentials): Promise<void> => {
    try {
      setLoading(true);

      const credentials = Buffer.from(`${email}:${password}`).toString(
        "base64"
      );

      const response = await api.post("/users/singin", null, {
        headers: {
          Authorization: `Basic ${credentials}`,
        },
      });

      const { token, user } = response.data;

      const { roles: userRoles } = user as UserProps;

      const rolesMasters = ["ROLE_ADMIN", "ROLE_DEVELOPER"];
      const existsRole = rolesMasters.some((role) => userRoles.includes(role));

      if (!existsRole) {
        toast.error(
          "Ops! Sua conta não possui acesso administrativo ao sistema, por favor entre em contato com a RocketApps",
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

        setLoading(false);
        return;
      }

      localStorage.setItem("@gostudio:token", token);
      localStorage.setItem("@gostudio:user", JSON.stringify(user));

      toast.success("Usuario logado com sucesso!!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setData({ token, user });
      setLoading(false);
    } catch (err: any) {
      console.log(err);
      if (err.response) {
        const error = err as AxiosError;
        const message = error.response?.data as any;
        toast.error(
          JSON.stringify(message) || "Houve um erro ao efetuar o login",
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
      } else {
        toast.error(err.message || "Houve um erro ao efetuar o login", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }

      setLoading(false);
    }
  };

  const signOut = useCallback(async () => {
    setLoading(true);
    localStorage.clear();

    setData({} as AuthState);
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error("useAuth must be used within an AuthProvider");

  return context;
};
