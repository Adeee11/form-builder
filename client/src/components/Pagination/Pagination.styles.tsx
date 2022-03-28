import styled from "styled-components";

const PageNumberList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
`;
const PageNumber = styled.button`
  display: flex;
  justify-content: center;
  align-content: center;
  background: transparent;
  border: 1px solid black;
  border-radius: 4px;
  padding: 4px;
  margin-right: 1px;
  font-size: 14px;
  width: 30px;
  height: 30px;
`;

export { PageNumberList, PageNumber };
