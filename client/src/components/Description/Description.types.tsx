import styled from "styled-components";

interface Props {
  fontSize: number;
}

const Text = styled.p<Props>`
  font-size: ${({ fontSize }) => fontSize};
  margin: 0 auto;

  margin-bottom: 40px;
  max-width: 400px;
`;

const Heading = styled.h2<Props>`
  font-size: ${({ fontSize }) => fontSize || 25};
  margin: 20px 0;
`;

export { Heading, Text };
