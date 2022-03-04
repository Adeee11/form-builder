import { Text } from "../styles/Text.styled";
import { Heading } from "../styles/Heading.styled";

const Description = (props:{
    heading:string,
    text:string,
    headingSize:number,
    textSize:number
}) => {
    const {heading, text, headingSize, textSize} = props
  return (
    <>
  <Heading fontSize={headingSize}>{heading}</Heading>
      <Text fontSize={textSize}>
        {text}
      </Text>
    </>
  );
};

export default Description;
