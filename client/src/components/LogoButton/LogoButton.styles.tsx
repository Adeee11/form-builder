import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoButtonContainer = styled(Link)`
  display: flex;
  color: #5e5e5e;
  padding: 10px 25px;
  border: 1px solid #5e5e5e;
  text-decoration: none;
  min-width: 400px;
  align-items: center;
  font-size: 20px;
  margin: 0 auto;
  margin-top: 15px;
  justify-content: center;
`;

const LogoText = styled.span`
    padding-left: 20px;
    font-size: 15px;
`

export { LogoButtonContainer, LogoText };
