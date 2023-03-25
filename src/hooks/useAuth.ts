import { useCallback, useState } from "react";
import { axiosClient, cookies } from "../networks/apiClient";

interface RegisterDataInterface {
  email: string;
  name: string;
  password: string;
}

interface LoginDataInterface {
  email: string;
  password: string;
}

interface RegisterResponse {
  data: {
    email: string;
    name: string;
  };
  error: string[];
  status: number;
}

interface LoginResponse {
  status: number;
  error: string[];
  data: {
    token: string;
  };
}

const useAuth = () => {
  const [loginResponse, setLoginResponse] = useState<LoginResponse>();
  const [registerResponses, setRegisterResponses] =
    useState<RegisterResponse>();

  const loading = false;
  const isAuthenticated = false;

  const registerAccount = useCallback(
    async ({ email, name, password }: RegisterDataInterface) => {
      try {
        const registerData = {
          email: email,
          name: name,
          password: password,
        };

        const response = await axiosClient.post("/auth/register", registerData);
        setRegisterResponses(response.data);
      } catch (err) {
        console.log("[Register Account]", err);
      }
    },
    []
  );

  const loginAccount = useCallback(
    async ({ email, password }: LoginDataInterface) => {
      try {
        const loginData = {
          email: email,
          password: password,
        };

        const responseLogin = await axiosClient.post("/auth/login", loginData);

        if (responseLogin.data.error === null) {
          cookies.set("jwt_token", responseLogin.data.data.token, {
            httpOnly: true,
          });
        }

        setLoginResponse(responseLogin.data);
      } catch (err) {
        console.log("[Login Account]", err);
      }
    },
    []
  );

  return {
    loading,
    isAuthenticated,
    registerAccount,
    loginAccount,
    registerResponses,
    loginResponse,
  };
};

export default useAuth;
