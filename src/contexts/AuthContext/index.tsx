import React, { createContext, Dispatch, useContext, useReducer } from "react";
import { reducer } from "./reducer";
import { ACTION_TYPE } from "./types";

const AuthContext = createContext({
  email: "",
  id: "",
  image_url: "",
  name: "",
  phone_number: "",
});

const AuthContextDispatch = createContext<Dispatch<ACTION_TYPE>>(() => {});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, {
    email: "",
    id: "",
    image_url: "",
    name: "",
    phone_number: "",
  });

  return (
    <AuthContextDispatch.Provider value={dispatch}>
      <AuthContext.Provider value={{ ...state }}>
        {children}
      </AuthContext.Provider>
    </AuthContextDispatch.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
export const useAuthDispatch = () => useContext(AuthContextDispatch);

export default AuthProvider;
