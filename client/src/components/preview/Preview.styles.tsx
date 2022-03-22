import styled from "styled-components";
import { Link } from "react-router-dom";

const PreviewContainer = styled.div`

`;

const PreviewHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 16px 0 24px ;
padding: 10px;
border-bottom: 1px solid rgba(0, 0, 0, 0.1);
.back{
   
}
p{
    color:#262627;
    font-size: 14px;
}
button{
    font-size: 14px;
    color:#262627;
    border:none;
    border-radius: 4px;
    padding: 5px;
    display: flex;
    align-items: center;
    span{
        margin-left: 4px;
    }
}
`
const Form = styled.div`
border-radius: 10px;
max-width: 900px;
margin: 0 auto;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
min-height: 80vh;
margin-top: 20px;
position: relative;
padding-bottom: 30px;

header{
    border-radius: 10px;
       font-size: 25px;
       font-weight: 700;
       text-align: left;
       width: 100%;
       padding: 10px;
       border-top: 10px solid blue;
       color:#262627;
}
.section{
    padding: 10px;
    margin :0 auto ;
    max-width: 600px;
    margin-top: 20px;
    .question{
        width:100%;  
        font-size: 16px;
        margin-bottom: 10px;
        span{
            margin-right: 5px;
        }
    }
    .answer{
        font-size: 16px;
        width:100%;
        border:none;
        outline: none;
        padding: 6px;
        border-bottom: 2px solid lightblue;
    }
    .opt{
        background: lightblue;
        margin-top: 10px;
        padding: 6px;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
    }
    .opt:hover{
        color: blue;
    }
    
}
.sub{

    border:none;
    padding: 6px 12px;
    font-size :14px ;
    border-radius: 5px;
    border:none;
    color:white;
    background: blue;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
   
}

`

const LinkComponent = styled(Link)`
  color: #4c4c4c;
  font-size: 14px;  
`;

export { PreviewContainer, PreviewHeader, Form, LinkComponent };
