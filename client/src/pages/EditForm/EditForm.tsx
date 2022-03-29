import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import Modal from "../../components/Modal/Modal";
import { Preview } from "../../components/preview";
import { Results } from "../../components/results";
import { Share } from "../../components/share";
import { useAppSelector } from "../../providers/app/hooks";
import { Dashboard } from "../dashboard";
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
  NewOptionContainer,
  DashboardLink,
  Container,
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
  formTitle: string;
};

// Sample Data
// const SAMPLE_DATA: Form_Data = {
//   data: {
//     form: {
//       id: "62399c3b72d0b98a7184422b",
//       title: "myrm",
//       owner: "62397013e3a4f86fafa0f26f",
//       formData: [
//         {
//           fieldType: "text",
//           Question: "q1?",
//           option: [],
//         },
//         {
//           fieldType: "text",
//           Question: "q2?",
//           option: [],
//         },
//         {
//           fieldType: "select",
//           Question: "gender?",
//           option: ["male", "female", "other"],
//         },
//       ],
//     },
//   },
// };

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

  const [preview, setPreview] = useState(false);

  // query was being called again and again and that led to appending of data to fields many
  // times. Thus previous data was loading. This will get set to true in useEffect and will
  // become false only after submitting. Also need to clear all fields after submitting.
  const [firstLoad, setFirstLoad] = useState(true);
  // name of owner of form
  const userName = useAppSelector((state) => state.user.username);
  // modal state
  const [showModal, setShowModal] = useState(false);

  // useForm Hook
  const { register, control, handleSubmit, watch } = useForm<FormValues>();
  // for dynamic fields in form
  const { fields, append, remove, update } = useFieldArray({
    name: `formData`,
    control,
  });

  // For choosing different options
  const [menu, setMenu] = useState("edit");
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
  // if (data) console.log(data);
  const AvatarLetter = userName[0];
  console.log("Form Data", watch("formData"));
  // UseEffect hook
  useEffect(() => {
    if (data) {
      const formData: FieldData[] = data.form.formData.map((field: any) =>
        removeTypename(field)
      );

      setFormTitle(data.form.title);
      firstLoad
        ? append(
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
          )
        : console.log(`FirstLoad: ${firstLoad}`);
      setFirstLoad(false);
    }
    //  else {
    //   // firstLoad &&
    //   append(
    //     SAMPLE_DATA.data.form.formData.map((field) => {
    //       const formField = {
    //         question: {
    //           value: field.Question,
    //         },
    //         answer: {
    //           value: "",
    //           fieldType: field.fieldType,
    //           option: field.option,
    //         },
    //       };
    //       return formField;
    //     })
    //   );
    // }
  }, [data, append, firstLoad]);

  // let watchFormTitle = watch("formTitle");
  // watchFormTitle = formTitle;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);

    // setFormTitle(data.formTitle);

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
          title: data.formTitle !== "" ? data.formTitle : formTitle,
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

  const removeOption = (option: string, fieldIndex: number) => {
    const options = fields[fieldIndex].answer.option.filter(
      (value) => value != option
    );
    const newValue = {
      question: fields[fieldIndex].question,
      answer: {
        fieldType: fields[fieldIndex].answer.fieldType,
        value: "",
        option: options,
      },
    };
    update(fieldIndex, newValue);
  };
  const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn);
  if (!isLoggedIn) {
    return (
      <>
        <h1>Please Log in first</h1>
        <Link to={"/login"}>To login page</Link>
      </>
    );
  }

  if (preview) {
    return (
      <Preview formId={String(editFormId)} onClose={() => setPreview(false)} />
    );
  }

  return (
    <>
      <Wrapper>
        <Header>
          <Container>
            <FormNameContainer>
              <WorkspaceName>{workspaceName + " / "}</WorkspaceName>
              <Heading>
                {watch("formTitle") === "" ? formTitle : watch("formTitle")}
              </Heading>
            </FormNameContainer>
            <DashboardLink to={"/dashboard"}>
              <AiOutlineClose />{" "}
            </DashboardLink>
          </Container>
          {/* Links  */}
          <LinkContainer>
            <div>
              {/* <StyledLink to={"/"}>Create</StyledLink> */}
              <span onClick={() => setMenu("edit")}>Edit</span>
            </div>
            <div>
              {/* <StyledLink to={"/"}>Connect</StyledLink> */}
              <span onClick={() => setMenu("connect")}>Connect</span>
            </div>
            <div>
              {/* <StyledLink to={"/"}>Share</StyledLink> */}
              <span onClick={() => setMenu("share")}>Share</span>
            </div>
            <div>
              {/* <StyledLink to={"/"}>Result</StyledLink> */}
              <span onClick={() => setMenu("result")}>Result</span>
            </div>
          </LinkContainer>
          {/* Publish buttons  */}
          <PublishContainer>
            <ItemContainer>
              <Button text="Preview" onClick={() => setPreview(true)} />
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
          {menu === "edit" && (
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormName
                defaultValue={watch("formTitle")}
                {...register("formTitle")}
                placeholder={"New Title here..."}
              />
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
                          <PlusButton
                            onClick={() => remove(index)}
                            type="button"
                          >
                            &#9747;
                          </PlusButton>
                        </PlusButtonContainer>
                      </QuestionContainer>
                      {field.answer.fieldType === "choice" ? (
                        <>
                          <NewOptionContainer>
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
                          </NewOptionContainer>

                          {field.answer.option.map((option, indx) => (
                            <OptionsContainer>
                              <div key={indx.toString() + "co"}>
                                <Option
                                  value={option}
                                  name={field.question.value}
                                  id={option}
                                />
                                <label htmlFor={option}>{option}</label>
                              </div>
                              <PlusButtonContainer>
                                <PlusButton
                                  onClick={() => removeOption(option, index)}
                                >
                                  &#9747;
                                </PlusButton>
                              </PlusButtonContainer>
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
                            rows={5}
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
          )}
          {menu === "share" && <Share formId={String(editFormId)} />}

          {menu == "result" && <Results formId={String(editFormId)} />}
        </Main>
      </Wrapper>
    </>
  );
};

export default EditForm;
