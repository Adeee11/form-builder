import { useState, useEffect } from 'react';
import { AiOutlineReload } from 'react-icons/ai'
import { BsArrowLeft } from 'react-icons/bs'
import { Form, PreviewContainer, PreviewHeader } from './Preview.styles'
import { gql, useMutation, useQuery } from '@apollo/client';
import InputType from '../InputType/InputType';

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
    formId: string,
    isForm?: boolean,
}
const Preview = ({ onClose, formId, isForm }: propsType) => {
    const [res, setRes] = useState<string[]>([]);
    const [isActive, setIsActive] = useState(false);

    const { loading, error, data } = useQuery(GET_FORM, {
        variables: { input: formId },
    });
    const [create, { loading: l, error: e }] = useMutation(CREATE_SUBMISSION)


    useEffect(() => {
        if (data) {
            const list = [];
            for (let i = 0; i < data.form.formData.length; i++) {
                list.push("");
            }
            setRes([...list])
        }
    }, [])

    const saveRes = (val: string, index: number) => {

        const listOfRes: string[] = [...res];
        listOfRes[index] = val;
        setRes([...listOfRes]);
    }

    const submitHandler = async () => {
        let isCompletelyfilled = true
        for (let i = 0; i < res.length; i++) {
            if (res[i] == "") {
                isCompletelyfilled = false
            }
        }
        if (isCompletelyfilled) {
            const savedRes: any = await create({
                variables: {
                    input: {
                        formId: formId,
                        res: res
                    }
                }
            })
            console.log(savedRes);
            if (savedRes) alert("form answer submitted")
            onClose();
        }
        else {
            alert("fill the ans for all question:")
        }
    }
    console.log(res)

    return (
        <PreviewContainer>
            {!isForm && <PreviewHeader>
                <span className='back' onClick={() => onClose()}>
                    <BsArrowLeft />
                </span>
                <p>Live Preview</p>
                <button>
                    <span><AiOutlineReload /></span>
                    <span>Restart</span>
                </button>
            </PreviewHeader>}

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
                        {item.fieldType !== "choice" && <>
                            <input
                                type="text"
                                className='answer'
                                placeholder="Enter Your answer here"
                                onChange={(e) => saveRes(e.target.value, index)}

                            />
                            {/* <InputType
                                fieldType={item.fieldType}
                                onchange={saveRes}
                                index={index}
                            /> */}
                        </>
                        }
                        {
                            item.fieldType == "choice" &&
                            item.option.map((opt: string) =>
                                <div onClick={() => { saveRes(opt, index); }} className={isActive ? "opt act" : "opt"}>
                                    {opt}
                                </div>)
                        }
                    </div>)}

                <button className='sub' onClick={submitHandler} type="button">Submit</button>
            </Form>
        </PreviewContainer>
    )
}

export default Preview



