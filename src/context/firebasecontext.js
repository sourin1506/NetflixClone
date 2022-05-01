import { createContext, useState } from "react";
import { app, db } from "../lib/firebase-config";
export const FirebaseContext = createContext();

export default function FirebaseContextProvider({ children }) {
  const [Userdata, setUserdata] = useState({
    username: "",
    email: "",
    password: "",
    error: "",
    plan: "",
    pic: "",
  });
  return (
    <FirebaseContext.Provider value={{ app, db, Userdata, setUserdata }}>
      {children}
    </FirebaseContext.Provider>
  );
}
