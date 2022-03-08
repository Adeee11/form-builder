import { SubmitHandler, useForm } from "react-hook-form";
import { InputField } from "../InputField";
import { Field, Form, Submit } from "./SignupForm.styles";

type FormFields = {
  email: string;
  password: string;
  termsAndCondition?: boolean;
  privacyPolicy?: boolean;
  emailLetter?: boolean;
  customizeTypeform?: boolean;
  shareData?: boolean;
};

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormFields>();
  const onSubmit: SubmitHandler<FormFields> = (data) => console.log(data);

  const checkboxLabels = [
    "I agree to Typeform’s Terms of Service",
    "I accept Typeform's use of my data for the service and everything else described in the Privacy Policy and Data Processing Agreement",
  ];

  const RadioHeadings = [
    "Get useful tips, inspiration, and offers via e-communication.",
    "Tailor Typeform to my needs based on my activity. See Privacy Policy",
    "Enrich my data with select third parties for more relevant content. See Privacy Policy",
  ];
  const options = ["Yes", "No"];
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

        <Field>
          <InputField
            type={"checkbox"}
            label={checkboxLabels[0]}
            register={register}
            registerName={"termsAndCondition"}
          />
        </Field>

        <Field>
          <InputField
            type={"checkbox"}
            label={checkboxLabels[1]}
            register={register}
            registerName={"privacyPolicy"}
          />
        </Field>
        <Field>
          <Submit type={"submit"} value={"Create my free account"} />
        </Field>
      </Form>
    </>
  );
};

export default SignupForm;
