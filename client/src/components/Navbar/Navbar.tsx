import { Dropdown } from "../Dropdown";
import { LoginModal } from "../LoginModal";
import { SignUpModal } from "../SignUpModal";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";
import { useState } from "react";
import clsx from "clsx";

const Navbar = () => {
  const navbarBrand = "Typeform";

  const [toggle, setToggle] = useState(false);
  return (
    <nav className="navbar">
      {/* NavBar Brand  */}
      <a href="" className="navbar__brand  ">
        <h1>{navbarBrand}</h1>
      </a>
      {/* Toggle Button  */}
      <span
        className={clsx("navbar__toggle-button", { "navbar--hide": toggle })}
        onClick={() => setToggle(!toggle)}
      >
        <GiHamburgerMenu />
      </span>

      <span
        className={clsx("navbar__toggle-button", { "navbar--hide": !toggle })}
        onClick={() => setToggle(!toggle)}
      >
        <AiOutlineClose />
      </span>

      {/* Nav Links  */}
      <ul className={clsx("navbar__nav-links", { "navbar--show": toggle })}>
        <li>
          <a href="">Link1</a>
        </li>
        <li>
          <a href="">Link2</a>
        </li>
        <li>
          {/* <a href=""> */}
            <Dropdown options={['Menu 1', 'Menu 2', 'Menu 3']}/>
          {/* </a> */}
        </li>
      </ul>

      <div className={clsx("navbar__signup-login", { "navbar--show": toggle })}>
        <SignUpModal />
        <LoginModal />
      </div>
    </nav>
  );
};

export default Navbar;
