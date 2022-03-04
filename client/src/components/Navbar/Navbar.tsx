import { Brand } from "../styles/Heading.styled";
import { NavContainer } from "../styles/Container.styled";
import { ToggleButton } from "../styles/ToggleButton.styled";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <NavContainer>
      <Brand>{"Typeform"}</Brand>
      <ToggleButton>
        <GiHamburgerMenu />
      </ToggleButton>
    </NavContainer>
  );
};

export default Navbar;
