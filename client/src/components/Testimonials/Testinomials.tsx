import { Container } from "../styles/Container.styled";
import { Title } from "../styles/Heading.styled";
import { ReviewGallery } from "../ReviewGallery";
import { ReviewCard } from "../ReviewCard";
import johnnyRodgers from "../../assets/imgs/johnny-rodgers.webp";
import deannaMcintosh from "../../assets/imgs/deanna-mcintosh.webp";
import ellen from "../../assets/imgs/ellen.webp";
import cara from "../../assets/imgs/cara.webp";
import gaurav from "../../assets/imgs/gaurav.webp";
import kyle from "../../assets/imgs/kyle.webp";
import slackLogo from "../../assets/imgs/logo-slack.webp";
import affinityLogo from "../../assets/imgs/logo-affinity.webp";
import selfCareForTeachersLogo from "../../assets/imgs/logo-self-care-for-teachers@1x.webp";
import amplitudeLogo from "../../assets/imgs/logo-amplitude.webp";

import superhumanLogo from "../../assets/imgs/logo-superhuman@1x.webp";
import dollarLogo from "../../assets/imgs/logo-dollar.webp";
import { Button } from "../styles/Button.styled";

const Testinomials = () => {
  const captions = [
    "Form builders are as old as the web, but Typeform elevates the medium substantially.",
    "Typeform gives life to a website. It makes filling out information fun and interactive.",
    "First impressions and reputations matter. Typeform helps me look after mine.",
    "I don't know any other tool out there as lovely as Typeform.",
    "Typeform is a production-grade system for our entire growth funnel.",
    "You used to need developers to do all this. Not anymore.",
  ];

  const imgs = [johnnyRodgers, deannaMcintosh, ellen, cara, gaurav, kyle];

  const personDetails = [
    {
      name: "Johnny Rodgers",
      designation: "Product Architect",
    },
    {
      name: "Deanna Mcintosh",
      designation: "Founder",
    },
    {
      name: "Ellen Ronalds Keen",
      designation: "Founder",
    },
    {
      name: "Cara Harshman",
      designation: "Head of Content Marketting",
    },
    {
      name: "Gaurav Vohra",
      designation: "Head of Growth",
    },
    {
      name: "Kyle Maltz",
      designation: "Chief Operating Officer",
    },
  ];

  const Icons = [
    slackLogo,
    affinityLogo,
    selfCareForTeachersLogo,
    amplitudeLogo,
    superhumanLogo,
    dollarLogo,
  ];
  // used for running map
  const counter = [0, 1, 2, 3, 4, 5];
  return (
    <>
      <Container>
        <Title>Here's what people say about us</Title>
        <ReviewGallery
          ReviewCards={counter.map((i) => (
            <ReviewCard
              caption={captions[i]}
              img={imgs[i]}
              personDetail={personDetails[i]}
              company={Icons[i]}
            />
          ))}
        />
        <Container>
          <Title>How you ask is everything.</Title>
          <Button>Sign up free</Button>
        </Container>
      </Container>
    </>
  );
};

export default Testinomials;
