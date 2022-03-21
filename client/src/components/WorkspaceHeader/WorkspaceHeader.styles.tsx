import styled from "styled-components";

const Header = styled.header``;

const MenuTopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
  font-size: 20px;
  span{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 10px;
  }
`;

const Text = styled.span``;


export { Header, MenuTopBar, Container, Text };
