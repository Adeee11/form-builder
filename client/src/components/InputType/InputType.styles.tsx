import styled from "styled-components";

const InputBox = styled.div`
textarea{
    width:100%;
    min-height: 150px;
    padding: 10px;
    outline: none;
    /* border:none;  */
}
input{
    
    font-size: 16px;
        width:100%;
        border:none;
        outline: none;
        padding: 6px;
        border-bottom: 2px solid lightblue;
}
.input{
    background: red;
    border: 1px solid red;
}
`

export { InputBox };