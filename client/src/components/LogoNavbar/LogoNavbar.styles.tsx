import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  cursor: pointer;
`;
const Logo = styled.span`
  border: 1px solid black;
  border-radius: 50%;
  padding: 4px;
`;

type ToggleProp = {
  toggle?: boolean;
};

const ToggleContent = styled.div<ToggleProp>`
    position: absolute;
    top: 60px;
    background: white;
    border: 1px solid black;
    padding: 10px;
    display: ${({toggle}) => toggle?'block':'none'};
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
`;
const MenuType = styled.span`
  grid-column: 2/3;
  grid-row: 2;
`;
const Logout = styled(Link)`
  color: red;
  text-decoration: none;
  padding: 5px 10px;
  font-size: 12px;
`;

const Email = styled.span`
  display: none;
  margin-left: 2px;
  margin-right: 2px;
  @media (min-width: 1000px) {
    display: inline-block;
  }
`

export {
  Wrapper,
  Logo,
  ToggleContent,
  NavbarHeader,
  Username,
  MenuType,
  Logout,
  Email
};
