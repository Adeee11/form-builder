import styled from "styled-components";

type FocusedImageProp = {
  focusedImage: number;
};

const CarouselWrapper = styled.div<FocusedImageProp>`
  display: flex;
  flex-wrap: no-wrap;
  overflow-x: hidden;
  margin-left: ${({ focusedImage }) =>
    ((1 - focusedImage) * 280).toString() + "px"};
`;

const CarouselItem = styled.div`
  width: 280px;
  height: 400px;
  overflow: hidden;
  margin-right: 10px;
  min-width: 200px;
`;

const LeftArrow = styled.span`
  align-self: center;
  font-size: 35px;
`;
const RightArrow = styled(LeftArrow)`
  
`;

export { CarouselWrapper, CarouselItem, LeftArrow, RightArrow };
