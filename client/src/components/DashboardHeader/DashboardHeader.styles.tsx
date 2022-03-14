import styled from "styled-components";

const Header = styled.header`
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-auto-rows: minmax(64px,auto);
    align-items: center;
    grid-gap: 10px;

    h1{
        font-size: 16px;
        font-family: 'Poppins', sans-serif;
    }

    button{
        font-size: 12px;
        border-radius: 6px;
        max-height: 32px;
        min-width: 80px;
        max-width: 100px;
        margin-right: 10px;
        padding: 6px 8px;
        justify-self: flex-end;
    }

    
`;

const Container = styled.div`
    display: flex;
    justify-content:flex-end;
    align-items: center;
    padding: 2px 5px;
`


export { Header, Container };
