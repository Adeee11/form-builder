import { Dispatch, useState } from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { gql, useMutation } from "@apollo/client";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { Preview } from "../../components/preview";
import Modal from "../../components/Modal/Modal";
import { useForm, SubmitHandler } from "react-hook-form";
import { Share } from "../../components/share";
import { Results } from "../../components/results";
import { useAppDispatch, useAppSelector } from "../../providers/app/hooks";
import PublishModal from "../../components/PublishModal/PublishModal";
import {
  Wrapper,
  Header,
  Form,
  LogoutMenu,
  Logout,
  DashboardLink,
  Container,
} from "./CreateForm.styles";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { Token } from "graphql";
import { EditFormState } from "../../providers/features/editFormIdSlice";
import { LoginState, loggedOut } from "../../providers/features/loginSlice";
import { changeToken } from "../../providers/features/tokenSlice";
import { User, changeUser } from "../../providers/features/userSlice";

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

const logout = async (
  dispatch: ThunkDispatch<
    {
      login: LoginState;
      user: User;
      token: Token;
      editFormId: EditFormState;
    },
    undefined,
    AnyAction
  > &
    Dispatch<AnyAction>,
  navigate: NavigateFunction
) => {
  await dispatch(loggedOut());
  await dispatch(changeToken(""));
  await dispatch(
    changeUser({
      username: "Logged out",
      id: "",
    })
  );
  navigate("/");
};

const CreateForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [showState, setShowState] = useState({
    previewMode:false,
    showPublishModal:false,
    showLogoutMenu:false,   
  })
  const [formData, setformData] = useState<formDataType[]>([]);
  const [editQue, setEditQue] = useState(-1);
  const [formId, setFormId] = useState("");
  const [menu, setMenu] = useState("create");
  const [opt, setOpt] = useState("");
   
  const userName = useAppSelector((state) => state.user.username);
  
  const { register, handleSubmit, setValue, watch } = useForm<Inputs>({
    defaultValues: { title: "my typeform" },
  });
  
  const [create, { loading, error }] = useMutation(CREATE_FORM);
  
  const [update] = useMutation(UPDATE_FORM);
  
  const userId = useAppSelector((state) => state.user.id);
  
  const dispatch = useAppDispatch();
  
  const navigate = useNavigate();

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
      if (updatedForm) alert("Form updated ");
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
      console.log("created form",createdForm);
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
    e.stopPropagation();
    const list = formData;
    list.splice(i, 1);
    setformData([...list]);
  };

  const saveOption = (opt: string, i: number) => {
    const list = [...formData];
    list[i].option[formData[i].option.length] = opt;
    setformData([...list]);
    setOpt("");
    const el: any = document.getElementsByClassName("typedOption");
    for (let i = 0; i < el.length; i++) {
      el[i].value = "";
    }
  };

  const del = (i: number, index: number) => {
    const list = formData;
    list[i].option.splice(index, 1);
    setformData([...list]);
  };

  const Onedit = async (i: number) => {
    console.log("on edit called");
    await setEditQue(i);
    setValue("question", formData[i].Question);
    document.getElementById("input")?.focus();
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

  if (showState.previewMode) {
    return <Preview 
    formId={formId} 
    onClose={() =>setShowState({...showState,previewMode:false})} />;
  }

  return (
    <Wrapper>
      <Header>
        <div className="first">
          <Container>
            <span>my Work space / </span>
            <span>{watch("title")}</span>
          </Container>
          <DashboardLink to={"/dashboard"}>
            <AiOutlineClose />
          </DashboardLink>
        </div>

        <ul>
          <li onClick={() => setMenu("create")}>Create</li>
          <li onClick={() => setMenu("connect")}>Connect</li>
          <li onClick={() => setMenu("share")}>Share</li>
          <li onClick={() => setMenu("result")}>Result</li>
        </ul>

        <p>
          {formId && (
            <span className="preview" onClick={() =>setShowState({...showState, previewMode:true})}>
              <BsFillEyeFill />
            </span>
          )}
          <button
            className="publish"
            onClick={() => setShowState({...showState, showPublishModal:!showState.showPublishModal})}
          >
            Publish
          </button>
          <span
            className="avatar"
            onClick={() => setShowState({...showState,showLogoutMenu:!showState.showLogoutMenu})}
          >
            {userName[0].toUpperCase()}
          </span>
        </p>
      </Header>

      {showState.showPublishModal && formId && (
        <PublishModal
          formId={formId}
          onClose={() =>setShowState({...showState, showPublishModal:false})}
        />
      )}
      {showModal && <Modal setShowModal={setShowModal} AddInput={AddInput} />}

      {showState.showLogoutMenu && (
        <LogoutMenu>
          <div className="logout-header">
            <span className="avatar">{userName[0].toUpperCase()}</span>
            <p>{userName}</p>
          </div>

          <ul className="list">
            <li className="bold">Profile</li>
            <li>Setting</li>
            <li>Resources</li>
            <li>Quick help</li>
            <li>Help Center</li>
            <li>Ask the community</li>
            <li>Apps & Integration</li>
            <li>What's New</li>
            <li className="danger">
              <Logout onClick={() => logout(dispatch, navigate)}>
                Log out
              </Logout>
            </li>
          </ul>
        </LogoutMenu>
      )}
      {menu === "create" && (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-header">
            <input
              type="text"
              placeholder="Title Here"
              {...register("title")}
            />
          </div>
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
                      onClick={(e)=>{e.stopPropagation()}}
                    />
                  ) : (
                    <p className="input">
                      {a.Question || "Your Question Here?"}
                    </p>
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
                        onChange={(e) => {
                          setOpt(e.target.value);
                          setEditQue(i);
                        }}
                        className="typedOption"
                      />

                      <button
                        type="button"
                        onClick={() => {
                          saveOption(opt, i);
                        }}
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

          
            <button type="submit" className="sub">
              Save
            </button>
          
        </Form>
      )}
      {menu === "share" && <Share formId={formId} />}

      {menu === "result" && <Results formId={formId} />}
    </Wrapper>
  );
};

export default CreateForm;
