import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../providers/app/hooks";
import { changeEditFormId } from "../../providers/features/editFormIdSlice";
import { TypeformCard } from "../TypeformCard";
import { GET_FORMS } from "./queries";
import { Wrapper } from "./WorkspaceMain.styles";

const WorkspaceMain = () => {
  // getting current userId from the store
  const userId = useAppSelector((state) => state.user.id);
  // Query for getting all the forms for a user with a userID
  const { loading, error, data } = useQuery(GET_FORMS, {
    variables: { userId },
  });
  if (loading) console.log("Loading ...");
  if (error) console.log(JSON.stringify(error, null, 2));
  if (data) {
    console.log("Data", data);
  }
  // console.log("data", JSON.stringify(data, null, 2));

  // Variable for storing all form title and name
  let TypeformNames: { title: string; id: string }[];
  if (data) {
    const Names: { title: string; id: string }[] = data.sortedForms.map(
      (ele: { title: string; __typename: string; id: string }) => {
        const typedFormDetails = {
          title: ele.title,
          id: ele.id,
        };
        return typedFormDetails;
      }
    );
    console.log("Names Array", Names);
    TypeformNames = Names.length
      ? [...Names]
      : [{ title: "No typeform", id: "" }];
  } else {
    TypeformNames = [{ title: "Data didn't arrive yet", id: "" }];
  }
  // redux dispatch hook
  const dispatch = useAppDispatch();

  // editFormId . Id of form being clicked
  const editFormId = useAppSelector((state) => state.editFormId);
  // console.log("heya eddit form id", editFormId)

  //navigate hook from react-router-dom
  const navigate = useNavigate();

  // function for setting the editFormId for the form to be editted
  const editForm = async (id: string) => {
    console.log("Function Called\n", "id Check", id);
    await dispatch(changeEditFormId(id))
    // console.log("Inside Function eddit form id", editFormId)
    // console.log("Edit form Id", editFormId)
    navigate('/editForm')
  };

  return (
    <>
      <hr />
      <Wrapper>
        {TypeformNames.map(({ title, id }, index: number) => (
          <TypeformCard
            key={"tfc" + index.toString()}
            typeformName={title}
            responsesNumber={0}
            onClick={() => editForm(id)}
          />
        ))}
      </Wrapper>
    </>
  );
};

export default WorkspaceMain;
