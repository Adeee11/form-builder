import styled, { css } from "styled-components";

const Wrapper = styled.div`
  margin: 1vw 2vw;
  max-width: 100vw;
  display: grid;
  grid-template-columns: 2fr 8fr;
  header{
      grid-column: 1/3;
      grid-row: 1;
  }
`;
const Main = styled.main<Collapsed>`
  grid-row: 2;
  max-width: 100%;
  overflow-x: scroll;
  grid-column: 2/3;
  ${({$isCollapsed})=>$isCollapsed?css`
    grid-column: 1/3;
    grid-row: 3;
  `:''}
`;

type Collapsed = {
  $isCollapsed?:boolean;
}

const Aside = styled.aside<Collapsed>`
  background: green;
  grid-row: 2;
  grid-column: 1;
  ${({$isCollapsed})=>$isCollapsed?css`
    grid-column: 1/3;
    grid-row: 2;
  `:''}
`;
const Section = styled.section`
`;

export { Wrapper, Main, Aside, Section };