import { ThunkDispatch, AnyAction, Dispatch } from "@reduxjs/toolkit";
import { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../providers/app/hooks";
import { EditFormState } from "../../providers/features/editFormIdSlice";
import { loggedOut, LoginState } from "../../providers/features/loginSlice";
import { changeToken, Token } from "../../providers/features/tokenSlice";
import { changeUser, User } from "../../providers/features/userSlice";
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

const logout = async (
  dispatch: ThunkDispatch<
    { login: LoginState; user: User; token: Token; editFormId: EditFormState },
    undefined,
    AnyAction
  > &
    Dispatch<AnyAction>,
  navigate: NavigateFunction
) => {
  await dispatch(loggedOut());
  await dispatch(changeToken(""));
  await dispatch(
    changeUser({
      username: "Logged out",
      id: "",
    })
  );
  navigate("/");
};

const LogoNavbar = () => {
  const userName = useAppSelector((state) => state.user.username);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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
          <Logout onClick={() => logout(dispatch, navigate)}>Logout</Logout>
        </ToggleContent>
      </Wrapper>
    </>
  );
};

export default LogoNavbar;
