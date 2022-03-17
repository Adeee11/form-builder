import { useState } from "react";
import {
  CarouselItem,
  CarouselWrapper,
  LeftArrow,
  RightArrow,
} from "./Carousel.styles";

const Carousel = (props: { imgs: string[] }) => {
  const { imgs } = props;
  const [focusedImage, setFocusedImage] = useState(1);
  const moveLeft = () => {
    focusedImage <= imgs.length
      ? setFocusedImage(focusedImage + 1)
      : setFocusedImage(1);
  };
  const moveRight = () => {
    focusedImage <= imgs.length
      ? setFocusedImage(focusedImage - 1)
      : setFocusedImage(3);
  };
  return (
    <>
      <CarouselWrapper focusedImage={focusedImage}>
        <LeftArrow onClick={moveLeft}>&#8592;</LeftArrow>
        {imgs.map((img, index) => (
          <CarouselItem key={index} onClick={() => setFocusedImage(index + 1)}>
            <img
              src={img}
              alt="Carousel Item"
              width={"inherit"}
              height={"inherit"}
            />
          </CarouselItem>
        ))}
      </CarouselWrapper>
      <RightArrow onClick={moveRight}>&#8594;</RightArrow>
    </>
  );
};

export default Carousel;
