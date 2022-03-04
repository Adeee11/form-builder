import styled from "styled-components";

interface Props {
  backgroundColor?: string;
}

const Container = styled.div<Props>`
  max-width: 90vw;
  margin: 0 auto;
  padding: 10px 20px;
  background: ${({ backgroundColor }) => backgroundColor || "red"};
  border: blue solid 2px;
  @media (max-width: 900px) {
    text-align: center;
  }
`;

const NavContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax(72px, auto);
`;

const DescriptionContainer = styled(Container)`
  text-align: center;
  padding: 20px 5vw;
`;
const ImageContainer = styled(Container)`
  text-align: center;
`;

const AboutContainer = styled(Container)`
  text-align: center;
`;

const CarouselContainer = styled(Container)`
  text-align: left;
`;

export {
  NavContainer,
  DescriptionContainer,
  ImageContainer,
  AboutContainer,
  CarouselContainer,
  Container,
};
