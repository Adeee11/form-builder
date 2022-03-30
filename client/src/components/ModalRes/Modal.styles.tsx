import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);

  .popup {
    position: absolute;
    bottom: 0px;
    right: 0px;
    top: 0px;
    width: 40%;
    background: white;
    border-radius: 7px;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      .col1 {
        display: flex;
        align-items: center;
        .btn-group {
          display: flex;
          border-radius: 4px;
          overflow: hidden;
          margin-right: 5px;
          span {
            background-color: lightgray;
            padding: 5px;
            border: 1px solid rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            color: black;
            font-weight: 800;
          }
        }
        .date {
          font-size: 12px;
        }
      }
      .col2 {
        display: flex;
        align-items: center;
        span {
          margin-left: 5px;
          background: lightgray;
          border-radius: 4px;
          font-size: 20px;
          display: flex;
          align-items: center;
          padding: 5px;
        }
        .del {
          color: brown;
          background: lightpink;
        }
      }
    }
  }
  .block {
    padding: 20px;
    margin-left: 20px;
    margin-right: 20px;
    border-radius: 4px;
    border: none;
    background: rgba(250, 250, 250);
    border: 1px solid lightgray;
    display: flex;
    flex-direction: column;

    p {
      margin-left: 70px;
    }

    .question {
      font-size: 16px;
      color: #262627;
      .span {
        padding: 0 6px;
        border-radius: 4px;
        width: 52px;
        height: 24px;
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
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
`;

export { Modal };
