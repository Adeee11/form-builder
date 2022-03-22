import { Card, ResponsesCounter, TypeFormName } from "./TypeformCard.styles";
import { BsThreeDots } from "react-icons/bs";

const TypeformCard = (props: {
  typeformName: string;
  responsesNumber: number;
  onClick: () => void
}) => {
  const { typeformName, responsesNumber, onClick } = props;
  return (
    <>
      <Card onClick={onClick}>
        <TypeFormName>{typeformName}</TypeFormName>
        <hr />
        <ResponsesCounter>
          {responsesNumber
            ? `${responsesNumber} responses yet.`
            : `No response yet`}
        </ResponsesCounter>
        <BsThreeDots />
      </Card>
    </>
  );
};

export default TypeformCard;
