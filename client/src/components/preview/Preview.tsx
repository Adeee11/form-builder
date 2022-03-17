import { useState } from 'react';
import { AiOutlineReload } from 'react-icons/ai'
import { BsArrowLeft } from 'react-icons/bs'
import { Form, PreviewContainer, PreviewHeader } from './Preview.styles'
import { gql, useMutation, useQuery } from '@apollo/client';


const GET_FORM = gql`
query form($input: ID!) {
    form(formId: $input) {
      id
      title
    date
    formData{
      Question
      fieldType
      option
    }
    }
  }
`
const CREATE_SUBMISSION = gql`
mutation createSubmission($input:CreateSubmissionInput!){
    createSubmission(createSubmissionInput:$input){
      id
      date
      formId
      res
    }
  }  
`
type propsType = {
    onClose: () => void,
    formId: string
}
const Preview = ({ onClose, formId }: propsType) => {
    const [res, setRes] = useState<string[]>([]);

    const { loading, error, data } = useQuery(GET_FORM, {
        variables: { input: formId },
    });
    const [create, { loading: l, error: e }] = useMutation(CREATE_SUBMISSION)


    const saveRes = (val: string, index: number) => {
        const listOfRes: string[] = [...res];
        listOfRes[index] = val;
        setRes([...listOfRes]);
    }

    const submitHandler = async () => {
        const data: any = await create({
            variables: {
                input: {
                    formId: formId,
                    res: res
                }
            }
        })
        console.log(data);
        setRes([]);
    }
    console.log(res)

    return (
        <PreviewContainer>
            <PreviewHeader>
                <span className='back' onClick={() => onClose()}>
                    <BsArrowLeft />
                </span>
                <p>Live Preview</p>
                <button>
                    <span><AiOutlineReload /></span>
                    <span>Restart</span>
                </button>
            </PreviewHeader>

            <Form>
                <header>
                    {data && <p>{data.form.title}</p>}
                </header>
                {data && data.form.formData.map((item: any, index: number) =>
                    <div className='section' key={index}>
                        <p className='question'>
                            <span >{index + 1}</span>
                            {item.Question}
                        </p>
                        {item.fieldType == "text" &&
                            <input
                                type={item.fieldType}
                                className='answer'
                                placeholder="Enter Your answer here"
                                onChange={(e) => saveRes(e.target.value, index)}
                            />}
                        {
                            item.fieldType == "choice" &&
                            item.option.map((opt: string) =>
                                <div className='opt' onClick={() => saveRes(opt, index)}>
                                    {opt}
                                </div>)
                        }
                    </div>)}
                <button className='sub' onClick={submitHandler}>Submit</button>
            </Form>
        </PreviewContainer>
    )
}

export default Preview