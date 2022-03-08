import { ListOfLinks } from "../ListOfLinks";
import { Container, WhiteLink } from "./FooterSection.styles";
import { MdLocationOn } from "react-icons/md";
import {
  AiOutlineCopyrightCircle,
  AiFillTwitterCircle,
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { RiFacebookCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const FooterSection = () => {
  const headings = ["Heading1", "Heading2", "Heading3", "Heading4"];
  const items = [
    { itemName: "Link1", url: "/" },
    { itemName: "Link2", url: "/" },
    { itemName: "Link3", url: "/" },
    { itemName: "Link4", url: "/" },
  ];
  return (
    <>
      <Container>
        <ListOfLinks heading={headings[0]} items={items} />
        <ListOfLinks heading={headings[1]} items={items} />
        <ListOfLinks heading={headings[2]} items={items} />
        <ListOfLinks heading={headings[3]} items={items} />
        <Container>
          <RiFacebookCircleLine />
          <AiFillTwitterCircle />
          <AiOutlineInstagram />
          <AiOutlineLinkedin />
          <AiOutlineYoutube />
        </Container>
        <hr />
        <Container>
          <WhiteLink to={"/"}>
            <MdLocationOn />
            With love from Barcelona
          </WhiteLink>
          <WhiteLink to={"/"}>
            <AiOutlineCopyrightCircle />
            Typeform
          </WhiteLink>
        </Container>
      </Container>
    </>
  );
};

export default FooterSection;
