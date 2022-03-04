import { TickList, TickItem } from "../styles/List.styled";

const CheckList = (props: { items: String[] }) => {
  const items = props.items;
  return (
    <>
      <TickList>
        {items.map((item) => (
          <TickItem>{item}</TickItem>
        ))}
      </TickList>
    </>
  );
};

export default CheckList;
