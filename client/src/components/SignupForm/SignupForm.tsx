import { SubmitHandler, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { SiMicrosoft } from "react-icons/si";
import { InputField } from "../InputField";
import { LogoButton } from "../LogoButton";
import {
  Container,
  Field,
  Form,
  HorizontalLine,
  Or,
  Submit,
} from "./SignupForm.styles";
import { useMutation } from "@apollo/client";
import { SIGN_UP } from "./queries";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../providers/app/hooks";
import { changeUser } from "../../providers/features/userSlice";

type FormFields = {
  email?: string;
  password?: string;
  userName?: string;
  termsAndCondition?: boolean;
  privacyPolicy?: boolean;
  emailLetter?: boolean;
  customizeTypeform?: boolean;
  shareData?: boolean;
};

const SignupForm = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<FormFields>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormFields> = async (formData) => {
    const user = await signUp({
      variables: {
        user: {
          username: formData.userName,
          password: formData.password,
        },
      },
    });
    console.log("User Data", user.data);
    console.log("User Errors", user.errors);
    if (await user.data) {
      const newUser: { username: string; id: string } = {
        username: user.data.signUp.username,
        id: user.data.signUp.id,
      };
      dispatch(changeUser(newUser));
      navigate("/login");
    }
  };

  const [signUp, { loading, error }] = useMutation(SIGN_UP);

  if (loading) console.log("Loading...");
  if (error) console.log("My Error: ", error);

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

        <Field>
          <Submit type={"submit"} value={"Create my free account"} />
        </Field>
        <Container>
          <HorizontalLine />
          <Or>OR</Or>
          <HorizontalLine />
        </Container>
        <LogoButton icon={<FcGoogle />} text={"Sign in with Google"} />
        <LogoButton icon={<SiMicrosoft />} text={"Sign in with Microsoft"} />
      </Form>
    </>
  );
};

export default SignupForm;
