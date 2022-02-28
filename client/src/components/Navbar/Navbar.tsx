import { Dropdown } from "../Dropdown";
import { LoginModal } from "../LoginModal";
import { SignUpModal } from "../SignUpModal";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "./Navbar.css";
import { useState } from "react";
import clsx from "clsx";

const Navbar = () => {
  const navbarBrand = "Typeform";

  const [toggle, setToggle] = useState(false);
  return (
    <nav className="navbar">
      {/* Navbar brand  */}
      <div className="navbar__brand">
        <a href="#">
          <h1>{navbarBrand}</h1>
        </a>
      </div>

      <span
        className={clsx("navbar__toggle-button", { hide: toggle })}
        onClick={() => setToggle(!toggle)}
      >
        <FaBars />
      </span>
      <span
        className={clsx("navbar__toggle-button", { hide: !toggle })}
        onClick={() => setToggle(!toggle)}
      >
        <IoClose />
      </span>
      <div className={clsx("navbar__toggle-items", { hide: !toggle })}>
        <ul className="navbar__links-container">
          <li>
            {" "}
            <a href="">
              <Dropdown />
            </a>
          </li>
          <li>
            {" "}
            <a href="">
              <Dropdown />
            </a>
          </li>
          <li>
            {" "}
            <a href="">Nav Link 1</a>
          </li>
          <li>
            {" "}
            <a href="">Nav Link 2</a>
          </li>
        </ul>
        <div className="navbar__signup-login">
          <SignUpModal />
          <LoginModal />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
