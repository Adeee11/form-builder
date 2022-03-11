import { TypeformCard } from "../TypeformCard";
import { Wrapper } from "./WorkspaceMain.styles";

const WorkspaceMain = () => {
  const TypeformNames = ["First Typeform","Second Typeform", "Third Typeform", "Fourth Typeform"]

  return (
    <>
      <hr />
      <Wrapper>
        <TypeformCard typeformName={TypeformNames[0]} responsesNumber={0}/>
        <TypeformCard typeformName={TypeformNames[1]} responsesNumber={1}/>
        <TypeformCard  typeformName={TypeformNames[2]} responsesNumber={2}/>
        <TypeformCard  typeformName={TypeformNames[3]} responsesNumber={3}/>
      </Wrapper>
    </>
  );
};

export default WorkspaceMain;
