import styled from "styled-components";

const Card = styled.div`
  margin-top: 20px;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 10px;
  width: 150px;
  max-height: 150px;
  display: flex;
  flex-direction: column;
  svg {
    cursor: pointer;
  }
  hr {
    margin: 5px;
  }
  .bottom {
    width: 100%;
    display: flex;
    align-items: center;
    /* height: 50px; */
    padding: 4px;
    justify-content: space-between;
    position: relative;
  }
`;
const TypeFormName = styled.h3`
  font-size: 14px;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0px;
`;

const ResponsesCounter = styled.span`
  font-size: 12px;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  background: white;
  position: absolute;
  left: 100px;
  bottom: 30px;
  width: 150px;
  box-shadow: 2px 4px 4px 2px rgba(0, 0, 0, 0.2);
`;
const ModalItems = styled.span`
  text-align: left;
  border-bottom: 1px solid lightgray;
  padding: 10px 10px;
  font-size: 11px;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  border: 1px solid black;
  font-size: 20px;
  padding: 5px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 4px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export {
  Card,
  ResponsesCounter,
  TypeFormName,
  ModalContainer,
  ModalItems,
  ButtonContainer,
  Container,
};
