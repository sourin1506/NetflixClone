import React, { useContext, useEffect } from "react";
import SelectedProfile from "../containers/profile";
import { getDoc, doc } from "firebase/firestore";
import { FirebaseContext } from "../context/firebasecontext";

export default function Profile() {
  const { app, db, Userdata, setUserdata } = useContext(FirebaseContext);
  useEffect(() => {
    console.log("useeffect");
    if (app.currentUser == null) getUsers("wcykoABjb5azukjT73ocAIJmjMa2");
    else getUsers(app.currentUser.uid);
  }, []);

  const getUsers = (id) => {
    const docRef = doc(db, "LoginData", id);
    getDoc(docRef).then((doc) => setUserdata(doc.data()));
  };
  return (
    <>
      <SelectedProfile user={Userdata} />
    </>
  );
}
