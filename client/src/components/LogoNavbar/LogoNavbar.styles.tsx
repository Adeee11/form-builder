import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  cursor: pointer;
`;
const Logo = styled.span`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  background-color: blue;
  color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;

type ToggleProp = {
  toggle?: boolean;
};

const ToggleContent = styled.div<ToggleProp>`
  padding: 10px;
  border-radius: 4px;
  position: fixed;
  margin-top: 2px;
  right: 10px;
  width: 250px;
  z-index: 9999999;
  background: white;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2);
  display: ${({ toggle }) => (toggle ? "block" : "none")};
  @media (max-width: 1000px) {
    right: 0px;
  }
  ul {
    display: flex;
    flex-direction: column;
  }

  li {
    padding: 5px 10px;
    margin: 0;
  }

  li a {
    color: black;
    font-size: 12px;
  }
`;

const NavbarHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-column-gap: 10px;
`;
const Username = styled.span`
  grid-column: 2/3;
  grid-row: 1;
  font-size: 14px;
`;
const MenuType = styled.span`
  grid-column: 2/3;
  grid-row: 2;
`;
const Logout = styled.button`
  color: red;
  text-decoration: none;
  padding: 5px 10px;
  font-size: 12px;
  border: transparent;
  background: transparent;
`;

const Email = styled.span`
  display: none;
  margin-left: 2px;
  margin-right: 2px;
  font-size: 14px;
  @media (min-width: 1000px) {
    display: inline-block;
  }
`;

export {
  Wrapper,
  Logo,
  ToggleContent,
  NavbarHeader,
  Username,
  MenuType,
  Logout,
  Email,
};
