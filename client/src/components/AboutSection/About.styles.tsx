import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.section`
  border: red 1px solid;
  margin: 0 auto;
  text-align: center;
  max-width: 80vw;
`;

const Title = styled.h1`
  font-size: 30px;
`;

const StyledLink = styled(Link)`
    color: black;
`

export { Container, Title, StyledLink };
