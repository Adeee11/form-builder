import { Description } from "../Description";
import { LoginForm } from "../LoginForm";
import { LoginHeader } from "../LoginHeader";

import { Container } from "./LoginPage.styles";

const SignUpPage = () => {
  const heading = "Typeform";
  const text = "Hello, who’s this?";
  return (
    <>
      <Container>
        <LoginHeader />
        <Description
          heading={heading}
          text={text}
          headingSize={'30px'}
          textSize={'20px'}
        />
        <LoginForm />
      </Container>
    </>
  );
};

export default SignUpPage;
