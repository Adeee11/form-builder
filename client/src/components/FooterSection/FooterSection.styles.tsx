import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
  padding-top: 50px;
  max-width: 80vw;
  display: flex;
  flex-direction: column;

  ul {
    justify-self: flex-start;
    max-width: 400px;
    margin-left: 5vw;
  }

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 40px;
    margin: 0 auto;
  }
`;
const WhiteLink = styled(Link)`
  color: white;
  text-decoration: none;
  vertical-align: middle;
`;
const IconContainer = styled.div`
  margin-bottom: 20px;
  font-size: 20px;
  margin-left: 5vw;
  svg{
    padding-right: 5px;
    font-size: 25px;
  }
  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column: 4;
    grid-row: 2;
  }
`;

const Container = styled.div`
  grid-row: 4;
  grid-column: 1/5;
  display: flex;
  justify-content: space-around;
`;
const LineBreak = styled.hr`
  margin-bottom: 20px;
  @media (min-width: 900px) {
    grid-row: 3;
    grid-column: 1/5;
  }
`;

export { Container, Wrapper, WhiteLink, IconContainer, LineBreak };
