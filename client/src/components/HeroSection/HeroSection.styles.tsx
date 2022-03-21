import styled from "styled-components";

const Container = styled.div``;

const Wrapper = styled.section`
  padding-top: 150px;
  display: grid;
  min-height: 100vh;
  background: #f8f5f3;
  grid-gap: 20px;

  z-index: -1;

  @media (max-width: 1024px) {
    grid-template-rows: auto auto 1fr auto;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-rows: repeat(3, auto);
    grid-row-gap: 0px;
  }
`;
const VideoContainer = styled(Container)`
  z-index: 0;
  width: 100vw;
  
  @media (max-width: 1024px) {
    grid-row: 1/4;
    grid-column: 1/3;
    margin-bottom: calc(106.67vw);
  }
  @media (min-width: 1024px) {
    width: auto;
    grid-row: 1 / 4;
    grid-column: 2;
    margin-top: 0;
  }
`;
const ButtonContainer = styled(Container)`
  z-index: 1;
  text-align: center;
  @media (max-width: 1024px) {
    grid-row: 2;
    grid-column: 1/3;
  }
  @media (min-width: 1024px) {
    text-align: left;
    padding-left: 34px;
  }
`;

const DescriptionContainer = styled(Container)`
  z-index: 1;
  text-align: center;
  max-width: 390px;
  width: 90%;
  justify-self: center;
  h2 {
    font-weight: 400;
    max-width: 90%;
    margin: 0 auto;
  }
  p {
    font-weight: 300;
    max-width: 90%;

    margin: 0 auto;
  }
  @media (min-width: 720px) {
    max-width: 500px;
  }
  @media (max-width: 1024px) {
    grid-row: 1;
    grid-column: 1/3;
  }
  @media (min-width: 1024px) {
    text-align: left;
    margin-top: 150px;
  }
`;

const ListContainer = styled(Container)`
  z-index: 1;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 1024px) {
      align-items: flex-start;
      padding: 32px;
    }
  }
  @media (max-width: 1024px) {
    grid-row: 4;
    grid-column: 1/3;
  }
`;

export {
  Container,
  Wrapper,
  VideoContainer,
  ButtonContainer,
  DescriptionContainer,
  ListContainer,
};
