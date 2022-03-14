import { Description } from "../../components/Description";
import { SignupForm } from "../../components/SignupForm";
import { SignupHeader } from "../../components/SignupHeader";
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
            headingSize={"30px"}
            textSize={"20px"}
          />
          <SignupForm />
        </Container>
    </>
  );
};

export default SignUpPage;
