import { Description } from "../Description";
import { Icon } from "../Icon";
import { Container, ImageContainer } from "../styles/Container.styled";
import { Text } from "../styles/Text.styled";

const ReviewCard = (props: {
  caption: string;
  img: string;
  personDetail: { name: string; designation: string };
  company: string;
}) => {
    const {caption, img, personDetail, company} = props
  return <>
    <Container>
        <Text fontSize={20}>
            {caption}
        </Text>
        <ImageContainer>
            <img src={img} alt="Reviewer's Image" />
        </ImageContainer>
        <Description
            heading={personDetail.name}
            text={personDetail.designation}
            headingSize= {12}
            textSize={12}
        />
        <Icon iconImg={company}/>
    </Container>
  </>;
};

export default ReviewCard;
