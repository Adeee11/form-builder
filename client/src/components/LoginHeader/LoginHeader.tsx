import { Container, SignupButton, Text } from "./LoginHeader.styles"

const LoginHeader = () => {
  return (
    <>
      <Container>
          <Text>Don't have an account yet?</Text>
          <SignupButton to={'/signup'} >Sign up</SignupButton>
      </Container>
    </>
  )
}

export default LoginHeader
