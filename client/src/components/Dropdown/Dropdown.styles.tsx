import styled from "styled-components";

const Item = styled.li``;
const Heading = styled.p``;
type showItemsProp = {
  showItems: boolean;
};

const List = styled.ul<showItemsProp>`
  list-style: none;
  padding-left: 0;
  display: ${({ showItems }) => (showItems ? "grid" : "none")};
`;

type ArrowRotateProp = {
  rotate180?: boolean;
};

const DownArrowHead = styled.span<ArrowRotateProp>`
  transform: rotate(
    ${({ rotate180 }) => (rotate180 ? "180deg" : "0deg" || "0deg")}
  );
`;

export { Item, Heading, DownArrowHead, List };
