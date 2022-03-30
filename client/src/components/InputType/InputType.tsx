import { InputBox } from "./InputType.styles";

type propType = {
  fieldType: string;
  onchange: (arg0: string, arg1: number) => void;
  index: number;
};
const InputType = ({ fieldType, onchange, index }: propType) => {
  let content;
  if (fieldType === "text")
    content = (
      <InputBox>
        <input
          type="text"
          placeholder="Enter your answer here."
          onChange={(e: any) => onchange(e.target.value, index)}
          className="input"
        />
      </InputBox>
    );

  if (fieldType === "textArea")
    content = (
      <InputBox>
        <textarea
          onChange={(e: any) => onchange(e.target.value, index)}
        ></textarea>
      </InputBox>
    );

  if (fieldType === "email")
    content = (
      <InputBox>
        <input
          type="email"
          onChange={(e: any) => onchange(e.target.value, index)}
        />
      </InputBox>
    );

  if (fieldType === "number")
    content = (
      <InputBox>
        <input
          type="number"
          onChange={(e: any) => onchange(e.target.value, index)}
        />
      </InputBox>
    );
  if (fieldType === "url")
    content = (
      <InputBox>
        <input
          type="url"
          onChange={(e: any) => onchange(e.target.value, index)}
        />
      </InputBox>
    );
  return <>{content}</>;
};

export default InputType;
