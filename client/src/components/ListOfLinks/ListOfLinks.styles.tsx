import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.ul``;
const Heading = styled.h3`
  font-size: 16px;
`;

const Item = styled.li`
  padding: 5px 10px;
`;
const UnstyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export { Container, Heading, Item, UnstyledLink };
