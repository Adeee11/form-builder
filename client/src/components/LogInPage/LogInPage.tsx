import { Container } from "../styles/Container.styled";
import { Heading, Title } from "../styles/Heading.styled";
import { SubmitHandler, useForm } from "react-hook-form";
import { Text } from "../styles/Text.styled";
import { Form, Input, Submit, Label } from "../styles/Form.styled";

type Inputs = {
  email: string;
  password: string;
  termsAndCondition: boolean;
  privacyPolicy: boolean;
};

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <>
      <Container>
        <Title>Typeform</Title>
        <Heading>
        Hello, who’s this?
        </Heading>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Container>
            <Label htmlFor={'email'}>Email</Label>
            <Input placeholder={"Email"} {...register("email")} />
          </Container>
          <Container>
            <Label htmlFor="password">Password</Label>
            {/* Need to ask how they had a placeholder in password field  */}
            <Input
              placeholder="Password"
              {...register("password")}
              type="password"
            />
          </Container>

          <Container>
            <Input type="checkbox" {...register("termsAndCondition")} />
            <Text fontSize={16}>I agree to Typeform’s Terms of Service</Text>
          </Container>
          <Container>
            <Input type="checkbox" {...register("privacyPolicy")} />
            <Text fontSize={16}>
              I accept Typeform's use of my data for the service and everything
              else described in the Privacy Policy and Data Processing Agreement
            </Text>
          </Container>
          <Submit value="LogIn to Typeform" />
          <hr />
          <Submit value="Signin with google" />
          <Submit value="Signin with Microsoft" />
        </Form>
      </Container>
    </>
  );
};

export default SignUpPage;
