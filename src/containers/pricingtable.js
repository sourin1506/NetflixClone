import React, { useContext, useEffect, useState } from "react";
import ProfileScreen from "../components/ProfileScreen";
import { RegisterContext } from "../context/RegisterContext";
import { Link, useNavigate } from "react-router-dom";
import HeaderContainer from "./header";
import logo from "../logo.svg";
import { Header } from "../components";
import { FirebaseContext } from "../context/firebasecontext";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { LoggedContext } from "../context/loggedstatus";
export default function Pricing_Table() {
  const [picnum, setpicnum] = useState(1);
  const [buttontext1, setbuttontext1] = useState("Subscribe");
  const [buttontext2, setbuttontext2] = useState("Subscribe");
  const [buttontext3, setbuttontext3] = useState("Subscribe");
  const [clicked, setclicked] = useState(false);

  const { Registerdata, setRegister } = useContext(RegisterContext);
  const { setlogged, islogged } = useContext(LoggedContext);
  const { app, db } = useContext(FirebaseContext);
  const navigate = useNavigate();
  const addUser = async () => {
    console.log(app.currentUser.uid);
    const usersCollectionRef = doc(db, "LoginData", app.currentUser.uid);
    await setDoc(usersCollectionRef, Registerdata);
    setlogged(true);
  };
  useEffect(() => {
    if (islogged) navigate("/browse");
  }, [islogged]);
  //to set picnumber due to late setting for usestate
  useEffect(() => {
    setRegister({ ...Registerdata, pic: picnum });
  }, [picnum]);
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to="/" src={logo} />
        </Header.Frame>
      </Header>
      <ProfileScreen>
        <ProfileScreen.Body>
          <ProfileScreen.Title>Select Plans</ProfileScreen.Title>
          <ProfileScreen.Info>
            <ProfileScreen.Avatar
              src={`/images/users/${picnum}.png`}
              onClick={() => setpicnum(picnum == 5 ? 1 : picnum + 1)}
            />
            <ProfileScreen.Details>
              <ProfileScreen.SubTitle>
                {Registerdata.email}
              </ProfileScreen.SubTitle>
              <h3 style={{ padding: "10px" }}>Plans</h3>
              <ProfileScreen.Info
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: "20px",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: 12,
                  }}
                >
                  <h4 style={{ fontSize: 15 }}>Basic Plans</h4>
                  <h3>480p</h3>
                </div>
                <button
                  onClick={() => {
                    if (!clicked && buttontext1 == "Subscribe") {
                      setbuttontext1("Current Plan");
                      setRegister({
                        ...Registerdata,
                        plan: "Basic Plan",
                      });
                      setclicked(true);
                    } else if (buttontext1 === "Current Plan") {
                      setclicked(false);
                      setbuttontext1("Subscribe");
                      setRegister({
                        ...Registerdata,
                        plan: "",
                      });
                    }
                  }}
                  style={{
                    backgroundColor: "red",
                    padding: "5px",
                    fontWeight: 600,
                    color: "white",
                    border: "1px solid white",
                  }}
                >
                  {buttontext1}
                </button>
              </ProfileScreen.Info>
              <ProfileScreen.Info
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: "20px",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: 12,
                  }}
                >
                  <h4 style={{ fontSize: 15 }}>Standard Plans</h4>
                  <h3>720p</h3>
                </div>
                <button
                  onClick={() => {
                    if (!clicked && buttontext2 == "Subscribe") {
                      setclicked(true);
                      setbuttontext2("Current Plan");
                      setRegister({
                        ...Registerdata,
                        plan: "Standard Plan",
                      });
                    } else if (buttontext2 === "Current Plan") {
                      setclicked(false);
                      setbuttontext2("Subscribe");
                      setRegister({
                        ...Registerdata,
                        plan: "",
                      });
                    }
                  }}
                  style={{
                    backgroundColor: "red",
                    padding: "5px",
                    border: "1px solid white",
                    fontWeight: 600,
                    color: "white",
                  }}
                >
                  {buttontext2}
                </button>
              </ProfileScreen.Info>
              <ProfileScreen.Info
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: "20px",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: 12,
                  }}
                >
                  <h4 style={{ fontSize: 15 }}>Premium Plan</h4>
                  <h3>1080p</h3>
                </div>
                <button
                  onClick={() => {
                    if (!clicked && buttontext3 == "Subscribe") {
                      setclicked(true);
                      setbuttontext3("Current Plan");
                      setRegister({
                        ...Registerdata,
                        plan: "Premium Plan",
                      });
                    } else if (buttontext3 === "Current Plan") {
                      setclicked(false);
                      setbuttontext3("Subscribe");
                      setRegister({
                        ...Registerdata,
                        plan: "",
                      });
                    }
                  }}
                  style={{
                    backgroundColor: "red",
                    padding: "5px",
                    border: "1px solid white",
                    fontWeight: 600,
                    color: "white",
                  }}
                >
                  {buttontext3}
                </button>
              </ProfileScreen.Info>

              <ProfileScreen.Button
                onClick={() => {
                  if (Registerdata.username == "") alert("No data");
                  else addUser();
                }}
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "20px",
                  fontWeight: 600,
                }}
              >
                {" "}
                Sign-in
              </ProfileScreen.Button>
              {/* <ProfileScreen.Button
                onClick={() => {
                  updateProfile(app.currentUser, {
                    photoURL: picnum,
                  });
                  console.log(Registerdata);
                }}
              >
                console
              </ProfileScreen.Button> */}
            </ProfileScreen.Details>
          </ProfileScreen.Info>
        </ProfileScreen.Body>
      </ProfileScreen>
    </>
  );
}
