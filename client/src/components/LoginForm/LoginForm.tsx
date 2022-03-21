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
import { useAppDispatch, useAppSelector } from "../../providers/app/hooks";
import { changeToken } from "../../providers/features/tokenSlice";

type FormFields = {
  userName?: string;
  password?: string;
};

const LoginForm = () => {
  // redux
  const accessToken = useAppSelector((state) => state.token.token);
  const dispatch = useAppDispatch();
  //use form hook
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormFields>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormFields> = async (formData) => {
    const user = await logIn({
      variables: {
        user: {
          username: formData.userName,
          password: formData.password,
        },
      },
    });

    // console.log("User Data", user.data);
    // console.log("User error", user.errors);
    // console.log("TEST",user.data.login.access_token )
    (await user.data)
      ? dispatch(changeToken(user.data.login.access_token))
      : console.log("Token didn't receive");
    console.log("Access Token", accessToken);
    user.data ? navigate("/dashboard") : console.error("There's some error");
  };
  // graphql
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
