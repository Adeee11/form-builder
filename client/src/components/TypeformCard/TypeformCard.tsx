import { Card, ResponsesCounter, TypeFormName } from "./TypeformCard.styles";
import { BsThreeDots } from "react-icons/bs";

const TypeformCard = (props: {
  typeformName: string;
  responsesNumber: number;
}) => {
  const { typeformName, responsesNumber } = props;
  return (
    <>
      <Card>
        <TypeFormName>{typeformName}</TypeFormName>

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
