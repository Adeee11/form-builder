import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.ul`
  font-family: "Poppins", sans-serif;
  list-style: none;
  padding-left: 0;
  margin-bottom: 20px;
`;
const Heading = styled.h3`
  font-size: 16px;
  margin-bottom: 32px;
`;

const Item = styled.li`
  padding: 5px 10px;
`;
const UnstyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export { Container, Heading, Item, UnstyledLink };
