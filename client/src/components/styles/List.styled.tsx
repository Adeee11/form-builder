import styled from "styled-components";

const List = styled.ul`
    list-style: none;
    padding-left: 0;
`
const TickList = styled(List)`
    display: flex;
    @media (max-width:900px) {
        justify-content: center;
    }
`

const Item = styled.li`    
    padding: 5px;
`
const TickItem = styled(Item)`
    &:before{
        content: '✓';
    }
`

export  {List , TickList, Item, TickItem}