import { SubmitHandler, useForm } from "react-hook-form";
import { InputField } from "../InputField";
import { LogoButton } from "../LogoButton";
import {FcGoogle} from 'react-icons/fc'
import {SiMicrosoft} from 'react-icons/si'
import {
  Container,
  Field,
  Form,
  GrayLink,
  HorizontalLine,
  Or,
  Submit,
} from "./LoginForm.styles";

type FormFields = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormFields>();
  const onSubmit: SubmitHandler<FormFields> = (data) => console.log(data);

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Field>
          <InputField
            type={"email"}
            label={"Email"}
            placeHolder={"Email"}
            register={register}
            registerName={"email"}
          />
        </Field>
        <Field>
          <InputField
            type={"password"}
            label={"Password"}
            placeHolder={"Password"}
            register={register}
            registerName={"password"}
          />
        </Field>
        <GrayLink to={"/"}>Forgot password?</GrayLink>

        <Field>
          <Submit type={"submit"} value={"Log in to Typeform"} />
        </Field>
        <Container>
          <HorizontalLine />
          <Or>OR</Or>
          <HorizontalLine />
        </Container>
        <LogoButton icon={<FcGoogle/>} text={'Sign in with Google'}/>
        <LogoButton icon={<SiMicrosoft/>} text={'Sign in with Microsoft'}/>
        <GrayLink to={"/"}>Sign in with SSO</GrayLink>
      </Form>
    </>
  );
};

export default LoginForm;
