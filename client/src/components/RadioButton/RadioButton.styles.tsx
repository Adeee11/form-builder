import styled from "styled-components";

const Container = styled.div``;
const Heading = styled.h1`
  font-size: 14px;
  margin-bottom: 8px;
`;
const Option = styled.input.attrs((props) => ({ type: "radio" }))``;
const Label = styled.label`
  font-size: 14px;
  color: #262627;
`;

export { Container, Heading, Option, Label };
