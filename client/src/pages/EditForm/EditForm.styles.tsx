import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 10px 3vw;
`;

const Avatar = styled.span`
  border: blue 2px solid;
  border-radius: 50%;
  padding: 4px 8px;
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
`;

const StyledLink = styled(Link)`
  &:active,
  &:hover {
    text-decoration: none;
    color: black;
  }
`;

const Heading = styled.h1`
  font-weight: 400;
  font-size: 25px;
`;

const FormName = styled.h1`
  font-size: 14px;
  font-weight: 700;
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
  margin-top: 20px;
  border-top: 8px solid blue;
  border-radius: 6px;
`;

const Form = styled.form`
  padding: 20px 0;
  div {
    margin-top: 10px;
    text-align: center;
  }
`;

const PlusButton = styled.button`
  padding: 5px 10px;
  border: transparent;
  font-size: 20px;
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
};
