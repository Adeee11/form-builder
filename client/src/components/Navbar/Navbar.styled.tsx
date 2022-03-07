import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const NavbarContainer = styled.header`
  margin: 0 auto;
  padding: 20px 2vw;
  display: grid;
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 900px) {
      grid-template-columns: 1fr 1fr;
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

type ButtonProps = {
  transparent?: boolean;
};

const LinkButton = styled(Link)<ButtonProps>`
  text-decoration: none;
  font-size: 16px;
  margin-right: 12px;
  padding: 8px 16px;
  vertical-align: middle;
  max-height: 50px;
  min-width: 80px;
  border-radius: 2px;
  @media (max-width: 900px) {
    border: 1px white solid;
  }

  @media (min-width: 900px) {
    border: 1px black solid;
  }

  ${({ transparent }) =>
    transparent
      ? css`
          @media (max-width: 900px) {
            background: transparent;
            color: white;
          }
          @media (min-width: 900px) {
            background: transparent;
            color: black;
          }
        `
      : css`
          @media (max-width: 900px) {
            background: white;
            color: black;
          }
          @media (min-width: 900px) {
            background: black;
            color: white;
          }
        `}
`;

const SigningContainer = styled.div`
  grid-row: 3;
  grid-column: 1;
  display: flex;
  justify-content: center;
`;

export {
  NavbarContainer,
  ToggleButton,
  CrossButton,
  NavLinksContainer,
  LinkButton,
  SigningContainer,
};
