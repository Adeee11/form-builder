import styled from "styled-components";



const Card = styled.div`
    border: 1px solid grey;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 3fr 0.1fr 1fr;
    max-width: 200px;
    justify-content: center;
    svg{
        grid-row: 3;
        justify-self: center;
    }
    hr{
        grid-row: 2;
        grid-column: 1/3;
    }
`
const TypeFormName = styled.h3`
    grid-row: 1;
    grid-column: 1/3;
    font-family: 'Poppins', sans-serif;
    min-height: 70%;
`

const ResponsesCounter = styled.span`
    grid-row: 3;
`

export { Card , ResponsesCounter , TypeFormName};
