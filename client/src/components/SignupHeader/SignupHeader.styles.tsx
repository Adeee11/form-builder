import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.header`
  text-align: right;
  padding: 20px 5px;
`;

const LoginButton = styled(Link)`
  text-decoration: none;
  font-size: 12px;
  margin-left: 10px;
  margin-right: 12px;
  padding: 8px 12px 6px;
  vertical-align: middle;
  max-height: 50px;
  min-width: 80px;
  border-radius: 2px;
  border: 1px black solid;
  background: transparent;
  color: #262627;
`;

const Text = styled.span`
  font-size: 14px;
  color: #4c4c4c;
`;
export { Container, LoginButton, Text };
