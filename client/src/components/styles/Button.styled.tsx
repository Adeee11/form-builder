import styled from "styled-components";

const Button = styled.button`
    font-size: 16px;
    background: #262627;
    color: #FCFAF8;
    padding: 12px 24px;
`
const TransparentButton = styled.button`
    font-size: 12px;
    background: transparent;
    border: transparent;
    &:hover{
        text-decoration: underline;
    }
`


export {Button, TransparentButton}