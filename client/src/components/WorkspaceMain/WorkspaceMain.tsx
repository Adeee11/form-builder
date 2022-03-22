import { useQuery } from "@apollo/client";
import { useAppSelector } from "../../providers/app/hooks";
import { TypeformCard } from "../TypeformCard";
import { GET_FORMS } from "./queries";
import { Wrapper } from "./WorkspaceMain.styles";

const WorkspaceMain = () => {
  const userId = useAppSelector((state) => state.user.id);
  const { loading, error, data } = useQuery(GET_FORMS, {
    variables: { userId },
  });
  if (loading) console.log("Loading ...");
  if (error) console.log(JSON.stringify(error, null, 2));
  if (data) {
    console.log("Data", data);
  }
  console.log("data", JSON.stringify(data, null, 2));
  let TypeformNames:string[];
  if(data){
    const Names: string[] = data.sortedForms.map(
      (ele: { title: string; __typename: string }) => ele.title
    );
    console.log(Names.length);
     TypeformNames = Names.length ? [...Names] : ["No typedForm yet"];
  } else{
   TypeformNames = ['Data didn\'t arrive yet']

  }
  

  return (
    <>
      <hr />
      <Wrapper>
        {TypeformNames.map((title: string, index: number) => (
          <TypeformCard
            key={"tfc" + index.toString()}
            typeformName={title}
            responsesNumber={0}
          />
        ))}
      </Wrapper>
    </>
  );
};

export default WorkspaceMain;
