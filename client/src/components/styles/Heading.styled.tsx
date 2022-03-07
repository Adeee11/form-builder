import styled from "styled-components";

interface Props {
  fontSize?: number;
}

const Title = styled.h1<Props>`
  font-size: ${(props) => props.fontSize || 36};
  margin: 0.1vw 0 16px 0;
`;

const Heading = styled.h2<Props>`
  font-size: ${({ fontSize }) => fontSize || 25};
  margin: 20px 0;
`;

const Brand = styled.h1`
  font-size: 24px;
  padding: 0 20px;
  margin: 10px 0;
  justify-self: flex-start;
`;
const SubHeading = styled.h3<Props>`
  font-size: ${({ fontSize }) => fontSize};
  padding: 0 20px;
  margin: 10px 0;
`;

export { Title, Heading, Brand, SubHeading };
