import { Link } from "react-router-dom";
import { Description } from "../Description";
import { IconsGrid } from "../IconsGrid";
import { Container } from "../styles/Container.styled";
import { UnderLine } from "../styles/Span.styled";
import airtable from "../../assets/imgs/airtable@1x.webp";
import facebookPixel from "../../assets/imgs/facebookpixel@1x.webp";
import ganalytics from "../../assets/imgs/ganalytics@1x.webp";
import gsheets from "../../assets/imgs/gsheets@1x.webp";
import gtm from "../../assets/imgs/gtm@1x.webp";
import slack from "../../assets/imgs/slack@1x.webp";
import webHook from "../../assets/imgs/web-hook@1x.webp";
import zapier from "../../assets/imgs/zapier@1x.webp";

const IntegrationsSection = () => {
  const heading = "Integrations that banish busywork";
  const text =
    "Sync responses to Google Sheets." +
    " Ping people in Slack when someone fills out your survey." +
    "Sit back and watch your work flow.";
  const icons = [
    airtable,
    facebookPixel,
    ganalytics,
    gsheets,
    gtm,
    slack,
    webHook,
    zapier,
  ];
  return (
    <>
      <Container>
        <Description
          heading={heading}
          text={text}
          headingSize={36}
          textSize={24}
        />
        <Link to={"/"}>
          <UnderLine>See all integrations</UnderLine>
        </Link>
        <IconsGrid icons={icons} />
      </Container>
    </>
  );
};

export default IntegrationsSection;
