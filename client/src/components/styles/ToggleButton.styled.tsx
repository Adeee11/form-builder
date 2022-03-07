import styled from "styled-components";

type Props = {
    color?:string
}

export const ToggleButton = styled.span<Props>`
    font-size: 24px;
    margin: 10px 0;
    padding: 0 20px;
    color:${({color})=>color || 'black'}
` 