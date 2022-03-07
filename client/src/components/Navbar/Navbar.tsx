import { Brand } from "../styles/Heading.styled";
import {
  NavContainer,
  ToggleOptionsContainer,
  Container
} from "../styles/Container.styled";
import { ToggleButton } from "../styles/ToggleButton.styled";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Item, List } from "../styles/List.styled";
import { Dropdown } from "../Dropdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";



const HamburgerButton = styled(ToggleButton)`
  @media (max-width: 900px) {
    grid-row: 1;
    grid-column: 2;
    justify-content: flex-end;
  }
  @media (min-width: 900px) {
    display: none;
  }
 
`
const CrossButton = styled(ToggleButton)`
  @media (max-width: 900px) {
    grid-row: 1;
    grid-column: 2;
    justify-content: flex-end;
    height:fit-content
  }
  @media (min-width: 900px) {
    display: none;
  }
 
`

const NavLinksContainer = styled(List)` 
  grid-column: 1/3;
  display: grid;
  @media (max-width: 900px){
    grid-row: 2;
    justify-content: flex-start;
  }

` 

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <NavContainer>
      <Brand>{"Typeform"}</Brand>
      <HamburgerButton >
        <GiHamburgerMenu />
      </HamburgerButton>
      <ToggleOptionsContainer>
        <CrossButton>
          <AiOutlineClose color="white" />
        </CrossButton>
        <NavLinksContainer>
          <Item>
            <Dropdown />
          </Item>
          <Item>
            <Dropdown />
          </Item>
          <Item>
            <Dropdown />
          </Item>
          <Item>
            <Dropdown />
          </Item>

          <Item>
            <Link to={"/"}>Pricing</Link>
          </Item>
          <Item>
            <Link to={"/"}>Enterprise</Link>
          </Item>
          <Item>
            <Link to={"/"}>Careers</Link>
          </Item>
        </NavLinksContainer>
      </ToggleOptionsContainer>
    </NavContainer>
  );
};

export default Navbar;
