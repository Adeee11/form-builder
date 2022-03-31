import { useState, useEffect } from "react";
import { AiOutlineReload } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import {
  ErrorStyle,
  Form,
  PreviewContainer,
  PreviewHeader,
} from "./Preview.styles";
import { gql, useMutation, useQuery } from "@apollo/client";
import {
  FieldError,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { ValidationContext } from "graphql";
import clsx from "clsx";

const GET_FORM = gql`
  query form($input: ID!) {
    form(formId: $input) {
      id
      title
      date
      formData {
        Question
        fieldType
        option
      }
    }
  }
`;
const CREATE_SUBMISSION = gql`
  mutation createSubmission($input: CreateSubmissionInput!) {
    createSubmission(createSubmissionInput: $input) {
      id
      date
      formId
      res
    }
  }
`;
type propsType = {
  onClose: () => void;
  formId: string;
  isForm?: boolean;
};
const Preview = ({ onClose, formId, isForm }: propsType) => {
  const [res, setRes] = useState<string[]>([]);
  const { data } = useQuery(GET_FORM, {
    variables: { input: formId },
  });
  const [create] = useMutation(CREATE_SUBMISSION);
  const [firstLoad, setFirstLoad] = useState(true);

  interface FormValues {
    formData: {
      Question: string;
      fieldType: string;
      option: string[];
      ans: string;
    }[];
  }

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();
  // for dynamic fields in form
  const { fields, append, remove, update } = useFieldArray({
    name: `formData`,
    control,
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log("data:", data);
    for (let i = 0; i < data.formData.length; i++) {
      if (data.formData[i].fieldType !== "choice") {
        res[i] = data.formData[i].ans;
        setRes([...res]);
      }
    }
    const savedRes: any = await create({
      variables: {
        input: {
          formId: formId,
          res: res,
        },
      },
    });
    alert("Response saved");
    console.log("Response", savedRes);
  };

  const validation = (value: string, fieldType: string, index: number) => {
    if (fieldType === "email") {
      const emailRegEX = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
      return emailRegEX.test(value);
    } else if (fieldType === "textArea") {
      const minChar = 30;
      return value.length > minChar;
    }
  };

  console.log("res", res);
  console.log("Form Data errors", errors);

  useEffect(() => {
    if (data && firstLoad) {
      const list = [];
      for (let i = 0; i < data.form.formData.length; i++) {
        list.push("");
      }
      setRes([...list]);
      append(data.form.formData);
      setFirstLoad(false);
    }
  }, [data]);

  return (
    <PreviewContainer>
      {!isForm && (
        <PreviewHeader>
          <span className="back" onClick={() => onClose()}>
            <BsArrowLeft />
          </span>
          <span>Preview</span>
          <button>
            Reload
            <span>
              <AiOutlineReload />
            </span>
          </button>
        </PreviewHeader>
      )}

      <Form>
        <form onSubmit={handleSubmit(onSubmit)}>
          <header>{data && <p>{data.form.title}</p>}</header>

          {fields.map((field, index) => {
            return (
              <>
                <div key={field.id} className="section">
                  <p className="question">
                    <span>{index + 1}</span>
                    {field.Question}
                  </p>
                  {field.fieldType !== "choice" && (
                    <>
                      <input
                        className="answer"
                        type={field.fieldType}
                        {...register(`formData.${index}.ans` as const, {
                          required: true,
                          validate: {
                            checking: (value) =>
                              validation(value, field.fieldType, index),
                          },
                        })}
                      />
                    </>
                  )}
                  {field.fieldType == "choice" && (
                    <>
                      {field.option.map((item, indx) => (
                        <div
                          key={field.id + indx.toString()}
                          className={clsx("opt", { act: item === res[index] })}
                          onClick={() => {
                            res[index] = item;
                            // removeOtherItems(index, res);
                            setRes([...res]);
                          }}
                        >
                          {item}
                        </div>
                      ))}
                    </>
                  )}
                  <ErrorStyle>
                    {field.fieldType === "textArea"
                      ? errors.formData && errors.formData[index]
                        ? "Enter minimum 30 chars"
                        : ""
                      : field.fieldType === "email"
                      ? errors.formData && errors.formData[index]
                        ? "Enter valid email"
                        : ""
                      : errors.formData && errors.formData[index]
                      ? "This field is required"
                      : ""}
                  </ErrorStyle>
                </div>
              </>
            );
          })}

          <button className="sub" type="submit">
            Submit
          </button>
        </form>
      </Form>
    </PreviewContainer>
  );
};

export default Preview;
