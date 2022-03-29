import styled, { css } from "styled-components";

const Wrapper = styled.div`
 
  hr{
    margin:0px
  }
`;

const Header = styled.header`
@media (min-width:900px){
   display: none;
 }
`;

const Container = styled.div<Collapsed>`
 
`;

const Main = styled.main<Collapsed>`
display:flex;
flex-direction  :row ;

.main{
  width:100%;
  min-height:calc(100vh-64px);
  align-items: stretch;
}



`;

type Collapsed = {
  $isCollapsed?: boolean;
};

const Aside = styled.aside<Collapsed>`
 width:100%;
 flex-basis: 20%;
 height: calc(100vh-64px);
 border:1px solid lightgray;
 @media (max-width:900px){

  ${({ $isCollapsed }) =>
    $isCollapsed
      ? css`
          display: block;
        `
      : css`
          display:none;       
        `}
 }
`;
const Section = styled.section<Collapsed>``;

export { Wrapper, Main, Aside, Section, Container, Header };
