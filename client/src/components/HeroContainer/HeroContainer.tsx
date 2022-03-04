import { Description } from "../Description";
import { Button } from "../styles/Button.styled";
import {
  DescriptionContainer,
  ImageContainer,
} from "../styles/Container.styled";
import heroImg from "../../assets/imgs/heroImg.jpg";
import { CheckList } from "../CheckList";

const HeroContainer = () => {
  const heading = "There's a better way to ask";
  const text =
    "You don't want to make a boring form." +
    " And your audience won't answer one." +
    " Create a typeform instead—and make everyone happy.";

  const items = ['No credit card required', 'No time limit on Free plan']
  return (
    <>
      <DescriptionContainer>
        <Description
          heading={heading}
          text={text}
          headingSize={48}
          textSize={24}
        />
        <Button>Get started - it's free</Button>
      </DescriptionContainer>
      <ImageContainer>
        <img src={heroImg} alt="heroImg" width="480px" height="auto" />
      </ImageContainer>
      <CheckList items={items}/>
    </>
  );
};

export default HeroContainer;
