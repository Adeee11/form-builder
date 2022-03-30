import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuTopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
  font-size: 20px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;
const Text = styled.span`
  font-size: 14px;
`;

type ToggleProp = {
  showMenu: boolean;
};
const Menu = styled.div<ToggleProp>`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr auto;
  min-width: 200px;
  background: white;
  padding: 5px 10px;
`;

const Workspaces = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto 1fr;
  padding: 10px 2px;
  grid-column-gap: 0;
  grid-row-gap: 10px;
`;
const HorizontalLine = styled.div`
  grid-column: 1/3;
  grid-row: 3;
  align-self: flex-end;
  padding-top: 20px;
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
  margin: 0;
  justify-self: flex-end;
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
const Username = styled.h4`
  font-size: 14px;
`;
const Heading = styled.h5`
  font-size: 14px;
`;
const BlueLink = styled(Link)`
  font-size: 14px;
`;
const FAQLink = styled(Link)`
  text-decoration: none;
  color: rgba(120, 120, 120, 0.7);
  &:hover {
    color: rgba(120, 120, 120, 1);
  }
  font-size: 12px;
  padding: 2px;
  padding-left: 10px;
`;
const ItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  max-width: 100%;
  align-items: center;
`;
const GridRowWrapper = styled.div`
  display: contents;
  background: gray;
  span {
    background: rgba(120, 120, 120, 0.4);
  }
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
  FAQLink,
  GridRowWrapper,
  HorizontalLine,
};
