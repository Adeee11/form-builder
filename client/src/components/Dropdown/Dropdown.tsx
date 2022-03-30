import { useState } from "react";
import { DownArrowHead, Heading, Item, List } from "./Dropdown.styles";
import { BiChevronDown } from "react-icons/bi";

type Item = string | React.ReactNode;

const Dropdown = (props: { heading: string; dropdownItems: Item[] }) => {
  const { heading, dropdownItems } = props;
  const [showItems, setShowItems] = useState(false);
  return (
    <>
      <Heading onClick={() => setShowItems(!showItems)}>
        {heading}
        <DownArrowHead rotate180={showItems}>
          <BiChevronDown />{" "}
        </DownArrowHead>
      </Heading>
      <List showItems={showItems}>
        {dropdownItems.map((item, index) => {
          return typeof item === typeof "" ? (
            <Item key={index}>{item}</Item>
          ) : (
            item
          );
        })}
      </List>
    </>
  );
};

export default Dropdown;
