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
  hr{
    grid-column: 1/3;
    grid-row: 2;
  }
`;
const Main = styled.main<Collapsed>`
  grid-row: 4;
  max-width: 100%;
  overflow-x: scroll;
  grid-column: 2/3;
  background: #FAFAFA;
  ${({ $isCollapsed }) => $isCollapsed ? css`
    grid-column: 1/3;
    grid-row: 4;
  `: ''}
`;

type Collapsed = {
  $isCollapsed?: boolean;
}

const Aside = styled.aside<Collapsed>`
  // background: green;
  grid-row: 3;
  grid-column: 1;
  ${({ $isCollapsed }) => $isCollapsed ? css`
    grid-column: 1/3;
    grid-row: 3;
  `: ''}
`;
const Section = styled.section`
`;

export { Wrapper, Main, Aside, Section };
