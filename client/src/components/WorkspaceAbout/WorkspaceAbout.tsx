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
import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

const WorkspaceAbout = (props: {
  changeFilter: Dispatch<SetStateAction<string>>;
  filter: string;
}) => {
  const workspaceName = "My Workspace";
  const navigate = useNavigate();
  const { changeFilter, filter } = props;
  return (
    <>
      <Wrapper>
        <FirstRow>
          <WorkspaceName type={"text"} defaultValue={workspaceName} />
          <PipeSymbol>|</PipeSymbol>
          <FaUserPlus />
          <ImLoop />
          <BsThreeDots />
        </FirstRow>
        <SecondRow>
          <Button
            text={"+ Create typeform"}
            onClick={() => navigate("/createForm")}
          />
          <SelectField
            changeFilter={changeFilter}
            filter={filter}
            options={["date", "title"]}
            label={""}
          />
        </SecondRow>
      </Wrapper>
    </>
  );
};

export default WorkspaceAbout;
