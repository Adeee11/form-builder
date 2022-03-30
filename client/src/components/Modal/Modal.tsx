import { Dispatch, SetStateAction } from "react";
import {
  BsCheckLg,
  BsLink,
  BsTelephoneFill,
  BsTextParagraph,
} from "react-icons/bs";
import { MdEmail, MdShortText } from "react-icons/md";
import { Modal as M } from "./Modal.style";

type propType = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  AddInput: (i: string) => void;
};
const Modal = ({ setShowModal, AddInput }: propType) => {
  return (
    <M onClick={() => setShowModal(false)}>
      <div className="popup">
        <h3>All Questions Types</h3>
        <ul>
          <li onClick={() => AddInput("text")}>
            <span className="short">
              <MdShortText />
            </span>
            Short Text
          </li>
          <li onClick={() => AddInput("textArea")}>
            <span className="long">
              <BsTextParagraph />
            </span>
            Long Text
          </li>
          <li onClick={() => AddInput("choice")}>
            <span className="choice">
              <BsCheckLg />
            </span>
            Multiple Choices
          </li>
          <li onClick={() => AddInput("email")}>
            <span className="email">
              <MdEmail />
            </span>
            Email
          </li>
          <li onClick={() => AddInput("number")}>
            <span className="number">
              <BsTelephoneFill />
            </span>
            Phone Number
          </li>
          <li onClick={() => AddInput("url")}>
            <span className="url">
              <BsLink />
            </span>
            Website
          </li>
        </ul>
      </div>
    </M>
  );
};

export default Modal;
