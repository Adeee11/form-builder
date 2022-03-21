import { useState } from "react";
import {
  Container,
  HelpLinks,
  Menu,
  MenuTopBar,
  PersonalDetails,
  Text,
  Workspaces,
  Button,
  Username,
  Heading,
  BlueLink,
} from "./SideBarMenu.styles";
import { CgMenuGridR } from "react-icons/cg";
import {
  AiOutlinePlus,
  AiOutlineSearch,
  AiOutlineCaretRight,
} from "react-icons/ai";
import { HiUser } from "react-icons/hi";
import { Dropdown } from "../Dropdown";

const SideBarMenu = (props: {showMenu: boolean}) => {
  const workspaceType = "PRIVATE";
  const userName = "Nitin";
  const dropdownItems = [
    "Help Center",
    "Ask the community",
    "Learn the basics",
    "Branch or skip questions",
    "Pull in info you alreay know",
    "Embed your typeform",
  ];
  const {showMenu} = props;
  
  return (
    <>
      
      <Menu showMenu={showMenu}>
        <Workspaces>
          <AiOutlineCaretRight />
          <HiUser />
          <Text>{workspaceType}</Text>
          <Button>
            <AiOutlinePlus />
          </Button>
        </Workspaces>
        <PersonalDetails>
          <Username>
            <Text>{userName}</Text> account
          </Username>
          <Heading>
            {"Responses Collected"}
            <Text>{"3"}</Text>
          </Heading>
          <BlueLink to={"/"}>{"Increase response limit"}</BlueLink>
        </PersonalDetails>
        <HelpLinks>
          <Dropdown
            heading={"Help & Inspiration"}
            dropdownItems={dropdownItems}
          />
        </HelpLinks>
      </Menu>
    </>
  );
};

export default SideBarMenu;
