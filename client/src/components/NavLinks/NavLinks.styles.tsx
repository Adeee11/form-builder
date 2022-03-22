import styled from "styled-components";
import { Link } from "react-router-dom";

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 8px 32px;
  padding-top: 0;
  overflow-y: scroll;
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    padding: 0;
    overflow-y: auto;
  }
`;

const Item = styled.li`
  min-height: 50px;
  margin-bottom: 16px;
  p {
    display: flex;
    justify-content: space-between;
    font-size: 30px;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
  }
  @media (min-width: 1024px) {
    min-height: 0px;
    margin: 0;
    margin-right: 5px;
    padding: 5px 2px;
    p {
      font-size: 16px;
      vertical-align: middle;
    }
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 30px;
  font-family: "Poppins", sans-serif;
  @media (min-width: 1024px) {
    font-size: 16px;
    color: black;
    vertical-align: middle;
  }
`;

export { List, Item, NavLink };
