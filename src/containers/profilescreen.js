import React, { useContext, useState, useEffect } from "react";
import ProfileScreen from "../components/ProfileScreen";
import { RegisterContext } from "../context/RegisterContext";
import { Link, useNavigate } from "react-router-dom";
import HeaderContainer from "./header";
import logo from "../logo.svg";

import { Header } from "../components";
import { FirebaseContext } from "../context/firebasecontext";
import { updateDoc, doc } from "firebase/firestore";
import { LoggedContext } from "../context/loggedstatus";
export default function Pricing_Table() {
  const [clicked, setclicked] = useState(true);
  const [buttontext, setbuttontext] = useState("Sign-Out"); //for the button at the end

  const { Userdata, setUserdata, app, db } = useContext(FirebaseContext);
  const { setlogged } = useContext(LoggedContext);
  const [picnum, setpicnum] = useState(Userdata.pic);
  const [buttontext1, setbuttontext1] = useState(
    Userdata.plan == "Basic Plan" ? "Current Plan" : "Subscribe"
  );
  const [buttontext2, setbuttontext2] = useState(
    Userdata.plan == "Standard Plan" ? "Current Plan" : "Subscribe"
  );
  const [buttontext3, setbuttontext3] = useState(
    Userdata.plan == "Premium Plan" ? "Current Plan" : "Subscribe"
  );

  useEffect(() => {
    setUserdata({ ...Userdata, pic: picnum });
  }, [picnum]);
  useEffect(() => {
    setbuttontext("Sign-Out");
  }, []);

  const navigate = useNavigate();
  const updatedata = async () => {
    let usersCollectionRef = "";
    if (!app.currentUser)
      usersCollectionRef = doc(db, "LoginData", "wcykoABjb5azukjT73ocAIJmjMa2");
    else usersCollectionRef = doc(db, "LoginData", app.currentUser.uid);
    await updateDoc(usersCollectionRef, {
      pic: Userdata.pic,
      plan: Userdata.plan,
    });
    navigate("/browse");
  };
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo
            to="/browse"
            src="/images/icons/cross.png"
            style={{
              objectFit: "contain",
              width: "40px",
              height: "60px",
              marginLeft: "35px",
            }}
          />
        </Header.Frame>
      </Header>

      <ProfileScreen>
        <ProfileScreen.Body>
          <ProfileScreen.Title>Edit Plans</ProfileScreen.Title>
          <ProfileScreen.Info>
            <ProfileScreen.Avatar
              src={`/images/users/${picnum}.png`}
              onClick={() => {
                setpicnum(picnum == 5 ? 1 : picnum + 1);
                setbuttontext("Update User");
              }}
            />
            <ProfileScreen.Details>
              <ProfileScreen.SubTitle>
                {Userdata.username}
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
                    setbuttontext("Update User");
                    if (!clicked && buttontext1 == "Subscribe") {
                      setbuttontext1("Current Plan");
                      setUserdata({
                        ...Userdata,
                        plan: "Basic Plan",
                      });
                      setclicked(true);
                    } else if (buttontext1 === "Current Plan") {
                      setclicked(false);
                      setbuttontext1("Subscribe");
                      setUserdata({
                        ...Userdata,
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
                    setbuttontext("Update User");
                    if (!clicked && buttontext2 == "Subscribe") {
                      setclicked(true);
                      setbuttontext2("Current Plan");
                      setUserdata({
                        ...Userdata,
                        plan: "Standard Plan",
                      });
                    } else if (buttontext2 === "Current Plan") {
                      setclicked(false);
                      setbuttontext2("Subscribe");
                      setUserdata({
                        ...Userdata,
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
                    setbuttontext("Update User");
                    if (!clicked && buttontext3 == "Subscribe") {
                      setclicked(true);
                      setbuttontext3("Current Plan");
                      setUserdata({
                        ...Userdata,
                        plan: "Premium Plan",
                      });
                    } else if (buttontext3 === "Current Plan") {
                      setclicked(false);
                      setbuttontext3("Subscribe");
                      setUserdata({
                        ...Userdata,
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
                  if (buttontext == "Update User") updatedata();
                  else {
                    setlogged(false);
                    navigate("/");
                  }
                }}
              >
                {buttontext}
              </ProfileScreen.Button>
            </ProfileScreen.Details>
          </ProfileScreen.Info>
        </ProfileScreen.Body>
      </ProfileScreen>
    </>
  );
}
