import {
  ButtonContainer,
  Card,
  ModalContainer,
  ModalItems,
  ResponsesCounter,
  TypeFormName,
  Container,
} from "./TypeformCard.styles";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const TypeformCardModal = (props: {
  editForm: () => void;
  deleteForm: () => void;
}) => {
  const { editForm, deleteForm } = props;
  return (
    <>
      <ModalContainer>
        <ModalItems onClick={editForm}>Edit Form</ModalItems>
        <ModalItems onClick={deleteForm}>Delete Form</ModalItems>
      </ModalContainer>
    </>
  );
};

const TypeformCard = (props: {
  typeformName: string;
  responsesNumber: number;
  edit: () => void;
  delForm: () => void;
}) => {
  const { typeformName, responsesNumber, edit, delForm } = props;
  const [showOptions, setShowOptions] = useState(false);
  return (
    <>
      {/* <Card onClick={onClick}> */}
      <Card>
        <TypeFormName>{typeformName}</TypeFormName>
        <hr />
        <ResponsesCounter>
          {responsesNumber
            ? `${responsesNumber} responses yet.`
            : `No response yet`}
        </ResponsesCounter>
        <Container>
          <ButtonContainer>
            {/* <BsThreeDots onClick={() => setShowOptions(!showOptions)} />
          {showOptions && (
            <TypeformCardModal editForm={edit} deleteForm={delForm} />
          )} */}
            <AiFillEdit onClick={edit} />
          </ButtonContainer>
          <ButtonContainer>
            <MdDelete onClick={delForm} />
          </ButtonContainer>
        </Container>
      </Card>
    </>
  );
};

export default TypeformCard;
