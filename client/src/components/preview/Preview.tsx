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
    const [isActive, setIsActive] = useState(-1);
    const [errors, setErrors] = useState<string[]>([]);
    const [isSubmittedOnce, setIsSubmittedOnce] = useState(false)
    const { loading, error, data } = useQuery(GET_FORM, {
        variables: { input: formId },
    });
    const [create, { loading: l, error: e }] = useMutation(CREATE_SUBMISSION)

    const validation = (index: number, fieldType: string, ans: string) => {

        if (fieldType == "textArea") {
            if (ans.length < 30)
                errors[index] = "field should not be Less than 30 Character"
            else errors[index] = "";
        }

        if (fieldType == "text") {
            if (ans.length <= 1)
                errors[index] = "Field Should not be empty"
            else errors[index] = "";
        }
        if (fieldType == "email") {
            if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(ans)))
                errors[index] = "Enter a valid Email Address"
            else errors[index] = "";
        }
        setErrors([...errors])
    }

    useEffect(() => {
        if (data) {
            const list = [];
            for (let i = 0; i < data.form.formData.length; i++) {
                list.push("");
            }
            setRes([...list])
        }
    }, [])

    const saveRes = (val: string, index: number, optid?: number) => {
        if (isSubmittedOnce) {
            validation(index, data.form.formData[index].fieldType, res[index])
        }

        const listOfRes: string[] = [...res];
        listOfRes[index] = val;
        setRes([...listOfRes]);
        if (optid !== undefined) {
            setIsActive(optid);
            console.log("Optid", optid)
        }

    }

    const submitHandler = async () => {
        setIsSubmittedOnce(true)
        let isValidated = false;
        for (let i = 0; i < res.length; i++) {
            validation(i, data.form.formData[i].fieldType, res[i])

        }
        for (let i = 0; i < errors.length; i++) {
            if (errors[i] == "") {
                isValidated = true
            }
            else {
                isValidated = false
            }
        }
        if (isValidated) {
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

    }


    console.log("res", res);
    console.log("errors", errors);

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

                            <p className='error'>{errors && errors[index]}</p>
                        </>
                        }
                        {
                            item.fieldType == "choice" &&
                            item.option.map((opt: string, num: number) =>
                                <div onClick={() => { saveRes(opt, index, num); }} className={opt === res[index] ? "opt act" : "opt"}>
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



