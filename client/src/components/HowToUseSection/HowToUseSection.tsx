import { Carousel } from "../Carousel";
import { Container, ImageContainer } from "../styles/Container.styled";
import { Title } from "../styles/Heading.styled";
import { CarouselItem } from "../CarouselItem";
import personImage from "../../assets/imgs/p3.webp";
import slideImage from "../../assets/imgs/slide1.webp";
import exampleImage from "../../assets/imgs/example1.webp";
import resultImage from "../../assets/imgs/results@1x.webp"
import { DashedList } from "../DashedList";
import { Link } from "react-router-dom";
import { UnderLine } from "../styles/Span.styled";

const HowToUseSection = () => {
  const topNotes = [
    {
      heading: "Marketers",
      text: "attract new customers with Typeform",
    },
    {
      heading: "Entrepreneurs",
      text: "find their audience with Typeform",
    },
    {
      heading: "Nonprofits",
      text: "connect communities with Typeform",
    },
  ];
  const captions = [
    "Beardbrand got 150k leads with an embedded quiz on their homepage",
    "Codeworks filters signups and finds the best students with a simple form",
    "Mask Match shipped over 350k masks from ordinary people to healthcare workers",
  ];

  const urls = ["/", "/", "/"];
  const Images = [personImage, personImage, personImage];
  return (
    <>
      <Container>
        <Title fontSize={36}>{"People make magic happen with Typeform"}</Title>
        <Carousel
          items={[
            <CarouselItem
              topNote={topNotes[0]}
              caption={captions[0]}
              url={urls[0]}
              img={Images[0]}
            />,
            <CarouselItem
              topNote={topNotes[1]}
              caption={captions[1]}
              url={urls[1]}
              img={Images[1]}
            />,
            <CarouselItem
              topNote={topNotes[2]}
              caption={captions[2]}
              url={urls[2]}
              img={Images[2]}
            />,
          ]}
        />
      </Container>

      <Container>
        <Title>Here’s how it works</Title>
        <DashedList
          items={[
            "Pick a template or start fresh.",
            "Build a simple form in minutes.",
            "No coding needed.",
          ]}
          heading={"1. Create"}
        />
        <Link to={"/"}>
          <UnderLine>Explore templates</UnderLine>
        </Link>
        <ImageContainer>
          <img src={slideImage} alt="Slide 1" />
        </ImageContainer>
      </Container>

      {/* Change the background of this container. Background with image */}
      <Container>
        <ImageContainer>
          <img src={exampleImage} alt="Example Image" />
        </ImageContainer>
        <DashedList
          items={[
            "Embed into your website.",
            "Launch in an email.",
            "Or just share the link.",
          ]}
          heading={"2. Share"}
        />
      </Container>

      <Container>
        <DashedList
          items={[
            "See responses and completion rates.",
            "Generate shareable reports.",
            "Send data to your favourite tools for in-depth analysis.",
          ]}
          heading={"3. Get results"}
        />

        <ImageContainer>
          <img src={resultImage} alt="Result Image" />
        </ImageContainer>
      </Container>
    </>
  );
};

export default HowToUseSection;
