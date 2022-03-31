import styled from "styled-components";

const ResModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);

  .popups {
    overflow-x: scroll;
    overflow-y: scroll;
    position: fixed;
    width:50%;
    border-radius: 7px;
    top:0;
    bottom: 0;
    margin-left: 25%;
    background-color: white;
    padding: 10px;
    @media (max-width:768px){
        
             width: 100%;
             margin-left: 0%;
    }
    header {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      .col1 {
        display: flex;
        align-items: center;
        .close{
         font-size :20px ;
         margin-right: 10px;
        }
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
    @media(max-width:768px){
      margin-left: auto;
      margin-right: auto;
      padding: 10px 5px;
    }
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

export { ResModal };
