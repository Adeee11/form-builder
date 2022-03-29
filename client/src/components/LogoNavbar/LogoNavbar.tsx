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
type propTypes = {
  userName?: string;
};
const LogoNavbar = () => {
  const userName = useAppSelector((state) => state.user.username);

  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Wrapper>
        <Logo onClick={() => setToggle(!toggle)}>{userName[0]}</Logo>
        <Email>{userName}</Email>

        <ToggleContent toggle={toggle}>
          <NavbarHeader>
            <Logo>{userName[0]}</Logo>
            <Username>{userName}</Username>
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
