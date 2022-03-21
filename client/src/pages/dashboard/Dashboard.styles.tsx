import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  padding: 1vw;
`;

const Header = styled.header``;

const Container = styled.div<Collapsed>`
  ${({ $isCollapsed }) =>
    $isCollapsed
      ? ""
      : css`
          grid-column: 2;
        `}
`;

const Main = styled.main<Collapsed>`
  display: grid;

  ${({ $isCollapsed }) =>
    $isCollapsed
      ? ""
      : css`
          grid-template-columns: auto 1fr;
          grid-gap: 4px;
        `}
`;

type Collapsed = {
  $isCollapsed?: boolean;
};

const Aside = styled.aside<Collapsed>`
  ${({ $isCollapsed }) =>
    $isCollapsed
      ? css`
          display: none;
        `
      : css`
          grid-row: 1/4;
          grid-column: 1/2;
        `}
`;
const Section = styled.section<Collapsed>``;

export { Wrapper, Main, Aside, Section, Container, Header };
