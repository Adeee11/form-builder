import styled from "styled-components";

const Header = styled.header``;

const MenuTopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  font-size: 20px;

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    svg {
      margin-right: 8px;
      font-size: 24px;
    }
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
