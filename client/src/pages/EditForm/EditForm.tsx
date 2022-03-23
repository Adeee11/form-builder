import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { useAppSelector } from "../../providers/app/hooks";
import {
  Avatar,
  FormName,
  FormNameContainer,
  Header,
  LinkContainer,
  PublishContainer,
  StyledLink,
  ItemContainer,
  WorkspaceName,
  Wrapper,
  Main,
  Form,
  Heading,
  PlusButton,
} from "./EditForm.styles";
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
  console.log(formFields);

  const workspaceName = "My Workspace";

  return (
    <>
      <Wrapper>
        <Header>
          <FormNameContainer>
            <WorkspaceName>{workspaceName + " / "}</WorkspaceName>
            <FormName>{formTitle}</FormName>
          </FormNameContainer>
          {/* Links  */}
          <LinkContainer>
            <div>
              <StyledLink to={"/"}>Create</StyledLink>
            </div>
            <div>
              <StyledLink to={"/"}>Connect</StyledLink>
            </div>
            <div>
              <StyledLink to={"/"}>Share</StyledLink>
            </div>
            <div>
              <StyledLink to={"/"}>Result</StyledLink>
            </div>
          </LinkContainer>
          {/* Publish buttons  */}
          <PublishContainer>
            <ItemContainer>
              <Button text="Publish" />
            </ItemContainer>

            <ItemContainer>
              <Avatar>{AvatarLetter}</Avatar>
            </ItemContainer>
          </PublishContainer>
        </Header>
        <Main>
          <Form>
            <Heading>{formTitle}</Heading>
            <div>
              <PlusButton>+</PlusButton>
            </div>
          </Form>
        </Main>
      </Wrapper>
    </>
  );
};

export default EditForm;
