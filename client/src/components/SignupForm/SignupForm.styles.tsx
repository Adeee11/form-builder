import { Link } from "react-router-dom";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  max-width: 600px;
`;
const RadioButtonContainer = styled.div``;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
  text-align: left;
`;

const CheckBoxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr;
  align-items: center;
  justify-content: left;
  width: 400px;
  margin: 0 auto;
  input {
    width: 20px;
    height: 20px;
    min-width: 20px;
    grid-column: 1/2;
    grid-row: 1;
  }
  label {
    margin-left: 0;
    text-align: left;
    font-size: 14px;
  }
`;

const Submit = styled.input`
  padding: 5px 10px;
  color: white;
  background: #262627;
  font-size: 18px;
  max-width: 80vw;
  min-width: 400px;
  margin: 0 auto;
  margin-bottom: 20px;
`;
const Or = styled.span`
  color: #4c4c4c;
  display: inline-block;
`;
const HorizontalLine = styled.hr`
  max-width: 250px;
  margin: 0 auto;
`;

const BlackLink = styled(Link)`
  color: #262627;
`;
const Text = styled.span``;

const DropdownContainer = styled.div`
  text-align: left;

  p {
    display: flex;
    justify-content: space-around;
    color: #4fb0ae;
    font-size: 14px;
    padding: 5px 10px;
    margin: 20px auto;
  }
  span{
    font-size: 18px;
  }
`;

const Container = styled.div`
`;

export {
  Form,
  RadioButtonContainer,
  Field,
  Submit,
  Or,
  HorizontalLine,
  Container,
  CheckBoxContainer,
  BlackLink,
  Text,
  DropdownContainer,
};
