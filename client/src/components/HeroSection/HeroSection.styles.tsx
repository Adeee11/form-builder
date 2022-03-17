import styled from "styled-components";

const Container = styled.div``;

const Wrapper = styled.section`
  display: grid;
  background: #f8f5f3;
  grid-template-rows: auto auto 1fr auto;
  text-align: center;
  grid-row-gap: 20px;
  padding-top: 50px;
 
  @media (min-width: 1024px) {
    grid-template-rows: auto 1fr 2fr;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 0;
    text-align: left;
    padding-right: 30px;
  }
`;
const VideoContainer = styled(Container)`
  @media (min-width: 1024px) {
    grid-row: 1/4;
    grid-column: 2;
  }
`;
const ButtonContainer = styled(Container)`
  text-align: center;
  grid-area: "button";
  @media (min-width: 1024px) {
    grid-row: 2;
    grid-column: 1;
    display: flex;
    align-items: flex-end;
    padding: 32px;
    margin-left: 80px;
  }
`;

const DescriptionContainer = styled(Container)`
  max-width: 390px;
  justify-self: center;

  @media (min-width: 1024px) {
    justify-self: flex-start;
    grid-row: 1;
    grid-column: 1;
    padding: 32px;
    margin-left: 80px;
  }
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
`;

const ListContainer = styled(Container)`
  grid-area: "list";
  padding-left: 32px;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 1024px) {
      align-items: flex-start;
    }
  }
  @media (min-width: 1024px) {
    grid-column: 1;
    grid-row: 3;
    margin-left: 80px;
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
