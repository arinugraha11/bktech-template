import { message } from "antd";
import Cookies from "js-cookie";
import { useCallback, useState } from "react";
import jwtDecode from "jwt-decode";
import axiosClient from "../../networks/apiClient";
import {
  LoginDataInterface,
  LoginResponse,
  RegisterDataInterface,
  RegisterResponse,
} from "./types";

const useAuth = () => {
  const [loginResponse, setLoginResponse] = useState<LoginResponse>();
  const [registerResponses, setRegisterResponses] =
    useState<RegisterResponse>();

  const loading = false;
  const isAuthenticated = Cookies.get("jwt_token");

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
          const token = responseLogin.data.data.token;
          Cookies.set("jwt_token", token);

          const data_user = jwtDecode(token) as { [key: string]: any };

          console.log("[User Data]", data_user);
        }

        setLoginResponse(responseLogin.data);
      } catch (err) {
        console.log("[Login Account]", err);
      }
    },
    []
  );

  const logoutAccount = useCallback(() => {
    Cookies.remove("jwt_token");
    message.success("Logout Success");
  }, []);

  return {
    loading,
    isAuthenticated,
    registerAccount,
    loginAccount,
    logoutAccount,
    registerResponses,
    loginResponse,
  };
};

export default useAuth;
