import styled from "styled-components";

type ButtonProp = {
  btnColor?: string;
};

export const StyledButton = styled.button<ButtonProp>`
  font-size: 16px;
  background: ${({ btnColor }) => btnColor || "#262627"};
  color: #fcfaf8;
  padding: 12px 24px;
`;
