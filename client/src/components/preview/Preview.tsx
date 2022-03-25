import { useEffect, useState } from "react";
import { AiOutlineReload } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { Form, PreviewContainer, PreviewHeader } from "./Preview.styles";
import { gql, useMutation, useQuery } from "@apollo/client";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";

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

// Field Data Interface
interface FormValues {
  formData: {
    fieldType: string;
    Question: string;
    option: string[];
  }[];
}

const Preview = ({ onClose, formId, isForm }: propsType) => {
  const [res, setRes] = useState<string[]>([]);
  const [isActive, setIsActive] = useState(false);
  const { register, control, handleSubmit, watch } = useForm<FormValues>();
  // for dynamic fields in form
  const { fields, append, remove, update } = useFieldArray({
    name: `formData`,
    control,
  });
  const { loading, error, data } = useQuery(GET_FORM, {
    variables: { input: formId },
  });
  const [create, { loading: l, error: e }] = useMutation(CREATE_SUBMISSION);

  const saveRes = (val: string, index: number) => {
    const listOfRes: string[] = [...res];
    listOfRes[index] = val;
    setRes([...listOfRes]);
  };

  useEffect(() => {
    if (data) {
      const formData = [...data.form.formData];
      append(formData);
    }
  }, [append, data]);

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  //   const submitHandler = async () => {
  //     const data: any = await create({
  //       variables: {
  //         input: {
  //           formId: formId,
  //           res: res,
  //         },
  //       },
  //     });
  //     console.log(data);
  //     if (data) alert("form answer submitted");
  //     onClose();
  //   };
  //   console.log(res);

  return (
    <PreviewContainer>
      {!isForm && (
        <PreviewHeader>
          <span className="back" onClick={() => onClose()}>
            <BsArrowLeft />
          </span>
          <p>Live Preview</p>
          <button>
            <span>
              <AiOutlineReload />
            </span>
            <span>Restart</span>
          </button>
        </PreviewHeader>
      )}

      <Form onSubmit={handleSubmit(onSubmit)}>
        <header>{data && <p>{data.form.title}</p>}</header>
        {fields.map((field, index) => {
          return (
            <>
              <div key={field.id}>
                <p>{field.Question}</p>
                <input
                  type={field.fieldType}
                  {...register(`formData.${index}.Question` as const)}
                />
              </div>
            </>
          );
        })}
        {/* {data && data.form.formData.map((item: any, index: number) =>
                    <div className='section' key={index}>
                        <p className='question'>
                            <span >{index + 1}</span>
                            {item.Question}
                        </p>
                        {item.fieldType !== "choice" &&
                            <input
                                type={item.fieldType}
                                className='answer'
                                placeholder="Enter Your answer here"
                                onChange={(e) => saveRes(e.target.value, index)}
                            />}
                        {
                            item.fieldType == "choice" &&
                            item.option.map((opt: string) =>
                                <div onClick={() => { saveRes(opt, index); }} className={isActive ? "opt act" : "opt"}>
                                    {opt}
                                </div>)
                        }
                    </div>)} */}
        <input type={"submit"} value="Submit" />
        <button
          type="button"
          onClick={() => console.log("FormData", watch("formData"))}
        >
          Show Fields
        </button>
      </Form>
    </PreviewContainer>
  );
};

export default Preview;
