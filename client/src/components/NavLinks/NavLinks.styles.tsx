import styled from "styled-components";
import { Link } from "react-router-dom";

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  grid-column: 1/3;
  grid-row: 2;
  @media (min-width: 900px) {
      grid-row: 1;
      grid-column:2/3 ;
      display:flex;
      
  }
`;

const Item = styled.li`
  padding: 5px 10px;
  margin-bottom: 30px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 30px;
  @media (min-width: 900px) {
      color:black;
      font-size: 16px;
  }
`;

export { List, Item, NavLink };
