import { Label, Option, Select } from "./SelectField.styles";

const SelectField = (props: { options: string[]; label: string }) => {
  const { options, label } = props;
  return (
    <>
      <Label>{label}</Label>
      <Select>
        {options.map((option, index) => (
          <Option key={index}>{option}</Option>
        ))}
      </Select>
    </>
  );
};

export default SelectField;
