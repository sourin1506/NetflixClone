import { createContext, useState } from "react";
export const LoginContext = createContext();
export default function LoginContextProvider({ children }) {
  const [logindata, setlogin] = useState({
    email: "",
    password: "",
    error: "",
  });
  return (
    <LoginContext.Provider value={{ logindata, setlogin }}>
      {children}
    </LoginContext.Provider>
  );
}
