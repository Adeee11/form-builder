import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  background: #fafafa;

  .chooseInput {
    background: #e3e3e3;
    width: 32px;
    height: 32px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    margin-top: 20px;
    cursor: pointer;
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  background: white;
  @media (max-width: 768px) {
    flex-direction: column;
    overflow: hidden;
    ul,
    p {
      justify-content: space-evenly;
    }
  }
  .first {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 10px;
    span {
      min-width: 104px;
    }
    input {
      outline: none;
      border: none;
      font-size: 14px;
      margin-left: 4px;
      font-weight: 600;
    }
  }

  ul {
    display: flex;
    list-style: none;
    flex-wrap: nowrap;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 10px;

    li {
      margin-right: 10px;
      cursor: pointer;
    }
  }
  p {
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 10px;
    .publish {
      background: black;
      color: white;
      padding: 6px 12px;
      border-radius: 5px;
      font-size: 14px;
      margin-left: 16px;
      border: none;
      cursor: pointer;
      height: 32px;
    }

    .avatar {
      margin-left: 10px;
      border-radius: 50%;
      background: blue;
      color: white;
      width: 32px;
      height: 32px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      text-transform: uppercase;
    }
    .preview {
      background: #e3e3e3;
      width: 32px;
      height: 32px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
    }
  }
`;
const Form = styled.form`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
  max-width: 900px;
  margin: 0 auto;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  border-radius: 10px;
  margin-top: 20px;
  overflow-x: hidden;
  .form-header {
    border-radius: 10px;
    font-size: 25px;
    font-weight: 700;
    text-align: left;
    width: 100%;
    padding: 10px;
    border-top: 10px solid blue;
  }
  .que {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 7px;
    margin-top: 20px;
    span {
      margin-right: 4px;
      flex: 0;
    }
    .input {
      width: 100%;
      border: none;
      outline: none;
      flex: 1;
      margin-bottom: 0;
    }
  }

  .ans {
    min-width: 600px;
    color: lightblue;
    border-bottom: 2px solid lightblue;
    padding: 10px;
    margin-left: 10px;
    @media (max-width: 768px) {
      min-width: 0;
      width: 80vw;
    }
  }

  .sub {
    z-index: 1;
    border: none;
    padding: 6px 12px;
    font-size: 14px;
    border-radius: 5px;
    margin-top: 30px;
    border: none;
    color: white;
    background: blue;
    margin-bottom: 20px;
  }
  .opt {
    min-width: 600px;
    padding: 10px;
    @media (max-width: 768px) {
      min-width: 0;
      width: 80vw;
    }
    span {
      width: 100%;
      display: flex;
    }
    input {
      border: none;
      padding: 6px;
      outline: none;
      border-radius: 4px;
      width: 100%;
    }
    button {
      border: none;
      padding: 6px 10px;
      border-radius: 4px;
    }
  }
  .optlist {
    min-width: 600px;
    display: flex;
    width: 100%;
    align-items: center;
    background: lightblue;
    margin-top: 10px;
    border-radius: 4px;
    @media (max-width: 768px) {
      min-width: 0;
      width: 80vw;
    }
    p {
      border: 1px solid lightblue;
      font-size: 16px;
      padding: 6px;
      border-radius: 6px;
      width: 100%;
      margin-bottom: 0;
    }
    button {
      color: blue;
      background: lightblue;
      width: 32px;
      height: 32px;
      cursor: pointer;
      border: none;
      display: flex;
      align-items: center;
    }
  }
  .delque {
    border: none;
    width: 32px;
    height: 32px;
    border-radius: 4px;
    margin-left: 7px;
  }
`;

const LogoutMenu = styled.div`
  padding: 10px;
  border-radius: 4px;
  position: fixed;
  margin-top: 2px;
  right: 10px;
  width: 250px;
  z-index: 9999999;
  background: white;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2);
  .logout-header {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0px;
    margin-bottom: 0px;
    p {
      font-size: 14px;
      display: inline-block;
    }
    .avatar {
      margin-right: 10px;
      border-radius: 50%;
      background: blue;
      width: 27px;
      height: 27px;
      color: white;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      font-size: 14px;
    }
  }
  ul {
    list-style: none;
    font-size: 14px;
    width: 100%;

    li {
      padding-top: 8px;
      width: 100%;
      margin-left: 0px;
      padding-left: 0px;
    }

    .bold {
      font-weight: 700;
    }
    .danger {
      color: red;
    }
  }
`;

const Logout = styled.button`
  color: red;
  text-decoration: none;
  padding: 5px 10px;
  font-size: 12px;
  border: transparent;
  background: transparent;
`;

export { Wrapper, Header, Form, LogoutMenu, Logout };
