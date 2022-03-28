import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(300px, auto);
  grid-gap: 10px;
  padding: 10px;
  justify-items: center;
  text-align: center;
`;
const PaginationContainer = styled.div`
  overflow-x: auto;
  max-width: 80vw;
  margin: 0 auto;
`;

export { Wrapper, PaginationContainer };
