import { Link } from "react-router-dom";
import styled from "styled-components";

const Form = styled.form`
  display: grid;
`;

const Field = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px 10px;
  text-align: left;
  margin-bottom: 20px;
  input,
  label {
    margin-left: 0;
  }
  input[type="submit"] {
    margin: 0 auto;
  }
`;

const Submit = styled.input`
  padding: 5px 10px;
  color: white;
  background: #262627;
  font-size: 18px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
`;

const HorizontalLine = styled.hr`
  max-width: 250px;
  margin: 0 auto;
`;

const GrayLink = styled(Link)`
  color: #4c4c4c;
  font-size: 14px;
  margin: 20px 0;
`;

const Or = styled.span`
  color: #4c4c4c;
  display: inline-block;
`;

const Container = styled.div``;

export { Container, Form, Or, Field, Submit, HorizontalLine, GrayLink };
