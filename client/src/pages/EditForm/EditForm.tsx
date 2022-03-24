import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import Modal from "../../components/Modal/Modal";
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
  FormFields,
  Input,
  PlusButtonContainer,
  Question,
  QuestionContainer,
  Textarea,
  Submit,
  ButtonContainer,
  Option,
  AddNewOption,
  OptionsContainer,
} from "./EditForm.styles";
import { GET_FORM_BY_ID, UPDATE_FORM } from "./queries";

// Form_data Interface
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

// Field Data Interface
interface FieldData {
  fieldType: string;
  Question: string;
  option: string[];
}

// Form Inputs Interface
type FormValues = {
  formData: {
    question: {
      value: string;
    };
    answer: {
      fieldType: string;
      value: string;
      option: string[];
    };
  }[];
};

// Sample Data
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
        {
          fieldType: "text",
          Question: "q2?",
          option: [],
        },
        {
          fieldType: "select",
          Question: "gender?",
          option: ["male", "female", "other"],
        },
      ],
    },
  },
};

// for removing __typename field from formData
const removeTypename = (object: any) => {
  const removedTypenameObj = {
    fieldType: object.fieldType,
    Question: object.Question,
    option: object.option,
  };
  return removedTypenameObj;
};

const EditForm = () => {
  // id of form to be editted
  const editFormId = useAppSelector((state) => state.editFormId.editFormId);

  // query was being called again and again and that led to appending of data to fields many
  // times. Thus previous data was loading. This will get set to false in useEffect and will
  // become true only after submitting. Also need to clear all fields after submitting.
  const [firstLoad, setFirstLoad] = useState(true);
  // name of owner of form
  const userName = useAppSelector((state) => state.user.username);
  // modal state
  const [showModal, setShowModal] = useState(false);

  // useForm Hook
  const { register, control, handleSubmit } = useForm<FormValues>();
  // for dynamic fields in form
  const { fields, append, remove, update } = useFieldArray({
    name: `formData`,
    control,
  });

  // state for formTitle
  const [formTitle, setFormTitle] = useState("No form yet");

  // update form hook
  const [updateForm, { loading: load, error: err }] = useMutation(UPDATE_FORM);

  if (load) console.log("Modify data hook Loading ...");
  if (err) console.log(JSON.stringify(err, null, 2));
  // query for fetching formData
  const { loading, error, data } = useQuery(GET_FORM_BY_ID, {
    variables: {
      formID: editFormId,
    },
  });

  if (loading) console.log("Loading....");
  if (error) console.log(JSON.stringify(error, null, 2));

  const AvatarLetter = userName[0];

  // UseEffect hook
  useEffect(() => {
    if (data) {
      const formData: FieldData[] = data.form.formData.map((field: any) =>
        removeTypename(field)
      );

      setFormTitle(data.form.title);
      firstLoad &&
        append(
          formData.map((field) => {
            const formField = {
              question: {
                value: field.Question,
              },
              answer: {
                value: "",
                fieldType: field.fieldType,
                option: field.option,
              },
            };
            return formField;
          })
        );
    } else {
      firstLoad &&
        append(
          SAMPLE_DATA.data.form.formData.map((field) => {
            const formField = {
              question: {
                value: field.Question,
              },
              answer: {
                value: "",
                fieldType: field.fieldType,
                option: field.option,
              },
            };
            return formField;
          })
        );
    }
    setFirstLoad(false);
  }, [data, append, firstLoad]);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const formData: FieldData[] = data.formData.map((ele) => {
      const obj = {
        fieldType: ele.answer.fieldType,
        option: ele.answer.option,
        Question: ele.question.value,
      };
      return obj;
    });
    const updatedForm = await updateForm({
      variables: {
        input: {
          title: formTitle,
          formData: formData,
        },
        id: editFormId,
      },
    });
    console.log("Updated form", updatedForm);
    alert("Form Saved");
  };

  const workspaceName = "My Workspace";

  const AddInput = (inputType: string) => {
    append({
      question: {
        value: "",
      },
      answer: {
        value: "",
        fieldType: inputType,
        option: [],
      },
    });
  };

  const addNewOption = (index: number) => {
    console.log("Button Clicked");
    const newOption = fields[index].answer.value;
    const options = [...fields[index].answer.option, newOption];
    const newValue = {
      question: fields[index].question,
      answer: {
        fieldType: fields[index].answer.fieldType,
        value: "",
        option: options,
      },
    };
    update(index, newValue);
  };

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
          {showModal && (
            <Modal setShowModal={setShowModal} AddInput={AddInput} />
          )}

          <Form onSubmit={handleSubmit(onSubmit)}>
            <Heading>{formTitle}</Heading>
            <div>
              {fields.map((field, index) => {
                return (
                  <FormFields key={field.id}>
                    {/* <label>
                      {index + 1}. {field.Question}
                    </label> */}
                    <QuestionContainer>
                      {index + 1}.{" "}
                      <Question
                        type={"text"}
                        {...register(
                          `formData.${index}.question.value` as const
                        )}
                        placeholder={"Write your question..."}
                        // defaultValue={(index + 1).toString() + field.Question}
                      />
                      <PlusButtonContainer>
                        <PlusButton onClick={() => remove(index)} type="button">
                          -
                        </PlusButton>
                      </PlusButtonContainer>
                    </QuestionContainer>
                    {field.answer.fieldType === "select" ? (
                      <>
                        <AddNewOption
                          {...register(
                            `formData.${index}.answer.value` as const
                          )}
                          placeholder={"add new option..."}
                        />
                        <PlusButtonContainer>
                          <PlusButton
                            onClick={() => addNewOption(index)}
                            type="button"
                          >
                            +
                          </PlusButton>
                        </PlusButtonContainer>
                        {field.answer.option.map((option) => (
                          <OptionsContainer>
                            <Option
                              value={option}
                              name={field.question.value}
                              id={option}
                            />
                            <label htmlFor={option}>{option}</label>
                          </OptionsContainer>
                        ))}
                      </>
                    ) : field.answer.fieldType === "textArea" ? (
                      <>
                        <Textarea
                          {...register(
                            `formData.${index}.answer.value` as const
                          )}
                          placeholder={"Enter answer..."}
                        />
                      </>
                    ) : (
                      <>
                        <Input
                          type={field.answer.fieldType}
                          {...register(
                            `formData.${index}.answer.value` as const
                          )}
                          placeholder={"Enter answer..."}
                        />
                      </>
                    )}
                  </FormFields>
                );
              })}
              <PlusButtonContainer>
                <PlusButton type="button" onClick={() => setShowModal(true)}>
                  +
                </PlusButton>
              </PlusButtonContainer>
              <ButtonContainer>
                <Submit value={"Save Form"} />
              </ButtonContainer>
            </div>
          </Form>
        </Main>
      </Wrapper>
    </>
  );
};

export default EditForm;
