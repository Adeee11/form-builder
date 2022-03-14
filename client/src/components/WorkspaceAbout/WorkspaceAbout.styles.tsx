import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const WorkspaceName = styled.span`
  font-size: 20px;
  padding: 5px 10px;
  max-width: 60vw;
`;
const PipeSymbol = styled.span``;

const Row = styled.div`
  display: flex;
`;

const FirstRow = styled(Row)`
  justify-content: flex-start;
  span {
    margin-right: 10px;
  }
  svg {
    margin-right: 10px;
  }
`;

const SecondRow = styled(Row)`
  justify-content: space-between;
  button{
      padding: 4px 8px;
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
