import { Description } from "../../components/Description";
import { LoginForm } from "../../components/LoginForm";
import { LoginHeader } from "../../components/LoginHeader";

import { Container } from "./LoginPage.styles";

const LoginPage = () => {
  const heading = "Typeform";
  const text = "Hello, who’s this?";
  return (
    <>
      {" "}
      <LoginHeader />
      <Container>
        <Description
          heading={heading}
          text={text}
          headingSize={"30px"}
          textSize={"20px"}
        />
        <LoginForm />
      </Container>
    </>
  );
};

export default LoginPage;
