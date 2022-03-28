import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #fafafa;
  padding:10px;
  hr{
    margin:0px;
  }
  svg{
    font-size:16px;
    color:gray;
  }
`;

const WorkspaceName = styled.p`
  font-size: 18px;
  margin-bottom:0px;
  margin-left:0px;
  margin-right:30px;
`;
const PipeSymbol = styled.span`
font-weight: 100;
color:gray;
`;

const Row = styled.div`
  display: flex;
`;

const FirstRow = styled(Row)`
  justify-content: flex-start;
  align-items: center;
  padding: 20px 10px;
  padding-bottom: 5px;
  display:flex;
  align-items:center;
  span {
    margin-right: 10px;
  }
  svg {
    margin-right: 10px;
  }
`;

const SecondRow = styled(Row)`
  padding: 20px 10px;

  padding-top: 5px;
  justify-content: space-between;
  button {
    padding: 4px 8px;
    min-width: 130px;
  }
  select{
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
