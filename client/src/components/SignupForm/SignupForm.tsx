import { SubmitHandler, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { SiMicrosoft } from "react-icons/si";
import { Dropdown } from "../Dropdown";
import { InputField } from "../InputField";
import { LogoButton } from "../LogoButton";
import { RadioButton } from "../RadioButton";
import {
  BlackLink,
  CheckBoxContainer,
  Container,
  Field,
  Form,
  HorizontalLine,
  Or,
  Submit,
  Text,
  DropdownContainer,
} from "./SignupForm.styles";
import { useMutation } from "@apollo/client";
import { SIGN_UP } from "./queries";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../providers/app/hooks";
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
  // redux
  const userName = useAppSelector((state) => state.user.username);
  const dispatch = useAppDispatch();
  // useform hook
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormFields>();
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
  // if (data) console.log("Data", data);

  const checkboxLabels = [
    <Text>
      I agree to Typeform’s <BlackLink to={"/"}>Terms of Service</BlackLink>
    </Text>,
    <Text>
      I accept Typeform's use of my data for the service and everything else
      described in the <BlackLink to={"/"}>Privacy Policy</BlackLink> and{" "}
      <BlackLink to={"/"}>Data Processing Agreement</BlackLink> ,
    </Text>,
  ];

  const RadioHeadings = [
    "Get useful tips, inspiration, and offers via e-communication.",
    "Tailor Typeform to my needs based on my activity. See Privacy Policy",
    "Enrich my data with select third parties for more relevant content. See Privacy Policy",
  ];

  // Check the error with radio button later. Didn't render it as an item of dropdown.
  // Check what the error is
  // also check how to create radio button using react-hook-form
  const Radios = [
    <RadioButton
      heading={RadioHeadings[0]}
      options={[
        {
          value: "Yes",
          register: register,
          registerValue: "emailLetter",
          label: "Yes",
        },
        {
          value: "No",
          register: register,
          registerValue: "emailLetter",
          label: "No",
        },
      ]}
    />,
    <RadioButton
      heading={RadioHeadings[1]}
      options={[
        {
          value: "Yes",
          register: register,
          registerValue: "customizeTypeform",
          label: "Yes",
        },
        {
          value: "No",
          register: register,
          registerValue: "customizeTypeform",
          label: "No",
        },
      ]}
    />,
    <RadioButton
      heading={RadioHeadings[2]}
      options={[
        {
          value: "Yes",
          register: register,
          registerValue: "shareData",
          label: "Yes",
        },
        {
          value: "No",
          register: register,
          registerValue: "shareData",
          label: "No",
        },
      ]}
    />,
  ];

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Field>
          {/* <InputField
            type={"email"}
            label={"Email"}
            placeHolder={"Email"}
            register={register}
            registerName={"email"}
          /> */}
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

        {/* <CheckBoxContainer>
          <InputField
            type={"checkbox"}
            label={checkboxLabels[0]}
            register={register}
            registerName={"termsAndCondition"}
          />
        </CheckBoxContainer>

        <CheckBoxContainer>
          <InputField
            type={"checkbox"}
            label={checkboxLabels[1]}
            register={register}
            registerName={"privacyPolicy"}
          />
        </CheckBoxContainer>

        <DropdownContainer>
          <Dropdown heading={"See options"} dropdownItems={Radios} />
        </DropdownContainer> */}

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
