import styled from "styled-components";

interface Props {
  backgroundColor?: string;
}

const Container = styled.div<Props>`
  max-width: 90%;
  margin: 0 auto;
  padding: 10px 20px;
  background: ${({ backgroundColor }) => backgroundColor || "transparent"};
  /* border: blue solid 2px; */
  @media (max-width: 900px) {
    text-align: center;
  }
`;

const NavContainer = styled(Container)`
  max-width: 100vw;
  display: grid;
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width:900px) {
    grid-template-columns: repeat(3,1fr);
  }
`;

const ToggleOptionsContainer = styled.div`
  background: #131313;
  width: 100vw;
  height: 100vh;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(70px, auto);
  /* display: none */
`;
const SigningContainer = styled.div`
  background: black;
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

const CarouselItemContainer = styled(Container)`
  display: grid;
`;
const IconContainer = styled(Container)`
  max-width: 112px;
  max-height: 112px;
  background: white;
  margin: 10px 9px;
`;

export {
  NavContainer,
  DescriptionContainer,
  ImageContainer,
  AboutContainer,
  CarouselContainer,
  CarouselItemContainer,
  Container,
  IconContainer,
  ToggleOptionsContainer,
  SigningContainer,
};
