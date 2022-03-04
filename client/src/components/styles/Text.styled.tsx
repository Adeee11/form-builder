import styled from 'styled-components'

interface Props {
    fontSize:number
}

export const Text = styled.p<Props>`
    font-size: ${({fontSize})=>fontSize};
    font-family: 'IBM Plex Sans', sans-serif;
    margin: 0 auto;
    margin-bottom: 40px;
    max-width: 400px;
`