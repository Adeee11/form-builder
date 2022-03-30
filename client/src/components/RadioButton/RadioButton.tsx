import { UseFormRegister, Path } from "react-hook-form";
import { Container, Heading, Label, Option } from "./RadioButton.styles";

type OptionType = {
  value: string;
  label: string;
  register: UseFormRegister<FormFields>;
  registerValue: Path<FormFields>;
};

type FormFields = {
  email?: string;
  password?: string;
  termsAndCondition?: boolean;
  privacyPolicy?: boolean;
  emailLetter?: boolean;
  customizeTypeform?: boolean;
  shareData?: boolean;
};

const RadioButton = (props: { heading: string; options: OptionType[] }) => {
  const { heading, options } = props;

  return (
    <>
      <Container>
        <Heading>{heading}</Heading>
        {options.map((option, index) => (
          <Container key={index}>
            <Option
              {...option.register(option.registerValue)}
              value={option.value}
            />
            <Label>{option.label}</Label>
          </Container>
        ))}
      </Container>
    </>
  );
};

export default RadioButton;
