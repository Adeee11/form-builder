import React from "react";
import { Item, List, NavLink } from "./NavLinks.styles";

type ItemType = string | React.ReactNode;

const NavLinks = (props: { items: ItemType[] }) => {
  const { items } = props;
  return (
    <>
      <List>
        {items.map((item, index) => {
          return typeof item === typeof "" ? (
            // Need to change the key to be unique id later on
            <Item key={index}>
              <NavLink to="/">{item}</NavLink>
            </Item>
          ) : (
            <Item key={index}>{item}</Item>
          );
        })}
      </List>
    </>
  );
};

export default NavLinks;
