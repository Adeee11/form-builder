import { Container } from "../styles/Container.styled";
import { UnstyledList } from "../UnstyledList";
import { SubHeading } from "../styles/Heading.styled";
import { IconsGrid } from "../IconsGrid";
import { Link } from "react-router-dom";

const Footer = () => {
    const SampleLinks = [
        {
            name:'PlaceHolder',
            url:'/'
        },
        {
            name:'PlaceHolder',
            url:'/'
        },
        {
            name:'PlaceHolder',
            url:'/'
        },
        {
            name:'PlaceHolder',
            url:'/'
        },
        {
            name:'PlaceHolder',
            url:'/'
        },
    ]
  return (
    <>
      <Container>
        <SubHeading fontSize={16}>PRODUCT</SubHeading>
        <UnstyledList items={SampleLinks}/>
      </Container>
      <Container>
        <SubHeading fontSize={16}>TEMPLATES</SubHeading>
        <UnstyledList items={SampleLinks}/>
      </Container>
      <Container>
        <SubHeading fontSize={16}>INTEGRATIONS</SubHeading>
        <UnstyledList items={SampleLinks}/>
      </Container>
      <Container>
        <SubHeading fontSize={16}>RESOURCES</SubHeading>
        <UnstyledList items={SampleLinks}/>
      </Container>
      
      <Container>
        <SubHeading fontSize={16}>GET TO KNOW US</SubHeading>
        <UnstyledList items={SampleLinks}/>
      </Container>
      {/* Leaving the icon grid for now. Need to be different than the one I formed */}
      <hr />
      <Container>
          <Link to={'/'}>With love from India</Link>
          <Link to={'/'}>Typeform Clone</Link>
      </Container>
    </>
  );
};

export default Footer;
