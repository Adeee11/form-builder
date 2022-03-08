import styled from "styled-components";

interface Props {
  fontSize: number | string;
}

const Text = styled.p<Props>`
  font-size: ${({ fontSize }) => fontSize || "20px"};
  margin: 0 auto;
  margin-bottom: 40px;
  max-width: 400px;
`;

const Heading = styled.h2<Props>`
  font-size: ${({ fontSize }) => fontSize || "25px"};
  margin: 20px 0;
`;

export { Heading, Text };
