import clsx from "clsx";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./SignUpModal.css";

const SignUpModal = () => {
  const [openPopUp, setOpenPopup] = useState(false);

  return (
    <div className="signup-modal">
      {/* Sign Up Button  */}
      <button onClick={() => setOpenPopup(!openPopUp)}>Sign Up</button>

      {/* Modal Content  */}
      <div
        className={clsx(" signup-modal__content", {
          " signup-modal--show": openPopUp,
        })}
      >
        <form >
          {/* Cross Button  */}
          <button onClick={() => setOpenPopup(!openPopUp)} className="signup-modal__cross-button">
            <AiOutlineClose />
          </button>
          <h1>Sign Up</h1>

          {/* User Name Field  */}
          <div className=" signup-modal__form-field">
            <label htmlFor="userID">User ID: </label>
            <input type="text" id="userID" name="userID" />
          </div>
          {/* Password Field  */}
          <div className=" signup-modal__form-field">
            <label htmlFor="">Password: </label>
            <input type="password" name="password" id="password" />
          </div>
          {/* Submit Form Button  */}
          <input type="submit"  value={'Sign Up'}/>
        </form>
      </div>
    </div>
  );
};

export default SignUpModal;
