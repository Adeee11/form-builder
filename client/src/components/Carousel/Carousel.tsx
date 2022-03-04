import { isTemplateSpan } from "typescript";
import { CarouselContainer, ImageContainer } from "../styles/Container.styled";

const Carousel = (props: {
  items?: React.FC[];
  imgs?: string[];
  displayArrow?: boolean;
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
