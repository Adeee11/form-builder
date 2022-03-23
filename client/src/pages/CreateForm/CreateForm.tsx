import { useState, useEffect } from "react";
import {
  BsCheckLg,
  BsFillEyeFill,
  BsLink,
  BsTelephoneFill,
  BsTextParagraph,
} from "react-icons/bs";
import { MdEmail, MdShortText } from "react-icons/md";
import { Wrapper, Header, Form } from "./CreateForm.styles";
import { gql, useMutation, useQuery } from "@apollo/client";
import { AiOutlinePlus } from "react-icons/ai";
import { Preview } from "../../components/preview";
import Modal from "../../components/Modal/Modal";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../providers/app/hooks";

const CREATE_FORM = gql`
  mutation createForm($input: CreateFormInput!) {
    createForm(createFormInput: $input) {
      id
      date
      title
      formData {
        Question
        fieldType
        option
      }
    }
  }
`;

const UPDATE_FORM = gql`
  mutation updateForm($input: UpdateFormInput!, $id: String!) {
    updateForm(updateFormInput: $input, id: $id) {
      id
      date
      title
      formData {
        Question
        fieldType
        option
      }
    }
  }
`;
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

interface formDataType {
  Question: string;
  fieldType: string;
  option: string[];
}

type Inputs = {
  question: string;
  option: string;
  title: string;
};

const CreateForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [formData, setformData] = useState<formDataType[]>([]);
  const [editQue, setEditQue] = useState(-1);
  const [formId, setFormId] = useState("");
  const userId = useAppSelector((state) => state.user.id);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: { title: "my typeform" },
  });
  const [create, { loading, error }] = useMutation(CREATE_FORM);
  const [update, state] = useMutation(UPDATE_FORM);
  const {
    loading: load,
    error: err,
    data,
  } = useQuery(GET_FORM, {
    variables: { input: localStorage.getItem("formId") },
  });

  if (load) console.log("data:", data);
  if (err) console.log("err:", err);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (formId) {
      const updatedForm = await update({
        variables: {
          input: {
            title: data.title,
            formData: formData,
          },
          id: formId,
        },
      });

      console.log("updatedForm:", updatedForm);
    } else {
      const createdForm = await create({
        variables: {
          input: {
            title: data.title,
            owner: userId,
            formData: formData,
          },
        },
      });
      console.log(createdForm);
      setFormId(createdForm.data.createForm.id);
      localStorage.setItem("formId", createdForm.data.createForm.id);
      if (createdForm) alert("form Created");
    }
  };

  if (loading) console.log("loading...", loading);
  if (error) console.error("error:", error);

  const AddInput = (i: string) => {
    setformData([...formData, { fieldType: i, option: [], Question: "" }]);
    setShowModal(false);
  };

  const saveQuestion = (que: string, index: number) => {
    const newData = [...formData];
    newData[index].Question = que;
    setformData([...newData]);
    setEditQue(-1);
    console.log(formData);
  };
  const delQue = (i: number, e: any) => {
    e.stopPropagation(); // need to ask why used?
    const list = formData;
    list.splice(i, 1);
    setformData([...list]);
  };

  const saveOption = (opt: string, i: number) => {
    const list = [...formData];
    list[i].option[formData[i].option.length] = opt;
    setformData([...list]);
    setValue("option", "");
  };

  const del = (i: number, index: number) => {
    const list = formData;
    list[i].option.splice(index, 1);
    setformData([...list]);
  };

  // why made this function async
  const Onedit = async (i: number) => {
    await setEditQue(i);
    setValue("question", formData[i].Question);
    document.getElementById("input")?.focus();
  };

  if (previewMode) {
    return <Preview formId={formId} onClose={() => setPreviewMode(false)} />;
  }

  return (
    <Wrapper>
      <Header>
        <div className="first">
          <span>my Work space /</span>
          <input type="text" placeholder="Title Here" {...register("title")} />
        </div>

        <ul>
          <li>
            <Link to="/createForm">Create</Link>
          </li>
          <li>Connect</li>
          <li>
            <Link to="/share">Share</Link>
          </li>
          <li>
            <Link to="/results">Result</Link>
          </li>
        </ul>

        <p>
          {formId && (
            <span className="preview" onClick={() => setPreviewMode(true)}>
              <BsFillEyeFill />
            </span>
          )}
          <button className="publish">Publish</button>
          <span className="avatar">P</span>
        </p>
      </Header>

      {showModal && <Modal setShowModal={setShowModal} AddInput={AddInput} />}

      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-header">{watch("title")}</div>

        {formData.map(
          (
            a: { fieldType: string; Question: string; option: string[] },
            i: number
          ) => (
            <div key={i}>
              <div className="que" onClick={() => Onedit(i)}>
                <span>{i + 1}.</span>

                {i === editQue ? (
                  <input
                    type="text"
                    placeholder="Your Question here?"
                    className="input"
                    id="input"
                    {...register("question")}
                    onBlur={() => saveQuestion(watch("question"), i)}
                  />
                ) : (
                  <p className="input">{a.Question || "Your Question Here?"}</p>
                )}

                <button
                  type="button"
                  className="delque"
                  onClick={(e) => delQue(i, e)}
                >
                  x
                </button>
              </div>

              {a.fieldType !== "select" && a.fieldType !== "choice" ? (
                <p className="ans">Enter Your Answer here</p>
              ) : (
                <div className="opt">
                  <span>
                    <input
                      type="text"
                      placeholder="Enter Options Here"
                      {...register("option")}
                    />

                    <button
                      type="button"
                      onClick={() => saveOption(watch("option"), i)}
                    >
                      +
                    </button>
                  </span>

                  {a.option.length > 0 &&
                    a.option.map((o: string, index: number) => (
                      <div key={index} className="optlist">
                        <p>{o}</p>

                        <button type="button" onClick={() => del(i, index)}>
                          x
                        </button>
                      </div>
                    ))}
                </div>
              )}
            </div>
          )
        )}

        <span className="chooseInput" onClick={() => setShowModal(true)}>
          <AiOutlinePlus />
        </span>

        {formData.length > 0 && (
          <button type="submit" className="sub">
            Save
          </button>
        )}
        {/* <button onClick={() => console.log(data)} type="button">Show saved </button> */}
      </Form>
    </Wrapper>
  );
};

export default CreateForm;
