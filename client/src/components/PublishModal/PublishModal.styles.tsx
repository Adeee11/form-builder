import styled from "styled-components";

const PublishBox = styled.div`
  border-radius: 4px;
  background-color: white;
  display: inline-block;
  width: 300px;
  min-height: 100px;
  position: fixed;
  z-index: 9999;
  right: 10px;
  margin-top: 10px;
  box-shadow: 2px 5px 5px 0 rgba(0, 0, 0, 0.2);
  .textClose {
    padding: 10px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .text {
      font-weight: 800;
    }
    .close {
      cursor: pointer;
    }
  }
  .textButton {
    display: flex;
    padding: 0 10px;
    /* justify-content: center; */
    width: 100%;
    input,
    button {
      border-radius: 4px;
      width: 100%;
      flex: 1;
      outline: none;
      border: 1px solid #262627;
      font-size: 12px;
    }
    button {
      flex: 0;
      background: black;
      color: white;
      border: none;
      padding: 6px 8px;
      margin-left: 10px;
      cursor: pointer;
    }
  }
  .socialmedia {
    padding: 10px;
    span {
      color: gray;
      border-radius: 100%;
      overflow: hidden;
      margin-right: 8px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export { PublishBox };
