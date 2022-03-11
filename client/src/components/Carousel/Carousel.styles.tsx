import styled from "styled-components";

type FocusedImageProp = {
  focusedImage: number;
};

const CarouselWrapper = styled.div<FocusedImageProp>`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 1fr;
  grid-column-gap: 10px;
  overflow-x: hidden;
  margin-left: ${({focusedImage})=>((1-focusedImage)*280).toString() + 'px'};
 
`

const CarouselItem = styled.div`
  width: 280px;
  height: 400px;
  overflow: hidden;
`

const LeftArrow = styled.span`
  align-self: center;
  font-size: 35px;
`

export {CarouselWrapper, CarouselItem, LeftArrow}