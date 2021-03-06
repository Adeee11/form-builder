import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../providers/app/hooks";
import { changeEditFormId } from "../../providers/features/editFormIdSlice";
import Pagination from "../Pagination/Pagination";
import { TypeformCard } from "../TypeformCard";
import { DEL_FORM, GET_FORMS } from "./queries";
import { PaginationContainer, Wrapper } from "./WorkspaceMain.styles";

const WorkspaceMain = (props: {
  filter: string;
  setPreview: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { filter, setPreview } = props;

  const userId = useAppSelector((state) => state.user.id);

  const [TypeformNames, setTypeformNames] = useState([
    { title: "Data didn't arrive yet", id: "", noOfResponses: 0 },
  ]);

  // for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  //navigate hook from react-router-dom
  const navigate = useNavigate();
  const { loading, error, data, refetch } = useQuery(GET_FORMS, {
    variables: { userId, sortBy: filter },
  });
  if (loading) console.log("Loading ...");

  if (error) {
    // checking if JWT token has expired or not
    const errorMessage = error.message.toLowerCase();
    if (errorMessage.includes("unauthorized")) {
      alert("Token expired. Please log in again");
      navigate("/login");
    } else {
      console.log("Error Message: ", errorMessage);
    }

    console.error(JSON.stringify(error, null, 2));
  }

  const [delForm, { loading: delLoad, error: delErr }] = useMutation(DEL_FORM);

  if (delLoad) console.log("Loading...");
  if (delErr) console.log(JSON.stringify(delErr, null, 2));

  // for refetching the query when the page loads
  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
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
  }, [data, filter]);

  const dispatch = useAppDispatch();

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

  const viewForm = async (id: string) => {
    console.log(`View form with ${id}`);
    await dispatch(changeEditFormId(id));
    setPreview(true);
  };

  // pagination
  const noOfPosts = TypeformNames.length;

  const prevPage = () => {
    console.log("Previous Page Clicked");
    currentPage > 1
      ? setCurrentPage(currentPage - 1)
      : alert("Can't go left anymore");
  };
  const nextPage = () => {
    console.log("Next Page Clicked");
    currentPage < Math.ceil(TypeformNames.length / postsPerPage)
      ? setCurrentPage(currentPage + 1)
      : alert("Can't go right anymore");
  };
  const paginate = (pageNumber: number) => {
    console.log(`${pageNumber} clicked`);
    setCurrentPage(pageNumber);
  };

  // Choosing current display items
  const lastIndex = currentPage * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;
  console.log("First Index", firstIndex);
  console.log("Last Index", lastIndex);

  const CurrentTypeformNames = TypeformNames.slice(firstIndex, lastIndex);

  return (
    <>
      <Wrapper>
        {CurrentTypeformNames[0].id !== "" ? (
          CurrentTypeformNames.map(
            ({ title, id, noOfResponses }, index: number) => (
              <TypeformCard
                key={id}
                typeformName={title}
                responsesNumber={noOfResponses}
                edit={() => editForm(id)}
                delForm={() => deleteForm(id)}
                viewForm={() => viewForm(id)}
              />
            )
          )
        ) : (
          <></>
        )}
      </Wrapper>
      <PaginationContainer>
        <Pagination
          postsPerPage={postsPerPage}
          prevPage={prevPage}
          nextPage={nextPage}
          paginate={paginate}
          noOfPosts={noOfPosts}
        />
      </PaginationContainer>
    </>
  );
};

export default WorkspaceMain;
