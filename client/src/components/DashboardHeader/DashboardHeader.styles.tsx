import styled from "styled-components";

const Header = styled.header`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-auto-rows: minmax(64px,auto);
    border: 1px blue solid;
    align-items: center;
    grid-gap: 5px;

    h1{
        font-size: 16px;
        font-family: 'Poppins', sans-serif;
    }

    button{
        font-size: 12px;
        border-radius: 6px;
        max-height: 32px;
        min-width: 0;
        grid-row: 1;
        grid-column: 3;
        padding: 6px 8px;
    }

    div{
        grid-column: 4;
    }
`;

export { Header };
