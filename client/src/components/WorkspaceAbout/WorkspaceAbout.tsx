import { IconContainer, WorkspaceName, Wrapper } from "./WorkspaceAbout.styles";
import { FaUserPlus } from "react-icons/fa";
import { ImLoop} from "react-icons/im"
import {BsThreeDots} from "react-icons/bs"
import { Button } from "../Button";
import { SelectField } from "../SelectField";

const WorkspaceAbout = () => {
  return (
    <>
      <Wrapper>
        <WorkspaceName type={"text"} defaultValue={"My Workspace"} />
        <FaUserPlus />
        <ImLoop />
        <BsThreeDots/>
        <Button text={"+ Create typeform"}/>
        <SelectField options={['Date Created','Last Updated', 'Alphabetical']} label={''}/>
      </Wrapper>
    </>
  );
};

export default WorkspaceAbout;
