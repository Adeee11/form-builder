import {
  Card,
  ModalContainer,
  ModalItems,
  ResponsesCounter,
  TypeFormName,
} from "./TypeformCard.styles";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";

const TypeformCardModal = (props: {
  editForm: () => void;
  deleteForm: () => void;
}) => {
  const { editForm, deleteForm } = props;
  return (
    <>
      <ModalContainer>
        <ModalItems onClick={editForm}>Edit </ModalItems>
        <ModalItems onClick={deleteForm}>Delete </ModalItems>
        <ModalItems >View </ModalItems>
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
       
        <div className="bottom">
        <ResponsesCounter>
          {responsesNumber?responsesNumber+" responses":"No responses"} 
        </ResponsesCounter>
          <BsThreeDots onClick={() => setShowOptions(!showOptions)} />
          {showOptions && (
            <TypeformCardModal editForm={edit} deleteForm={delForm} />
          )}
        </div>
      </Card>
    </>
  );
};

export default TypeformCard;
