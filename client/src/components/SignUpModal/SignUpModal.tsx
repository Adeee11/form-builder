import clsx from "clsx";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./SignUpModal.css";

const SignUpModal = () => {
  const [openPopUp, setOpenPopup] = useState(false);

  return (
    <div className="signup-modal">
      <button onClick={() => setOpenPopup(!openPopUp)}>Sign Up</button>
      <div
        className={clsx(" signup-modal__content", {
          " signup-modal--show": openPopUp,
        })}
      >
        <form action="">
          <button onClick={() => setOpenPopup(!openPopUp)}>
            <AiOutlineClose />
          </button>
          <h1>Sign Up</h1>
          <div className=" signup-modal__form-field">
            <label htmlFor="userID">User ID: </label>
            <input type="text" id="userID" name="userID" />
          </div>
          <div className=" signup-modal__form-field">
            <label htmlFor="">Password</label>
            <input type="password" name="password" id="password" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpModal;
