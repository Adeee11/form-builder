import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.header``;



const LoginButton = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  margin-right: 12px;
  padding: 8px 16px;
  vertical-align: middle;
  max-height: 50px;
  min-width: 80px;
  border-radius: 2px;
  border: 1px black solid;
  background: transparent;
  color: black;
`;

const Text = styled.span``;
export { Container, LoginButton, Text };
