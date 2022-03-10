import { Description } from "../Description";
import { Container, StyledLink, Title } from "./About.styles";
//@ts-ignore
import video1 from "../../assets/imgs/about-1.mp4";
//@ts-ignore
import video2 from "../../assets/imgs/about-2.mp4";

import img1 from '../../assets/imgs/carousel-img-1.webp'
import img2 from '../../assets/imgs/carousel-img-2.webp'
import img3 from '../../assets/imgs/carousel-img-3.webp'
import { Video } from "../Video";
import { Carousel } from "../Carousel";
import { Button } from "../Button";

const AboutSection = () => {
  const headings = [
    "MADE FOR HUMANS",
    "DESIGNED TO IMPRESS",
    "BUILT WITH BRAINS",
  ];
  const texts = [
    "One question at a time — like a conversation — keeps your audience engaged. You get more thoughtful responses, and higher completion rates.",
    "Built-in photo and video libraries bring questions to life. Custom layouts and themes show your brand at its best. A sleek interface ties it all together.",
    "Conditional logic lets you ask the right follow-up questions and skip the rest. Surveys feel less like interrogations, and more like conversations.",
  ];
  return (
    <>
      <Container>
        <Title>
          Create <StyledLink to={"/"}>forms</StyledLink>,{" "}
          <StyledLink to={"/"}>surveys</StyledLink>, and{" "}
          <StyledLink to={"/"}>quizzes</StyledLink> that people enjoy answering
        </Title>
        <Description
          heading={headings[0]}
          text={texts[0]}
          headingSize={'14px'}
          textSize={'20px'}
        />
        <Video width={'80vw'} url={video1} />

        <Description
          heading={headings[1]}
          text={texts[1]}
          headingSize={"14px"}
          textSize={"20px"}
        />
        <Carousel imgs={[img1,img2,img3]}/>

        <Description
          heading={headings[2]}
          text={texts[2]}
          headingSize={"14px"}
          textSize={"20px"}
        />
        <Video width={'80vw'} url={video2} />
        <Button text="Sign up for free"/>
      </Container>
    </>
  );
};

export default AboutSection;
