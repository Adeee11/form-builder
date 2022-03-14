import { useState } from "react";
import { NavLinks } from "../NavLinks";
import {
  Wrapper,
  Logo,
  ToggleContent,
  NavbarHeader,
  Username,
  MenuType,
  Logout,
  Email,
} from "./LogoNavbar.styles";

const LogoNavbar = () => {
  const [toggle, setToggle] = useState(false);
  const userName = "Nitin Pandey"; // dynamically fetch it from api and store it in the store
  const email = "test@gmail.com";
  const [firstName, lastName] = userName.split(" ");
  return (
    <>
      <Wrapper>
        <Logo onClick={() => setToggle(!toggle)}>
          {firstName[0] + lastName[0]}
        </Logo>
        <Email>{email}</Email>

        <ToggleContent toggle={toggle}>
          <NavbarHeader>
            <Logo>{firstName[0] + lastName[0]}</Logo>
            <Username>{userName}</Username>
            <MenuType>Settings</MenuType>
          </NavbarHeader>
          <hr />
          <NavLinks
            items={[
              "App & Integrations",
              "Quick Help",
              "Help Center",
              "Ask the community",
              "what's new",
            ]}
          />
          <hr />
          <Logout to={"/"}>Logout</Logout>
        </ToggleContent>
      </Wrapper>
    </>
  );
};

export default LogoNavbar;
