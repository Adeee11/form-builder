import { current } from "@reduxjs/toolkit";
import styled from "styled-components";

interface Props {
  backgroundColor?: string;
}

const Container = styled.div<Props>`
  max-width: 90%;
  margin: 0 auto;
  padding: 10px 20px;
  background: ${({ backgroundColor }) => backgroundColor || "transparent"};
  border: blue solid 2px;
  @media (max-width: 900px) {
    text-align: center;
  }
`;




var test = 2;
var test2 = 4;

type ColumnProp = {
  startColumn:number;
  endColumn: number;
}


const ImageContainer = styled(Container)<ColumnProp>`
  text-align: center;
  background: red;
  width: 100%;
  grid-row: 1;
  grid-column-start: ${({startColumn})=>startColumn};
  grid-column-end: ${({endColumn})=>endColumn};
`;

const CarouselContainer = styled(Container)`
  text-align: left;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  overflow-x: hidden;
  position: relative;
  left: 10vw;
`;

const LeftArrowContainer = styled.span`
  grid-column: 1;
  grid-row: 1;
  font-size: 40px;
  align-self: center;
`;

export { Container, CarouselContainer, ImageContainer, LeftArrowContainer };
