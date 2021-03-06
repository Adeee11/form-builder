import { Button } from "../Button";
import { Description } from "../Description";
import { Video } from "../Video";
import {
  Wrapper,
  ListContainer,
  VideoContainer,
  ButtonContainer,
  DescriptionContainer,
} from "./HeroSection.styles";
//@ts-ignore
import heroVideo from "../../assets/imgs/hero-video.mp4";
import { CheckedList } from "../CheckedList";

const HeroSection = () => {
  const descriptionHeading = "There's a better way to ask";
  const descriptionText =
    "You don't want to make a boring form. And your audience won't answer one. Create a typeform instead—and make everyone happy.";
  return (
    <>
      <Wrapper>
        <DescriptionContainer>
          {/* Description */}
          <Description
            heading={descriptionHeading}
            text={descriptionText}
            headingSize={"36px"}
            textSize={"24px"}
          />
        </DescriptionContainer>

        <ButtonContainer>
          {/* Button */}
          <Button text="Get Started-it's free" />
        </ButtonContainer>

        <VideoContainer>
          {/* Video */}
          <Video url={heroVideo} />
        </VideoContainer>
        <ListContainer>
          {/* List */}
          <CheckedList
            items={["No credit card required", "No time limit on Free plan"]}
          />
        </ListContainer>
      </Wrapper>
    </>
  );
};

export default HeroSection;
