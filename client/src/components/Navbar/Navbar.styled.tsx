import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarContainer = styled.header`
  margin: 0 auto;
  padding: 20px 2vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (min-width: 900px) {
    padding-bottom: 10px;
    background: #F8F5F3;
  }
`;

const ToggleButton = styled.span`
  grid-column: 2;
  grid-row: 1;
  font-size: 24px;
  justify-self: flex-end;
  @media (min-width: 900px) {
    display: none;
  }
`;
const CrossButton = styled(ToggleButton)`
  color: white;
`;

type ToggleProps = {
  toggle: boolean;
};

const NavLinksContainer = styled.nav<ToggleProps>`
  align-items: flex-start;
  @media (max-width: 900px) {
    color: white;
    background: #131313;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 20px;
    display: ${({ toggle }) => (toggle ? "grid" : "none")};
    grid-template-columns: 1fr;
    overflow-y: scroll;
  }
  @media (min-width: 900px) {
    display: flex;
    justify-content: space-between;
    color: black;
  }
`;

const LoginButton = styled(Link)`
  text-decoration: none;
  font-size: 16x;
  margin-left: 10px;
  margin-right: 12px;
  padding: 8px 16px;
  vertical-align: middle;
  max-height: 50px;
  min-width: 80px;
  border-radius: 2px;
  border: 1px white solid;
  background: transparent;
  color: white;
  @media (min-width: 900px) {
    color: black;
    border: 1px black solid;
  }
`;

const SignupButton = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  margin-left: 10px;
  margin-right: 12px;
  padding: 8px 12px 6px;
  vertical-align: middle;
  max-height: 50px;
  min-width: 80px;
  border-radius: 2px;
  border: 1px white solid;
  background: white;
  color: black;
  @media (min-width: 900px) {
    background: black;
    color: white;
    border: 1px white solid;
  }
`;

const Wrapper = styled.div`
  grid-column: 1;
  grid-row: 3;
  display: flex;
  justify-content: center;
`;

export {
  NavbarContainer,
  ToggleButton,
  CrossButton,
  NavLinksContainer,
  LoginButton,
  SignupButton,
  Wrapper,
};
