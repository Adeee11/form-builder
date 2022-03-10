import styled from "styled-components";

const Container = styled.section`
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  font-family: "Poppins", sans-serif;
  font-weight: lighter;
  /* background: #F5EEE8; */

  h2 {
    grid-column: 1;
    grid-row: 1;
    padding: 0 20px;
    font-weight: 400;
  }
  p {
    grid-column: 1;
    grid-row: 2;
    padding: 0 20px;
  }

  button {
    grid-column: 1;
    max-width: 60%;
    grid-row: 3;
    justify-self: center;
    /* background: #F5EEE8; */
  }

  video {
    grid-column: 1;
    grid-row: 1/6;
    z-index: -1;
    position: relative;
  }
  ul{
      background: #F5EEE8;
      @media (max-width: 900px) {
          display: flex;
          flex-direction: column;
      }
  }
`;

export { Container };
