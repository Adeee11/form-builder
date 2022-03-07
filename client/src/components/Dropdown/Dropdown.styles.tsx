import styled from 'styled-components'

const Item = styled.p`
    font-size: 20px;
    padding: 5px 10px;
    margin-bottom: 20px;
`
const Heading = styled.p`
    font-size: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (min-width: 900px) {
        font-size: 16px;
    }
`
type showItemsProp = {
    showItems: boolean
}

const List = styled.ul<showItemsProp>`
  list-style: none;
  padding-left: 0;
  display:${({showItems})=> showItems?'grid':'none'};
  @media (min-width: 900px) {
      grid-template-columns: repeat(3,1fr);
  }
`;

type ArrowRotateProp = {
    rotate180?:boolean
}

const DownArrowHead = styled.span<ArrowRotateProp>`
    transform: rotate(${({rotate180})=>rotate180?'180deg':'0deg' || '0deg'});
    justify-self: start;
`

export {Item, Heading, DownArrowHead, List}