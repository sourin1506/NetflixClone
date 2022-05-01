import React, { useContext, useEffect } from "react";
import Form from "../components/form";
import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/header";
import { FirebaseContext } from "../context/firebasecontext";
import { LoginContext } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";
import { app } from "../lib/firebase-config";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { LoggedContext } from "../context/loggedstatus";
export default function Signin() {
  const { logindata, setlogin } = useContext(LoginContext);
  const { islogged, setlogged } = useContext(LoggedContext);
  const { app } = useContext(FirebaseContext);
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    //firebase work
    signInWithEmailAndPassword(app, logindata.email, logindata.password)
      .then(() => {
        // some work
        setlogged(true);
        navigate("/profile");
        console.log(app.currentUser.displayName);
      })
      .catch((err) => {
        setlogin({ email: "", password: "", error: err.message });
      });
  };
  /* to check value of login data */
  // useEffect(() => {
  //   console.log(logindata);
  // }, [logindata]);
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign in</Form.Title>
          {logindata.error && logindata.email == "" ? (
            <Form.Error>{logindata.error}</Form.Error>
          ) : (
            ""
          )}
          <Form.Base onSubmit={handlesubmit}>
            <Form.Input
              type="text"
              placeholder="Email"
              value={logindata.email}
              name="email"
              onChange={(e) =>
                setlogin({
                  ...logindata,
                  [e.target.name]: e.target.value,
                  error: "",
                  //using the logic that when i type something the error mssg disappears but again if i use backspace to delete the error mssg shouldn't reappear
                })
              }
            ></Form.Input>
            <Form.Input
              type="password"
              placeholder="Password"
              value={logindata.password}
              name="password"
              onChange={(e) =>
                setlogin({
                  ...logindata,
                  [e.target.name]: e.target.value,
                  error: "",
                })
              }
            ></Form.Input>
            <Form.Submit disabled={0} type="submit">
              Sign in
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New to NetFlix?<Form.Link to="/signup">Sign up Now</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.<Form.Link to="/signin">Learn More</Form.Link>
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
