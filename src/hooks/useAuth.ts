import { useCallback, useState } from "react";
import axiosClient from "../networks/apiClient";

interface RegisterDataInterface {
  email: string;
  name: string;
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

const useAuth = () => {
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

  return {
    loading,
    isAuthenticated,
    registerAccount,
    registerResponses,
  };
};

export default useAuth;
