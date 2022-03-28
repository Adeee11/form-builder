import { useState } from "react";
import { useAppSelector } from "../../providers/app/hooks";
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
  const userName = useAppSelector((state) => state.user.username);
  const email = "test@gmail.com";
  // will implement first and last name one after confirming that there's a last name
  // const [firstName, lastName] = userName.split(" ");
  return (
    <>
      <Wrapper>
        <Logo onClick={() => setToggle(!toggle)}>
          {userName[0].toUpperCase() +
            userName[userName.length - 1].toUpperCase()}
        </Logo>
        <Email>{email}</Email>

        <ToggleContent toggle={toggle}>
          <NavbarHeader>
            <Logo>{userName[0] + userName[userName.length - 1]}</Logo>
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
