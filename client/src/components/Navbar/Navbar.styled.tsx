import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarContainer = styled.header`
  display: flex;
  min-height: 68px;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background: white;
  @media (min-width: 1024px){
    padding: 10px 20px;
    background: #f8f5f3;
  }
`;

const ToggleButton = styled.span`
  font-size: 26px;
  @media (min-width: 1024px) {
    display: none;
  }
`;
const CrossButton = styled(ToggleButton)`
  text-align: right;
  padding: 16px 24px;
`;

type ToggleProps = {
  toggle: boolean;
};

const NavLinksContainer = styled.nav<ToggleProps>`
  @media (max-width: 1024px) {
    position: absolute;
    top: 0px;
    left: 0;
    min-width: 100vw;
    min-height: 100vh;
    background: #131313;
    color: white;
    display: ${({ toggle }) => (toggle ? "flex" : "none")};
    flex-direction: column;
    z-index: 1000; 
  }
  

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const LoginButton = styled(Link)`
  padding: 8px 16px;
  margin-right: 12px;
  border: 1px solid white;
  border-radius: 4px;
  color: white;
  text-decoration: none;
  @media (min-width: 1024px) {
    border: 1px solid black;
    color: black;
  }
`;

const SignupButton = styled(Link)`
  padding: 8px 16px;
  margin-right: 12px;
  border: 1px solid black;
  border-radius: 4px;
  color: black;
  background: white;
  text-decoration: none;
  @media (min-width: 1024px) {
    background: black;
    color: white;
  }
`;

const Wrapper = styled.div`
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  @media (min-width: 1024px) {
    background: transparent;
    padding: 5px;
    align-items: center;
  }
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
