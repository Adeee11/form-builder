import { CarouselContainer, ImageContainer } from "./Carousel.styles";

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
  const { items, imgs, displayArrow } = props;
  return (
    <>
      <CarouselContainer>
        {imgs
          ? imgs.map((Img) => (
              <img
                src={Img}
                alt="PlaceHolder Img"
                width="480px"
                height="auto"
              />
            ))
          : items?.map((item) => item)}
      </CarouselContainer>
    </>
  );
};

export default Carousel;