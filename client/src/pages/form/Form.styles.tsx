import styled from "styled-components";

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
min-height: 100vh;
button{
    background: darkblue;
    padding: 10px 20px;
    color:white;
    margin-left: auto;
    margin-right: auto;
    display: block;
    border-radius: 4px;
    font-weight: 800;
    border:none;
    cursor: pointer;
}
button:hover{
    background: blue;
}
`;
export { Container };
