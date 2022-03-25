import styled from "styled-components";

const Card = styled.div`
  border: 1px solid grey;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 3fr 0.1fr 1fr;
  max-width: 200px;
  justify-content: center;
  svg {
    grid-row: 3;
    justify-self: center;
  }
  hr {
    grid-row: 2;
    grid-column: 1/3;
  }
`;
const TypeFormName = styled.h3`
  grid-row: 1;
  grid-column: 1/3;
  font-family: "Poppins", sans-serif;
  min-height: 70%;
`;

const ResponsesCounter = styled.span`
  grid-row: 3;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  border: 1px solid black;
  background: white;
  position: relative;
  left: 40px;
`;
const ModalItems = styled.span`
  text-align: left;
  border-bottom: 1px solid gray;
  padding: 5px 10px;
  font-size: 11px;
  cursor: pointer;
`;

export { Card, ResponsesCounter, TypeFormName, ModalContainer, ModalItems };
