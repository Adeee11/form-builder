import { useState } from 'react';
import { BsFillPersonFill, BsSearch } from "react-icons/bs";
import { MdArrowDropDown, MdArrowDropUp, MdArrowUpward } from "react-icons/md";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
import {
  Wrapper,
  Search,
  WorkSpaceType,
  WorkSpace,
  Account,
  Help,
  Container
} from "./SideBarMenu.styles";

const SideBarMenu = () => {
  const [showHelpList, setShowHelpList] = useState(false);
  return (
    <>
      <Wrapper>
        <Search>
          <span>
            <BsSearch />
          </span>
          <input type="text" placeholder="Find workspace or typeform" />
        </Search>

        <WorkSpaceType>
          <span>
            <span>
              <MdArrowDropDown />
            </span>
            <span>
              <BsFillPersonFill />
            </span>

            <p>PRIVATE</p>
          </span>
          <button>+</button>
        </WorkSpaceType>

        {/* number of forms */}
        <WorkSpace>
          my workSpace
          <span>{1}</span>
        </WorkSpace>
        <Container>
          <Account>
            {/* username's Account */}
            <h3><b>Username's</b> acount</h3>
            <p>Response Collected</p>
            {/* number of responses */}
            <p>6</p>
          </Account>

          <Help>

            <p onClick={() => setShowHelpList(!showHelpList)}>
              {"Help & Inspiration"}
              <span>
                {!showHelpList && <RiArrowDropUpLine />}
                {showHelpList && <RiArrowDropDownLine />}
              </span>
            </p>
            {showHelpList &&
              <ul>
                <li>Help Center</li>
                <li>Ask The Community </li>
                <li>Learn The Basics</li>
                <li>Branch or skip Question</li>
                <li>Pull in info you already know</li>
                <li>Embed your typeform</li>
              </ul>}
          </Help>
        </Container>
      </Wrapper>
    </>
  );
};

export default SideBarMenu;
