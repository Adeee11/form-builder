
import { Description } from "../Description";
import {
  ImageContainer,
  AboutContainer,
  Container,
} from "../styles/Container.styled";
import { Title } from "../styles/Heading.styled";
import placeHolderImg from "../../assets/imgs/heroImg.jpg";
import { Carousel } from "../Carousel";
import { Button } from "../styles/Button.styled";

const About = () => {
  const headings = [
    "MADE FOR HUMANS",
    "DESIGNED TO IMPRESS",
    "BUILT WITH BRAINS",
  ];
  const texts = [
    "One question at a time — like a" +
      "conversation — keeps your audience engaged." +
      "You get more thoughtful responses, and higher completion rates.",

    "Built-in photo and video libraries bring questions to life." +
      "Custom layouts and themes show your brand at its best." +
      "A sleek interface ties it all together.",
    "Conditional logic lets you ask the right follow-up questions and skip the rest." +
      "Surveys feel less like interrogations, and more like conversations.",
  ];

  return (
    <>
      {" "}
      <AboutContainer>
        <Title fontSize={36}>
          Create forms, surveys, and quizzes that people enjoy answering
        </Title>
        <Description
          heading={headings[0]}
          text={texts[0]}
          headingSize={14}
          textSize={24}
        />
        <ImageContainer>
          <img
            src={placeHolderImg}
            alt="PlaceHolder Img"
            width="480px"
            height="auto"
          />
        </ImageContainer>
      </AboutContainer>
      <Container>
        <Description
          heading={headings[1]}
          text={texts[1]}
          headingSize={14}
          textSize={24}
        />
        <Carousel imgs={[placeHolderImg, placeHolderImg, placeHolderImg]} />
      </Container>
      <Container>
        <Description
          heading={headings[2]}
          text={texts[2]}
          headingSize={14}
          textSize={24}
        />
        <ImageContainer>
          <img
            src={placeHolderImg}
            alt="PlaceHolder Img"
            width="480px"
            height="auto"
          />
        </ImageContainer>
        <Button>Sign up for free</Button>
      </Container>
    </>
  );
};

export default About;
