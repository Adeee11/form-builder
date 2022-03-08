import { Path, UseFormRegister } from "react-hook-form";
import { Input, Label } from "./InputField.styles";

type FormFields = {
  email:string,
  password:string
  termsAndCondition?:boolean,
  privacyPolicy?:boolean,
  emailLetter?:boolean,
  customizeTypeform?:boolean,
  shareData?:boolean,
}

const InputField = (props: {
  type: string;
  label: string;
  placeHolder?: string;
  register:UseFormRegister<FormFields>;
  registerName:Path<FormFields>
}) => {
  const { type, label, placeHolder,register, registerName } = props;
  return (
    <>
      <Label htmlFor="email">{label}</Label>
      <Input placeholder={placeHolder} type={type} {...register(registerName)}></Input>
    </>
  );
};

export default InputField;
