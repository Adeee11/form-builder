import { Dispatch, SetStateAction } from "react";
import { AiFillEye, AiTwotonePrinter } from "react-icons/ai";
import {
  BsArrowLeft,
  BsCheckLg,
  BsLink,
  BsTelephoneFill,
  BsTextParagraph,
} from "react-icons/bs";
import { MdArrowLeft, MdClose, MdDelete, MdEmail, MdShortText } from "react-icons/md";
import { LeftArrow } from "../Carousel/Carousel.styles";
import { ResModal } from "./ModalRes.styles";
type propTypes = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  date: string;
  deleteRes: () => void;
  data: any;
  submission: any;
};
const ModalRes = ({
  setShowModal,
  date,
  deleteRes,
  data,
  submission,
}: propTypes) => {
  return (
    <ResModal onClick={() => setShowModal(false)}>
      <div className="popups" onClick={(e) => e.stopPropagation()}>
        <header >
          <div className="col1">
            <span className="close" onClick={() => setShowModal(false)}>
              <BsArrowLeft />
            </span>
            <div className="date">{date}</div>
          </div>
          <div className="col2">
            <span>
              <AiFillEye />
            </span>
            <span>
              <AiTwotonePrinter />
            </span>
            <span className="del" onClick={() => { deleteRes(); setShowModal(false) }}>
              <MdDelete />
            </span>
          </div>
        </header>
        {data &&
          data.form.formData.map((item: any, index: number) => (
            <div className="block" key={index}>
              <div className="question">
                {item.fieldType === "text" && (
                  <span className="short span">
                    <MdShortText />
                    <span className="index">{index + 1}.</span>
                  </span>
                )}
                {item.fieldType === "email" && (
                  <span className="email span">
                    <MdEmail />
                    <span className="index">{index + 1}.</span>
                  </span>
                )}
                {item.fieldType === "number" && (
                  <span className="number span">
                    <BsTelephoneFill />
                    <span className="index">{index + 1}.</span>
                  </span>
                )}
                {item.fieldType === "url" && (
                  <span className="url span">
                    <BsLink />
                    <span className="index">{index + 1}.</span>
                  </span>
                )}
                {item.fieldType === "choice span" && (
                  <span className="choice">
                    <BsCheckLg />
                    <span className="index">{index + 1}.</span>
                  </span>
                )}

                {item.fieldType === "textArea" && (
                  <span className="long">
                    <BsTextParagraph />
                    <span className="index">{index + 1}.</span>
                  </span>
                )}

                <span>{item.Question}</span>
              </div>

              <p>{submission[index]}</p>
            </div>
          ))}
      </div>
    </ResModal>
  );
};

export default ModalRes;
