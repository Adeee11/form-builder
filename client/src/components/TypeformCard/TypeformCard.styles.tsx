import styled from "styled-components";



const Card = styled.div`
    width: 200px;
    height: 400px;
    border: 1px solid grey;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: blue;
    svg{
        grid-row: 4;
    }
`
const TypeFormName = styled.h3`
    grid-row: 1/3;
    grid-column: 1/3;
`

const ResponsesCounter = styled.span`
    grid-row: 4;
`

export { Card , ResponsesCounter , TypeFormName};
