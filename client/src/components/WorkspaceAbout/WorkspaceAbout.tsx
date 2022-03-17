import {
  FirstRow,
  SecondRow,
  IconContainer,
  PipeSymbol,
  Row,
  WorkspaceName,
  Wrapper,
} from "./WorkspaceAbout.styles";
import { FaUserPlus } from "react-icons/fa";
import { ImLoop } from "react-icons/im";
import { BsThreeDots } from "react-icons/bs";
import { Button } from "../Button";
import { SelectField } from "../SelectField";

const WorkspaceAbout = () => {
  const workspaceName = "My Workspace";

  return (
    <>
      <Wrapper>
        <FirstRow>
          <WorkspaceName type={"text"} defaultValue={workspaceName}/>
          <PipeSymbol>|</PipeSymbol>
          <FaUserPlus />
          <ImLoop />
          <BsThreeDots />
        </FirstRow>
        <SecondRow>
          <Button text={"+ Create typeform"} />
          <SelectField
            options={["Date Created", "Last Updated", "Alphabetical"]}
            label={""}
          />
        </SecondRow>
      </Wrapper>
    </>
  );
};

export default WorkspaceAbout;
