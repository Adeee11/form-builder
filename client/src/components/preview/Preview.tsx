import { useState, useEffect } from "react";
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
const Preview = ({ onClose, formId, isForm }: propsType) => {
  const [res, setRes] = useState<string[]>([]);
  // const [errors, setErrors] = useState<string[]>([]);
  const [isSubmittedOnce, setIsSubmittedOnce] = useState(false);
  const [a, setA]= useState('');
  const { loading, error, data } = useQuery(GET_FORM, {
    variables: { input: formId },
  });
  const [create, { loading: l, error: e }] = useMutation(CREATE_SUBMISSION);
  
  interface FormValues {
  formData: {
   Question:string;
   fieldType:string;
   option:string[];
   ans:string;
    }[];
  }

  const { register, control, handleSubmit, watch, formState: { errors }} = useForm<FormValues>();
  // for dynamic fields in form
  const { fields, append, remove, update } = useFieldArray({
    name: `formData`,
    control,
  });

  
  const onSubmit: SubmitHandler<FormValues> = (data) =>{
    console.log("data:",data)
    for(let i=0; i<data.formData.length;i++){
      if(data.formData[i].fieldType!=="choice"){
        res[i]=data.formData[i].ans
        setRes([...res])
      }   
    }
    console.log(res);


  } ;

  // const validation = (index: number, fieldType: string, ans: string) => {
  //   console.log("validation function called....", errors)
  //   const answer= ans.trim();
  //   const listerrors= [...errors];
  //   if (fieldType =="textArea") {
  //     if (answer.length < 30)
  //       listerrors[index] = "field should not be Less than 30 Character";
  //     if(ans=="") listerrors[index] = ""
  //       else listerrors[index] = "" 
  //   }
  //   if (fieldType == "email") {
  //     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(answer))
  //       listerrors[index] = "";
  //       else listerrors[index] = "Enter a valid Email Address" 
  //   }
  //   setErrors([...listerrors]);
  // };



  // const saveRes = (val: string, index: number, optid?: number) => {
  //   if(isSubmittedOnce){
  //     validation(index, data.form.formData[index].fieldType, res[index]);
  //   }
      
  
  //   const listOfRes: string[] = [...res];
  //   listOfRes[index] = val;
  //   setRes([...listOfRes]);
    
    
  // };

  // const submitHandler = async () => {
  //   setIsSubmittedOnce(true);

    
    
  //   if(!isSubmittedOnce){
  //     for (let i = 0; i < res.length; i++) {
  //       validation(i, data.form.formData[i].fieldType, res[i]);
  //     }
  //   }
  //   let isValidated = false;

  //   for (let i = 0; i < errors.length; i++) {
  //     if (errors[i] =="") {
  //       isValidated = true;
  //     } else {
  //       isValidated = false;
  //     }
  //   }
  //   console.log("isvalidated", isValidated)
    // if (isValidated) {
    //   const savedRes: any = await create({
    //     variables: {
    //       input: {
    //         formId: formId,
    //         res: res,
    //       },
    //     },
    //   });
    //   console.log(savedRes);
    //   if (savedRes) alert("form answer submitted");
    //   onClose();
    // }
  // };

  console.log("res", res);
  console.log("errors", errors);
  
  useEffect(() => {
    console.log("data", data);
    if (data) {
      const list = [];
      for (let i = 0; i < data.form.formData.length; i++) {
        list.push("");
      }
      setRes([...list]);
      append(data.form.formData);
    }
  }, [data]);


  
  return (
    <PreviewContainer>
      {!isForm&&<PreviewHeader>
        <span className="back" onClick={()=>onClose()}>
          <BsArrowLeft/>
        </span>
        <span>Preview</span>
        <button>
          Reload
          <span><AiOutlineReload/></span>
        </button>
      </PreviewHeader>}
      {/* <Form>
        <header>{data && <p>{data.form.title}</p>}</header>
        {data &&
          data.form.formData.map((item: any, index: number) => (
            <div className="section" key={index}>
              <p className="question">
                <span>{index + 1}</span>
                {item.Question}
              </p>
              {item.fieldType !== "choice" && (
                <>
                  <input
                    type="text"
                    className="answer"
                    placeholder="Enter Your answer here"
                    onChange={(e) => {setA(e.target.value);saveRes(e.target.value, index);}}
                  />
                  <p className="error">{errors && errors[index]}</p>
                </>
              )}
              {item.fieldType == "choice" &&
                item.option.map((opt: string, num: number) => (
                  <div
                    onClick={() => {
                      saveRes(opt, index, num);
                    }}
                    className={opt === res[index] ? "opt act" : "opt"}
                  >
                    {opt}
                  </div>
                ))}
            </div>
          ))}

        <button className="sub" onClick={submitHandler}>
          Submit
        </button>
      </Form> */}
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
                { field.fieldType!=="choice"&&
                <input
                  className="answer"
                  type={field.fieldType}
                  {...register(`formData.${index}.ans` as const, { required: true })}
                />}
                {
                  field.fieldType=="choice"&&
                  <>
                  {field.option.map((item)=><div className="opt"
                  onClick={()=>{res[index]=item;setRes([...res])}}
                  >{item}</div> )}
              
              </>
                }
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
