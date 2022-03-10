import { SubmitHandler, useForm } from "react-hook-form";
import { InputField } from "../InputField";
import { LogoButton } from "../LogoButton";
import { FcGoogle } from "react-icons/fc";
import { SiMicrosoft } from "react-icons/si";
import {
  Container,
  Field,
  Form,
  GrayLink,
  HorizontalLine,
  Or,
  Submit,
} from "./LoginForm.styles";
import { useMutation } from "@apollo/client";
import { LOG_IN } from "./queries";
import { useNavigate } from "react-router-dom";

type FormFields = {
  userName?: string;
  password?: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormFields>();
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<FormFields> = async (formData) => {
    const user = await logIn({
      variables: {
        user: {
          username: formData.userName,
          password: formData.password,
        },
      },
    });

    console.log("User Data", user.data);
    console.log("User error", user.errors);
    user.data?navigate('/dashboard'):console.error('There\'s some error')
  };

  const [logIn, { loading, error }] = useMutation(LOG_IN);
  if (loading) console.log("loading...", loading);
  if (error) console.error(error);

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Field>
          <InputField
            type={"text"}
            label={"Username"}
            placeHolder={"Username"}
            register={register}
            registerName={"userName"}
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
        <LogoButton icon={<FcGoogle />} text={"Sign in with Google"} />
        <LogoButton icon={<SiMicrosoft />} text={"Sign in with Microsoft"} />
        <GrayLink to={"/"}>Sign in with SSO</GrayLink>
      </Form>
    </>
  );
};

export default LoginForm;
