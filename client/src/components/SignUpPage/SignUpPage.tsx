import { Description } from "../Description";
import { SignupForm } from "../SignupForm";
import { SignupHeader } from "../SignupHeader";
import { Container } from "./SignUpPage.styles";

const SignUpPage = () => {
  const heading = "Typeform";
  const text =
    "Get better data with conversational forms, surveys, quizzes & more.";
  return (
    <>
      <Container>
        <SignupHeader />
        <Description
          heading={heading}
          text={text}
          headingSize={30}
          textSize={24}
        />
        <SignupForm />
      </Container>
    </>
  );
};

export default SignUpPage;
