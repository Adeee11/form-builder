import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { useAppSelector } from "../../providers/app/hooks";
import { Avatar, Wrapper } from "./EditForm.styles";
import { GET_FORM_BY_ID } from "./queries";

interface Form_Data {
  data: {
    form: {
      id: string;
      title: string;
      owner: string;
      formData: FieldData[];
    };
  };
}

interface FieldData {
  fieldType: string;
  Question: string;
  option: string[];
}

const SAMPLE_DATA: Form_Data = {
  data: {
    form: {
      id: "62399c3b72d0b98a7184422b",
      title: "myrm",
      owner: "62397013e3a4f86fafa0f26f",
      formData: [
        {
          fieldType: "text",
          Question: "q1?",
          option: [],
        },
      ],
    },
  },
};

// getting formData with formID
const useGetForm = async (formID: String, formData: Form_Data) => {
  const { loading, error, data } = await useQuery(GET_FORM_BY_ID, {
    variables: {
      formID,
    },
  });
  if (loading) console.log("Loading....");
  if (error) console.log(JSON.stringify(error, null, 2));
  if (data) {
    formData = data;
    console.log("Form Data insideFunction", data);
  }
};

const EditForm = () => {
  const editFormId = useAppSelector((state) => state.editFormId.editFormId);
  const userName = useAppSelector((state) => state.user.username);
  const AvatarLetter = userName[0];
  let formData: Form_Data = {
    data: {
      form: {
        id: "",
        title: "",
        owner: "",
        formData: [],
      },
    },
  };

  useGetForm(editFormId, formData);

  let formTitle: string;
  let formFields: FieldData[];

  if (formData.data.form.id) {
    formTitle = formData.data.form.id;
    formFields = formData.data.form.formData;
  } else {
    formTitle = SAMPLE_DATA.data.form.title;
    formFields = SAMPLE_DATA.data.form.formData;
  }

  const workspaceName = "My Workspace";

  return (
    <>
      <Wrapper className="container">
        <header>
          {/* Workspace and Form name  */}
          <div className="row">
            <div className="col-3">{workspaceName}</div>
            <div className="col-9">
              {/* Need to align center */}
              {formTitle}
            </div>
          </div>
          {/* Links  */}
          <div className="row">
            <div className="col-3">
              <Link to={"/"}>Create</Link>
            </div>
            <div className="col-3">
              <Link to={"/"}>Connect</Link>
            </div>
            <div className="col-3">
              <Link to={"/"}>Share</Link>
            </div>
            <div className="col-3">
              <Link to={"/"}>Result</Link>
            </div>
          </div>
          {/* Publish buttons  */}
          <div className="row">
            <div className="col-6">
              <Button text="Publish" />
            </div>
            <div className="col-6">
              <Avatar>{AvatarLetter}</Avatar>
            </div>
          </div>
        </header>
        <main className="container">
          <form>
            <h1>{formTitle}</h1>
            <button>+</button>
          </form>
        </main>
      </Wrapper>
    </>
  );
};

export default EditForm;
