import React, { useContext, useEffect } from "react";
import Feature from "../components/features";
import OptForm from "../components/optform";
import HeaderContainer from "../containers/header";
import FaqContainer from "../containers/faq";
import FooterContainer from "../containers/footer";
import { JumbotronContainer } from "../containers/jumbotron";
import { RegisterContext } from "../context/RegisterContext";
import { useNavigate } from "react-router-dom";
import { LoggedContext } from "../context/loggedstatus";
import { LoginContext } from "../context/LoginContext";
export default function Home() {
  const { setRegister, Registerdata } = useContext(RegisterContext);
  const { setlogin } = useContext(LoginContext);
  const { islogged, setlogged } = useContext(LoggedContext);
  useEffect(() => {
    setlogged(false);
    setlogin({
      email: "",
      password: "",
      error: "",
    });
    setRegister({
      username: "",
      email: "",
      password: "",
      error: "",
      plan: "",
      pic: "",
    });
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited Flims ,TV programes and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere.Cancel anytime</Feature.SubTitle>
          <OptForm>
            <OptForm.Input
              placeholder="Email Address"
              onChange={(e) =>
                setRegister({ ...Registerdata, email: e.target.value })
              }
            ></OptForm.Input>
            <OptForm.Button onClick={() => navigate("/signup")}>
              Try it Now
            </OptForm.Button>
            <OptForm.Break></OptForm.Break>
          </OptForm>
          <OptForm.Text>
            Ready to watch? Enter your email to create or restart your
            membership.
          </OptForm.Text>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqContainer />
      <FooterContainer />
    </div>
  );
}
