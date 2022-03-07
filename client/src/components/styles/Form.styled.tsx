import { type } from "os";
import styled from "styled-components";


const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    font-size: 18px;
`

const Label = styled.label`
     font-size: 18px;
`

const Submit = styled.input.attrs(props =>({
    type:'submit',
    value:props.value
}))`
    font-size: 16px;
    background: #262627;
    color: #FCFAF8;
    padding: 12px 24px;
`

export {Form, Input, Submit, Label}