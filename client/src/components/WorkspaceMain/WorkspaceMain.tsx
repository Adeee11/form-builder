import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../providers/app/hooks";
import { changeEditFormId } from "../../providers/features/editFormIdSlice";
import { TypeformCard } from "../TypeformCard";
import { DEL_FORM, GET_FORMS } from "./queries";
import { Wrapper } from "./WorkspaceMain.styles";

const WorkspaceMain = (props: { filter: string }) => {
  const { filter } = props;
  // getting current userId from the store
  const userId = useAppSelector((state) => state.user.id);

  const [TypeformNames, setTypeformNames] = useState([
    { title: "Data didn't arrive yet", id: "", noOfResponses: 0 },
  ]);
  // Query for getting all the forms for a user with a userID
  const { loading, error, data, refetch } = useQuery(GET_FORMS, {
    variables: { userId, sortBy: filter },
  });
  if (loading) console.log("Loading ...");
  if (error) console.log(JSON.stringify(error, null, 2));
  // if (data) {
  //   console.log("Data", data);
  // }

  const [delForm, { loading: delLoad, error: delErr }] = useMutation(DEL_FORM);

  if (delLoad) console.log("Loading...");
  if (delErr) console.log(JSON.stringify(delErr, null, 2));

  // let TypeformNames: { title: string; id: string }[] = [
  //   { title: "Data didn't arrive yet", id: "" },
  // ];

  useEffect(() => {
    console.log("Filter boi", filter);
    if (data) {
      const Names: { title: string; id: string; noOfResponses: number }[] =
        data.sortedForms.map(
          (ele: {
            title: string;
            __typename: string;
            id: string;
            submission: String[];
          }) => {
            const typedFormDetails = {
              title: ele.title,
              id: ele.id,
              noOfResponses: ele.submission.length,
            };
            return typedFormDetails;
          }
        );
      console.log("Names Array", Names);
      Names.length
        ? setTypeformNames([...Names])
        : setTypeformNames([
            { title: "No typeform", id: "", noOfResponses: 0 },
          ]);
    }
    //  else {
    //   TypeformNames = [{ title: "Data didn't arrive yet", id: "" }];
    // }
  }, [data, filter]);
  // Variable for storing all form title and name

  // redux dispatch hook
  const dispatch = useAppDispatch();

  //navigate hook from react-router-dom
  const navigate = useNavigate();

  // function for setting the editFormId for the form to be editted
  const editForm = async (id: string) => {
    console.log("Function Called\n", "id Check", id);
    await dispatch(changeEditFormId(id));
    navigate("/editForm");
  };

  const deleteForm = async (id: string) => {
    console.log(`Delete form with id ${id}`);
    const noOfRecordsDeleted = await delForm({
      variables: {
        userId: id,
      },
    });
    noOfRecordsDeleted && alert(`${noOfRecordsDeleted} forms deleted`);
    refetch();
  };

  return (
    <>
      <Wrapper>
        {TypeformNames.map(({ title, id, noOfResponses }, index: number) => (
          <TypeformCard
            key={"tfc" + index.toString()}
            typeformName={title}
            responsesNumber={noOfResponses}
            edit={() => editForm(id)}
            delForm={() => deleteForm(id)}
          />
        ))}
      </Wrapper>
    </>
  );
};

export default WorkspaceMain;
