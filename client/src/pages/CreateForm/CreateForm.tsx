import { useState } from 'react'
import {
    BsCheckLg,
    BsFillEyeFill,
    BsLink,
    BsTelephoneFill,
    BsTextParagraph
} from 'react-icons/bs';
import { MdEmail, MdShortText } from 'react-icons/md';
import {
    Wrapper,
    Header,
    Form,
    Modal
} from './CreateForm.styles';
import { gql, useMutation } from "@apollo/client";
import { AiOutlinePlus } from 'react-icons/ai';
import { Preview } from '../../components/preview';



const CreateForm = () => {
    const [showModal, setShowModal] = useState(false);
    const [previewMode, setPreviewMode] = useState(false);
    const [formData, setformData] = useState<any>([]);
    const [opt, setOpt] = useState('');
    const [que, setQue] = useState('')
    const [title, setTitle] = useState('my typeform');
    const [editQue, setEditQue] = useState(-1);
    const [formId, setFormId] = useState('');


    const CREATE_FORM = gql`
    mutation createForm($input:CreateFormInput!){
        createForm(createFormInput:$input){
          id
          date
          title
          formData{
            Question
            fieldType
            option
          }
          
        }
      }
    `;

    const UPDATE_FORM = gql`
    mutation updateForm($input:UpdateFormInput!, $id:String!){
        updateForm(updateFormInput:$input, id:$id){
          id
          date
          title
          formData{
            Question
            fieldType
            option
          }
        }
      }
    `

    const [create, { loading, error }] = useMutation(CREATE_FORM);
    const [update, state] = useMutation(UPDATE_FORM);

    if (loading) console.log("loading...", loading);
    if (error) console.error("error:", error);

    const AddInput = (i: string) => {
        setformData([...formData, { fieldType: i, option: [] }])
        setShowModal(false);
    }

    const saveQuestion = (que: string, index: number) => {
        const newData = [...formData];
        newData[index].Question = que;
        setformData([...newData])
        setEditQue(-1)
    }
    const delQue = (i: number, e: any) => {
        e.stopPropagation();
        const list = formData
        list.splice(i, 1)
        setformData((prev: any) => [...list]);
        console.log("formdata", formData)
    }

    const saveOption = (opt: string, i: number) => {
        const list = [...formData];
        list[i].option[formData[i].option.length] = opt;
        setformData((prev: any) => [...list]);
        setOpt('');
    }


    const del = (i: number, index: number) => {
        const list = formData;
        list[i].option.splice(index, 1);
        setformData([...list])
    }
    const submitHandler = async () => {
        if (formId) {
            const updatedForm = await update({
                variables: {
                    input: {
                        title: title,
                        formData: formData
                    },
                    id: formId
                }
            })

            console.log("updatedForm:", updatedForm);
        } else {
            const createdForm = await create({
                variables: {
                    input: {
                        title: title,
                        owner: "621cb297a05f470851fa3f96",
                        formData: formData
                    }
                }
            })
            console.log(createdForm);
            setFormId(createdForm.data.createForm.id);

            if (createdForm) alert("form Created")

        }

    }


    if (previewMode) {
        return <Preview formId={formId} onClose={() => setPreviewMode(false)} />
    }
    return (
        <Wrapper>
            <Header>
                <div className='first'>
                    <span>my Work space /</span>
                    <input type="text" placeholder='Title Here' onChange={(e) => setTitle(e.target.value)} value={title} />
                </div>

                <ul>
                    <li>Create</li>
                    <li>Connect</li>
                    <li>Share</li>
                    <li>Result</li>
                </ul>

                <p>
                    {formId &&
                        <span className='preview' onClick={() => setPreviewMode(true)}>
                            <BsFillEyeFill />
                        </span>
                    }
                    <button className='publish'>Publish</button>
                    <span className='avatar'>P</span>
                </p>
            </Header>

            {showModal &&

                <Modal onClick={() => setShowModal(false)}>

                    <div className='popup' >
                        <h3>All Questions Types</h3>
                        <ul>
                            <li onClick={() => AddInput("text")}>
                                <span className='short'><MdShortText /></span>
                                Short Text
                            </li>
                            <li onClick={() => AddInput("textArea")}>
                                <span className='long'><BsTextParagraph /></span>
                                Long Text
                            </li>
                            <li onClick={() => AddInput("choice")}>
                                <span className='choice'><BsCheckLg /></span>
                                Multiple Choices
                            </li>
                            <li onClick={() => AddInput("email")}>
                                <span className='email'><MdEmail /></span>
                                Email
                            </li>
                            <li onClick={() => AddInput("number")}>
                                <span className='number'><BsTelephoneFill /></span>
                                Phone Number
                            </li>
                            <li onClick={() => AddInput("url")}>
                                <span className='url'><BsLink /></span>
                                Website
                            </li>
                        </ul>
                    </div>

                </Modal>}

            <Form>
                <div className='form-header'>
                    {title}
                </div>

                {formData.map((a: { fieldType: string, Question: string, option: string[] }, i: number) =>
                    <div key={i}>

                        <div className='que' onClick={() => { setEditQue(i); setQue(formData[i].Question) }}>

                            <span>{i + 1}.</span>

                            {editQue == i ?

                                <input type="text" placeholder='Your Question here?' className="input" onChange={(e) => setQue(e.target.value)} value={que} onBlur={() => saveQuestion(que, i)} /> :

                                <input type="text" placeholder='Your Question here?' className="input" value={a.Question} readOnly={true} />
                            }

                            <button type="button" className='delque' onClick={(e) => delQue(i, e)}>x</button>

                        </div>

                        {(a.fieldType !== "select" && a.fieldType !== "choice") ?

                            <p className='ans'>Enter Your Answer here</p> :

                            <div className='opt'>
                                <span>

                                    <input type="text" placeholder="Enter Options Here" onChange={(e) => setOpt((prev) => e.target.value)} value={opt} />

                                    <button type="button" onClick={() => saveOption(opt, i)}>+</button>

                                </span>

                                {a.option.length > 0 && a.option.map((o: string, index: number) =>

                                    <div key={index} className="optlist">

                                        <p>{o}</p>

                                        <button type="button" onClick={() => del(i, index)}>x</button></div>)}

                            </div>}
                    </div>
                )}

                <span className="chooseInput" onClick={() => setShowModal(true)}>
                    <AiOutlinePlus />
                </span>

                {
                    formData.length > 0 &&
                    <button type="button" className="sub" onClick={submitHandler}>Save</button>
                }
            </Form>
        </Wrapper>
    )
}

export default CreateForm