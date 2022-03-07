import { Brand } from "../Brand";
import { NavLinks } from "../NavLinks";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {
  CrossButton,
  LinkButton,
  NavbarContainer,
  NavLinksContainer,
  SigningContainer,
  ToggleButton,
} from "./Navbar.styled";
import { useState } from "react";
import { Dropdown } from "../Dropdown";

const Dropdowns = [
  <Dropdown heading="Solutions" dropdownItems={["Item1", "Item2", "Item3"]} />,
  <Dropdown heading="Templates" dropdownItems={["Item1", "Item2", "Item3"]} />,
  <Dropdown
    heading="Integrations"
    dropdownItems={["Item1", "Item2", "Item3"]}
  />,
  <Dropdown heading="Resources" dropdownItems={["Item1", "Item2", "Item3"]} />,
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const brandName = "Typeform";
  return (
    <>
      <NavbarContainer>
        <Brand brandName={brandName} />
        <ToggleButton onClick={() => setToggle(true)}>
          <AiOutlineMenu />
        </ToggleButton>

        <NavLinksContainer toggle={toggle}>
          <CrossButton onClick={() => setToggle(false)}>
            <AiOutlineClose />
          </CrossButton>
          <NavLinks
            items={[
              Dropdowns[0],
              Dropdowns[1],
              Dropdowns[2],
              Dropdowns[3],
              "Pricing",
              "Enterprise",
              "Careers",
            ]}
          />
          <SigningContainer>
            {/* Check how to make the text of these links center  */}
            <LinkButton to="/login" transparent>
              Log in
            </LinkButton>

            <LinkButton to="/signup">Sign up</LinkButton>
          </SigningContainer>
        </NavLinksContainer>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
