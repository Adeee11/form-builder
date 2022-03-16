import styled from "styled-components";

interface Props {
  fontSize: number | string;
}

const Text = styled.p<Props>`
  font-size: ${({ fontSize }) => fontSize || "20px"};
  
`;

const Heading = styled.h2<Props>`
  font-size: ${({ fontSize }) => fontSize || "25px"};
`;

export { Heading, Text };
