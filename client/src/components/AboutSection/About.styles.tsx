import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.section`
  margin: 0 auto;
  margin-bottom: 100px;
  padding-top: 20px;
  text-align: center;
  font-family: "Poppins", sans-serif;
  max-width: 80vw;
`;

const Title = styled.h1`
  font-size: 30px;
  color: #262627;
  font-weight: 300;
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 50px;
`;
const StyledLink = styled(Link)`
  color: black;
`;

const DescriptionContainer = styled.div`
  margin: 50px auto;
  max-width: 400px;
`

export { Container, Title, StyledLink,DescriptionContainer };
