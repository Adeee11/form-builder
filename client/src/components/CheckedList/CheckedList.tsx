import { TickList, TickItem } from "./CheckedList.styles";

const CheckList = (props: { items: String[] }) => {
  const items = props.items;
  return (
    <>
      <TickList>
        {items.map((item, index) => (
          <TickItem key={index}>{item}</TickItem>
        ))}
      </TickList>
    </>
  );
};

export default CheckList;