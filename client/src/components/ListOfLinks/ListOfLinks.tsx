import { Container, Heading, Item, UnstyledLink } from "./ListOfLinks.styles";

interface Item {
  itemName: string;
  url: string;
}

const ListOfLinks = (props: { items: Item[]; heading: string }) => {
  const { items, heading } = props;
  return (
    <>
      <Container>
        <Heading>{heading}</Heading>
        {items.map((item, index) => (
          <Item key={index}>
            <UnstyledLink to={item.url}>{item.itemName}</UnstyledLink>
          </Item>
        ))}
      </Container>
    </>
  );
};

export default ListOfLinks;
