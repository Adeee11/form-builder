import { Button } from "../Button";
import { Description } from "../Description";
import { Video } from "../Video";
import { Container } from "./HeroSection.styles";
//@ts-ignore
import heroVideo from '../../assets/imgs/hero-video.mp4'


const HeroSection = () => {
  const descriptionHeading = "There's a better way to ask";
  const descriptionText =
    "You don't want to make a boring form. And your audience won't answer one. Create a typeform instead—and make everyone happy.";
  return (
    <>
      <Container>
        <Description
          heading={descriptionHeading}
          text={descriptionText}
          headingSize={36}
          textSize={24}
        />
        <Button text="Get Started-it's free" />
        <Video url={heroVideo}/>
      </Container>
    </>
  );
};

export default HeroSection;
