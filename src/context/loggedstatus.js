import { createContext, useState } from "react";
export const LoggedContext = createContext();
export default function LoggedContextProvider({ children }) {
  const [islogged, setlogged] = useState(false);
  return (
    <LoggedContext.Provider value={{ islogged, setlogged }}>
      {children}
    </LoggedContext.Provider>
  );
}
