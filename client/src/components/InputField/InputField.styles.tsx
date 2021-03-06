import styled from "styled-components";

const Input = styled.input`
  padding: 6px 14px;
  margin-left: 8vw;
  @media (max-width: 500px) {
    min-width: 80vw;
  }
  
  font-size: 16px;
`;
const Label = styled.label`
  margin-left: 8vw;
  padding: 16px 4px;
`;
export { Input, Label };
