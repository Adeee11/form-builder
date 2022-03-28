import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const WorkspaceName = styled.input`
  font-size: 20px;
  padding: 5px 10px;
  max-width: 40vw;
  outline: none;
  border: none;
`;
const PipeSymbol = styled.span``;

const Row = styled.div`
  display: flex;
`;

const FirstRow = styled(Row)`
  justify-content: flex-start;
  align-items: center;
  padding: 20px 10px;
  padding-bottom: 5px;
  span {
    margin-right: 10px;
  }
  svg {
    margin-right: 10px;
  }
`;

const SecondRow = styled(Row)`
  padding: 20px 10px;
  gap: 1px;
  padding-top: 5px;
  justify-content: space-between;
  button {
    padding: 4px 8px;
    min-width: 130px;
  }
  select {
    min-width: 130px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconContainer = styled.span``;

export {
  Wrapper,
  WorkspaceName,
  IconContainer,
  PipeSymbol,
  Row,
  Column,
  FirstRow,
  SecondRow,
};
