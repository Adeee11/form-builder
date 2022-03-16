import { Link } from "react-router-dom";
import styled from "styled-components";

const Form = styled.form`
  display: grid;
`;

const Field = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
  text-align: left;
  margin-bottom: 20px;
  input{
    max-width: 80%;
  }
`;

const Submit = styled.input`
  padding: 5px 10px;
  color: white;
  background: #262627;
  font-size: 18px;
  max-width: 80vw;
  min-width: 300px;
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

const Container = styled.div`
`

export {
  Container,
  Form,
  Or,
  Field,
  Submit,
  HorizontalLine,
  GrayLink,
};
