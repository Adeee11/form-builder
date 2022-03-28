import React, { useState } from "react";
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
  ItemContainer,
  FAQLink,
  ButtonContainer,
  GridRowWrapper,
  HorizontalLine,
} from "./SideBarMenu.styles";
import {
  AiOutlinePlus,
  AiOutlineCaretDown,
  AiOutlineQuestion,
  AiFillStar,
  AiOutlineBranches,
  AiFillEyeInvisible,
} from "react-icons/ai";
import { HiUser } from "react-icons/hi";
import { FaUserFriends } from "react-icons/fa";
import { ImEmbed } from "react-icons/im";
import { Dropdown } from "../Dropdown";
import { useAppSelector } from "../../providers/app/hooks";

const Item = (props: { icon: React.ReactNode; linkText: string }) => {
  const { icon, linkText } = props;
  return (
    <>
      <ItemContainer>
        {icon}
        <FAQLink to={"/"}>{linkText}</FAQLink>
      </ItemContainer>
    </>
  );
};

const SideBarMenu = (props: { showMenu: boolean }) => {
  const workspaceType = "PRIVATE";
  const workSpaceName = "My WorkSpace";
  const noOfTypeform = 3;
  const userName = useAppSelector((state) => state.user.username);
  const dropdownItems = [
    <Item key={"sbd1"} linkText="Help Center" icon={<AiOutlineQuestion />} />,
    <Item key={"sbd2"} linkText="Ask the community" icon={<FaUserFriends />} />,
    <Item key={"sbd3"} linkText="Learn the basics" icon={<AiFillStar />} />,
    <Item
      key={"sbd4"}
      linkText="Branch or skip questions"
      icon={<AiOutlineBranches />}
    />,
    <Item
      key={"sbd5"}
      linkText="Pull in info you alreay know"
      icon={<AiFillEyeInvisible />}
    />,
    <Item key={"sbd6"} linkText="Embed your typeform" icon={<ImEmbed />} />,
  ];
  const { showMenu } = props;

  return (
    <>
      <Menu showMenu={showMenu}>
        <Workspaces>
          <div>
            <AiOutlineCaretDown />
            <HiUser />
            <Text>{workspaceType}</Text>
          </div>

          <ButtonContainer>
            <Button>
              <AiOutlinePlus />
            </Button>
          </ButtonContainer>
          <GridRowWrapper>
            <Text>{workSpaceName}</Text>
            <Text>{noOfTypeform}</Text>
          </GridRowWrapper>
          <HorizontalLine>
            <hr />
          </HorizontalLine>
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
          <HorizontalLine>
            <hr />
          </HorizontalLine>
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
