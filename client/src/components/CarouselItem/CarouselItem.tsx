import {
  CarouselItemContainer,
  ImageContainer,
} from "../styles/Container.styled";
import { Description } from "../Description";
import { Heading, Title } from "../styles/Heading.styled";
import { Bold } from "../styles/Span.styled";
import { Link } from "react-router-dom";
import { Box } from "../styles/Box.styled";
import { TransparentButton } from "../styles/Button.styled";

const CarouselItem = (props: {
  topNote: { heading: string; text: string };
  caption: string;
  url: string;
  img: string;
}) => {
  const { topNote, caption, url, img } = props;
  return (
    <CarouselItemContainer>
      <Description
        heading={topNote.heading}
        text={topNote.text}
        headingSize={16}
        textSize={16}
      />
      <Title fontSize={36}>
        {/* Beardbrand got
        <Bold>150k leads with an embedded quiz</Bold>
        on their homepage */}
        {caption}
      </Title>
      <Box>
        <Link to={url}>READ THE FULL STORY</Link>
        <TransparentButton>SEE NEXT</TransparentButton>
      </Box>
      <ImageContainer>
        <img src={img} alt="Placeholder Img" width={"480px"} height={"auto"} />
      </ImageContainer>
    </CarouselItemContainer>
  );
};

export default CarouselItem;
