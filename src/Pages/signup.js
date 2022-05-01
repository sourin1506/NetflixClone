import React, { useContext, useEffect } from "react";
import Form from "../components/form";
import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/header";
import { FirebaseContext } from "../context/firebasecontext";
import { RegisterContext } from "../context/RegisterContext";
import { useNavigate } from "react-router-dom";
import { app } from "../lib/firebase-config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
export default function Signin() {
  const { Registerdata, setRegister } = useContext(RegisterContext);
  const { app } = useContext(FirebaseContext);
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    //firebase work
    createUserWithEmailAndPassword(
      app,
      Registerdata.email,
      Registerdata.password
    )
      .then((result) => {
        // some work
        updateProfile(result.user, {
          displayName: Registerdata.username,
        });
        //console.log(result.user);
      })
      .then(() => navigate("/plans"))
      .catch((err) => {
        setRegister({
          username: "",
          email: "",
          password: "",
          error: err.message,
        });
      });
  };
  /* to check value of Register data */
  // useEffect(() => {
  //   console.log(Registerdata);
  // }, [Registerdata]);
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign in</Form.Title>
          {Registerdata.error ? (
            <Form.Error>{Registerdata.error}</Form.Error>
          ) : (
            ""
          )}
          <Form.Base onSubmit={handlesubmit}>
            <Form.Input
              type="text"
              value={Registerdata.username}
              placeholder="Username"
              name="username"
              onChange={(e) =>
                setRegister({
                  ...Registerdata,
                  [e.target.name]: e.target.value,
                })
              }
            ></Form.Input>
            <Form.Input
              type="text"
              value={Registerdata.email}
              placeholder="Email"
              name="email"
              onChange={(e) =>
                setRegister({
                  ...Registerdata,
                  [e.target.name]: e.target.value,
                })
              }
            ></Form.Input>
            <Form.Input
              type="password"
              placeholder="Password"
              value={Registerdata.password}
              name="password"
              onChange={(e) =>
                setRegister({
                  ...Registerdata,
                  [e.target.name]: e.target.value,
                })
              }
            ></Form.Input>
            <Form.Submit disabled={0} type="submit">
              Choose Plans
            </Form.Submit>
          </Form.Base>

          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.<Form.Link to="/signup">Learn More</Form.Link>
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
