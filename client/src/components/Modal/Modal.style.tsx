import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 14px;
  z-index: 999;
  .popup {
    width: 400px;
    height: 360px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-130px, -200px);
    margin-left: auto;
    margin-right: auto;
    background: white;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    z-index: 5;

    @media (max-width: 768px) {
      width: 80%;
      height: auto;
      transform: translate(-40vw, -200px);
    }
    h3 {
      margin-left: 10px;
      color: rgb(38, 38, 39);
      padding: 10px;
    }
    ul {
      list-style: none;
      li {
        cursor: pointer;
        padding: 12px;
        color: rgb(38, 38, 39);
        span {
          border-radius: 4px;
          font-size: 17px;
          padding: 4px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-left: 10px;
          margin-right: 10px;
        }
        .short,
        .long {
          background: #379cfb;
        }
        .choice {
          background: pink;
        }
        .email {
          background: skyblue;
        }
        .number {
          background: lightblue;
        }
        .url {
          background: blue;
        }
      }
    }
  }
`;

export { Modal };
