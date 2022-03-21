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
  Row,
} from "./SideBarMenu.styles";
import { CgMenuGridR } from "react-icons/cg";
import {
  AiOutlinePlus,
  AiOutlineSearch,
  AiOutlineCaretRight,
} from "react-icons/ai";
import { HiUser } from "react-icons/hi";
import { Dropdown } from "../Dropdown";
import { ButtonContainer } from "../HeroSection/HeroSection.styles";
import { useAppSelector } from "../../providers/app/hooks";

const SideBarMenu = (props: { showMenu: boolean }) => {
  const workspaceType = "PRIVATE";
  const workSpaceName = "First";
  const noOfTypeform = 3;
  const userName = useAppSelector(state => state.user.username);
  const dropdownItems = [
    "Help Center",
    "Ask the community",
    "Learn the basics",
    "Branch or skip questions",
    "Pull in info you alreay know",
    "Embed your typeform",
  ];
  const { showMenu } = props;
  

  return (
    <>
      <Menu showMenu={showMenu}>
        <Workspaces>
          <div>
            <AiOutlineCaretRight />
            <HiUser />
            <Text>{workspaceType}</Text>
          </div>

          <ButtonContainer>
            <Button>
              <AiOutlinePlus />
            </Button>
          </ButtonContainer>

          <Text>{workSpaceName}</Text>
          <Text>{noOfTypeform}</Text>
        </Workspaces>

        <PersonalDetails>
          <Username>
            <Text>{userName}</Text> account
          </Username>
          <Heading>
            {"Responses Collected"}
            <Text>{noOfTypeform}</Text>
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
