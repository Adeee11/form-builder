import styled from "styled-components";

interface Props {
  backgroundColor?: string;
}

const Container = styled.div<Props>`
  max-width: 90%;
  margin: 0 auto;
  padding: 10px 20px;
  background: ${({ backgroundColor }) => backgroundColor || "transparent"};
  border: blue solid 2px;
  @media (max-width: 900px) {
    text-align: center;
  }
`;

const ImageContainer = styled(Container)`
  text-align: center;
`;
const CarouselContainer = styled(Container)`
  text-align: left;
`;

export {Container, CarouselContainer, ImageContainer}