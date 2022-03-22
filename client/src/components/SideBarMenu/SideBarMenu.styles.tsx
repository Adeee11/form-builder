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
  border-bottom: 1px solid gray;
`;

const Workspaces = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto 1fr;
  justify-content: space-evenly;
  padding: 2px;
`;
const PersonalDetails = styled.div`
  /* border: 2px solid red; */
  grid-row: 3;
`;
const HelpLinks = styled.div`
  /* border: 2px solid red; */
  grid-row: 4;
`;

const ButtonContainer = styled.div`
  padding: 2px;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Button = styled.button`
  border: transparent;
  padding: 5px 10px;
  background: rgba(120, 120, 120, 0.3);
  flex-basis: auto;
`;
const Username = styled.h4``;
const Heading = styled.h5``;
const BlueLink = styled(Link)``;
const FAQLink = styled(Link)`
  text-decoration: none;
  color: rgba(120,120,120, 0.7);
  &:hover{
    color: rgba(120,120,120, 1);
  }
  font-size: 12px;
  padding: 2px;
  padding-left: 10px;
`
const ItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  max-width: 100%;
  align-items: center;
`;
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
  ButtonContainer,
  Row,
  ItemContainer,
  FAQLink
};
