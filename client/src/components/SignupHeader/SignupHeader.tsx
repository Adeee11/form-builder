import { Container, Text, LoginButton } from "./SignupHeader.styles";

const SignupHeader = () => {
  return (
    <>
      <Container>
        <Text>Already have an account?</Text>
        <LoginButton to={"/login"}>Login</LoginButton>
      </Container>
    </>
  );
};

export default SignupHeader;
