import React from "react";
import { Description } from "../Description";
import heroImg from "../../imgs/heroImg.jpg";

const HeroSection = () => {
  const DescriptionHeading = "There's a better way to ask";
  const DescriptionText =
    "You don't want to make a boring form." +
    " And your audience won't answer one." +
    " Create a typeform instead—and make everyone happy.";

  return (
    <>
      <section>
        <Description
          DescriptionHeading={DescriptionHeading}
          DescriptionText={DescriptionText}
        />
        <button>Get Started - it's free</button>
      </section>

      <img src={heroImg} alt="Hero Img" />
      <ul>
        <li>No credit card required</li>
        <li>No time limit on Free plan</li>
      </ul>
    </>
  );
};

export default HeroSection;
