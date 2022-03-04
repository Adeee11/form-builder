import { Link } from "react-router-dom";
import { SubHeading } from "../styles/Heading.styled";
import { Item, List } from "../styles/List.styled";

const UnstyledList = (props: { items: { name: string; url: string }[] }) => {
  const { items } = props;
  return (
    <>
      <List>
        {items.map(({ name, url }) => (
          <Item>
            <Link to={url}>{name}</Link>
          </Item>
        ))}
      </List>
    </>
  );
};

export default UnstyledList;
