import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuTopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
  font-size: 20px;
  min-height: 100%;
`;
const Container = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;
const Text = styled.span``;
type ToggleProp = {
  showMenu: boolean;
};
const Menu = styled.div<ToggleProp>`
  display: ${({ showMenu }) => (showMenu ? "grid" : "none")};
  grid-template-rows: 1fr 1fr 1fr auto;
  min-width: 200px;
  height: 100%;
  background: white;
  border-right: 1px solid gray;
  border-bottom:  1px solid gray;
 
`;

const Workspaces = styled.div`
  /* border: 2px solid red; */
`;
const PersonalDetails = styled.div`
  /* border: 2px solid red; */
  grid-row: 3;
`;
const HelpLinks = styled.div`
  /* border: 2px solid red; */
  grid-row: 4;
`;

const Button = styled.button``;
const Username = styled.h4``;
const Heading = styled.h5``;
const BlueLink = styled(Link)``;
export {
  MenuTopBar,
  Container,
  Text,
  Menu,
  Workspaces,
  PersonalDetails,
  HelpLinks,
  Button,
  Username,
  Heading,
  BlueLink,
};
