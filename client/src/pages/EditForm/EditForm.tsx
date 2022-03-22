import { useQuery } from "@apollo/client";
import { useAppSelector } from "../../providers/app/hooks";
import { GET_FORM_BY_ID } from "./queries";

const useGetForm = async (formID: String) => {
  
  const { loading, error, data } = await useQuery(GET_FORM_BY_ID, {
    variables: {
      formID,
    },
  });
  if (loading) console.log("Loading....");
  if (error) console.log(JSON.stringify(error, null, 2));
  if (data) console.log("Form Data", data);
};

const EditForm = () => {
  const editFormId = useAppSelector((state) => state.editFormId.editFormId);
  useGetForm(editFormId);
  return <>EditFormId</>;
};

export default EditForm;
