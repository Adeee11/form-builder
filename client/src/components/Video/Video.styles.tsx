import styled from "styled-components";

type WidthProp = {
    width?:string
}

const VideoContainer = styled.video<WidthProp>`
    width:${({width})=>width || '100vw'};
    height:auto;
`
export {VideoContainer}