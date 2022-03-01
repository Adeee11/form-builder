import clsx from "clsx";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./LoginModal.css";

const LoginModal = () => {
  const [openPopUp, setOpenPopup] = useState(false);

  return (
    <div className="login-modal">
      <button onClick={() => setOpenPopup(!openPopUp)}>Log In</button>
      <div
        className={clsx("login-modal__content", {
          "login-modal--show": openPopUp,
        })}
      >
        <form >
          <button
            onClick={() => setOpenPopup(!openPopUp)}
            className="login-modal__cross-button"
          >
            <AiOutlineClose />
          </button>
          <h1>Log In</h1>
           {/* User Name Field  */}
          <div className="login-modal__form-field">
            <label htmlFor="userID">User ID: </label>
            <input type="text" id="userID" name="userID" />
          </div>
          {/* Password Field  */}
          <div className="login-modal__form-field">
            <label htmlFor="">Password</label>
            <input type="password" name="password" id="password" />
          </div>
           {/* Submit Form Button  */}
          <input type="submit"  value={'Log In'}/>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
