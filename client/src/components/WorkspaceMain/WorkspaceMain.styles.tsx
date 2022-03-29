import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background: #fafafa;
  overflow-x: hidden;
  min-height: 65vh;
`;
const PaginationContainer = styled.div`
  overflow-x: auto;
  max-width: 80vw;
  margin: 0 auto;
  margin-top: 20px;
`;

export { Wrapper, PaginationContainer };
