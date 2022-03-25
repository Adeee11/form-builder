import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 10px 3vw;
  max-width: 600px;
  margin: 0 auto;
`;

const Avatar = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border: blue 2px solid;
  border-radius: 50%;
  padding: 4px;
  width: 30px;
  height: 30px;
  color: white;
  background: blue;
  text-transform: capitalize;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
`;

const FormNameContainer = styled.div`
  display: flex;
  border-bottom: 1px solid gray;
  padding: 10px 0;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid gray;
  padding: 10px 0;
  span {
    cursor: pointer;
  }
`;

const StyledLink = styled(Link)`
  &:active,
  &:hover {
    text-decoration: none;
    color: black;
  }
`;

const Heading = styled.h1`
  font-size: 14px;
  font-weight: 700;
`;

const FormName = styled.input.attrs((props) => ({
  type: "text",
}))`
  font-weight: 400;
  font-size: 25px;
  width: 100%;
  outline: none;
  border: none;
  margin-left: 15px;
`;
const WorkspaceName = styled.h1`
  font-size: 14px;
  font-weight: 400;
`;

const PublishContainer = styled.div`
  display: flex;
  padding: 10px 0;
  justify-content: space-evenly;
  border-bottom: 1px solid gray;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  button {
    padding: 4px 8px;
    border-radius: 5px;
    font-size: 14px;
  }
`;

const Main = styled.main`
  margin: 0 auto;
  margin-top: 20px;
  border-top: 8px solid blue;
  border-radius: 6px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  max-width: 90vw;
`;

const Form = styled.form`
  padding: 20px 0;
  flex-direction: column;

  /* div {
    margin-top: 10px;
    text-align: center;
  } */
`;

const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 20px;
  padding: 5px 15px;
`;

const Input = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid lightblue;
  padding: 6px;
  border-radius: 6px;
  width: 100%;
`;

const Question = styled.input`
  outline: none;
  border: none;
  width: 100%;
`;

const PlusButton = styled.button`
  padding: 5px 10px;
  border: transparent;
  font-size: 20px;
`;

const PlusButtonContainer = styled.div`
  text-align: center;
  margin: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const QuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Textarea = styled.textarea`
  outline: none;
  border: 1px solid lightblue;
  width: 100%;
  height: auto;
  border-radius: 5%;
`;

const Submit = styled.input.attrs((props) => ({
  type: "submit",
  value: props.value,
}))`
  max-width: 150px;
  padding: 5px 10px;
  font-size: 14px;
  color: white;
  background: blue;
  border: blue 1px solid;
  border-radius: 5px;
`;

const Option = styled.input.attrs((props) => ({
  type: "radio",
}))`
  height: auto;
  outline: none;
  border: gray 1px solid;
  border-radius: 4%;
  padding: 5px 10px;
  /* margin-right: 20px; */
  visibility: hidden;
`;

const AddNewOption = styled.input.attrs((props) => ({
  type: "text",
}))`
  outline: none;
  border: none;
  border-bottom: 1px solid gray;
  padding: 5px 10px;
  width: 100%;
`;

const OptionsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  padding: 6px;
  padding-bottom: 22px;
  border: 1px solid #add8e6;
  border-radius: 4px;
  background: #add8e6;
  button {
    background: transparent;
  }
`;

const NewOptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export {
  Wrapper,
  Avatar,
  Header,
  FormNameContainer,
  LinkContainer,
  StyledLink,
  WorkspaceName,
  FormName,
  PublishContainer,
  ItemContainer,
  Main,
  Form,
  Heading,
  PlusButton,
  FormFields,
  Input,
  PlusButtonContainer,
  Question,
  QuestionContainer,
  Textarea,
  ButtonContainer,
  Submit,
  Option,
  AddNewOption,
  OptionsContainer,
  NewOptionContainer,
};
