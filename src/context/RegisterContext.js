import { createContext, useState } from "react";
export const RegisterContext = createContext();
export default function RegisterContextProvider({ children }) {
  const [Registerdata, setRegister] = useState({
    username: "",
    email: "",
    password: "",
    error: "",
    plan: "",
    pic: "",
  });
  return (
    <RegisterContext.Provider value={{ Registerdata, setRegister }}>
      {children}
    </RegisterContext.Provider>
  );
}
