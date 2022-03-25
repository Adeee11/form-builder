import { Dispatch, SetStateAction } from "react";
import { Label, Option, Select } from "./SelectField.styles";

const SelectField = (props: {
  options: string[];
  label: string;
  changeFilter: Dispatch<SetStateAction<string>>;
  filter: string;
}) => {
  const { options, label, changeFilter, filter } = props;
  return (
    <>
      <Label>{label}</Label>
      <Select value={filter} onChange={(e) => changeFilter(e.target.value)}>
        {options.map((option, index) => (
          <Option key={index}>{option}</Option>
        ))}
      </Select>
    </>
  );
};

export default SelectField;
