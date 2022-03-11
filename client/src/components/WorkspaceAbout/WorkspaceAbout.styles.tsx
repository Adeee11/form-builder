import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr repeat(7, 1fr);
    background: gray;
    button {
        grid-row: 2;
        grid-column: 1/4;
        max-width: 200px;
    }

    select {
        grid-row: 2;
        grid-column: 5/8;
    }
`;

const WorkspaceName = styled.input`
    border: transparent;
    outline: none;
    font-size: 20px;
    max-width: 80%;
    margin-right: auto;
    padding: 5px 8px;
`
const IconContainer = styled.span`
`

export { Wrapper, WorkspaceName, IconContainer };
