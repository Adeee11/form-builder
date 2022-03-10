import { useState } from "react";
import {
  CarouselContainer,
  ImageContainer,
  LeftArrowContainer,
} from "./Carousel.styles";

enum ArrowType {
  invisible = 0,
  sideArrow,
  arrowButtons,
}

interface CarouselItem {
  topNote: {
    heading: string;
    text: string;
  };
  caption: string;
  url: string;
  img: string;
}



const Carousel = (props: {
  items?: React.ReactNode[];
  imgs?: string[];
  displayArrow?: ArrowType;
}) => {
  const [focusedImage, setFocusedImage] = useState(1)
  const { items, imgs, displayArrow } = props;
  let currentImage:number;
  let gridColumns:number;
  // let noofImages:number = imgs?.length;
  return (
    <>
      <CarouselContainer>
        {imgs
          ? imgs.map((Img, index) => 
            {
              // ci > fi
// grid-column: c - n + ci
// ci <fi
// grid-column: ci
// ci =fi
// grid-column: ci / ci + c-n
// write this logic inside component not styled file
// ci - current image index, fi - focused image index, 
// n - total no. of images, c - no.of grid-columns
              if(currentImage > focusedImage){
                let start
              }
              return <ImageContainer key={index} startColumn={1} endColumn={2}>
                <img
                  key={index}
                  src={Img}
                  alt="PlaceHolder Img"
                  
                />
              </ImageContainer>
            }
              
            )
          : items?.map((item) => item)}
        <LeftArrowContainer>&#8592;</LeftArrowContainer>
      </CarouselContainer>
    </>
  );
};

export default Carousel;
