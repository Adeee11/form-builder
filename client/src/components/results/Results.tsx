import { gql, useMutation, useQuery } from '@apollo/client';
import { useState, useEffect } from 'react'
import { BsCheckLg, BsFillCloudDownloadFill, BsLink, BsTelephoneFill, BsTextParagraph } from 'react-icons/bs';
import { MdEmail, MdShortText } from 'react-icons/md';
import { Wrapper, Menu, Insights, Summary, Responses } from './Results.styles'
import exportFromJSON from 'export-from-json';
import ModalRes from '../ModalRes/ModalRes';
import InsightsComponent from '../InsightsComponent/Insights';
import Nav from '../Nav/Nav';





const GET_QUESTION = gql`
query form($input:ID!){
    form(formId:$input){
      id
      date
      title
      owner
      formData{
        Question
        fieldType
        option
      }
      submission{
        id
        res
        formId
        date
      }
    }
  }
`;

const REMOVE_SUBMISSION = gql`
mutation removeSubmission($input:ID!){
    removeSubmission(id:$input)
  }  
`
type propType = {
    formId?: string,
}

const Results = ({ formId }: propType) => {
    const [menu, setMenu] = useState('insights');
    const [submission, setSubmission] = useState<any>([]);
    const [date, setDate] = useState('');
    const [id, setId] = useState('');
    const [showModal, setShowModal] = useState(false);
    const { loading, error, data, refetch } = useQuery(GET_QUESTION, {
        variables: {
            input: formId
        },
    });

    const [remove, { loading: l, error: e }] = useMutation(REMOVE_SUBMISSION)

    if (loading) console.log("loading..", data);
    if (error) console.log("error", error);

    useEffect(() => {
        refetch();
    }, [])

    const saveSubmission = (i: string[], j: string, k: string) => {
        setSubmission(i);
        setDate(j)
        setId(k)
        console.log("res:", i);
        console.log("date:", date);
        console.log("id:", k)
        setShowModal(true)
    }

    const downloadExcel = () => {
        const list: any = []
        for (let i = 0; i < data.form.formData.length; i++) {
            list.push({})
            for (let j = 0; j < data.form.submission.length; j++) {
                list[i]['question'] = data.form.formData[i].Question
                list[i]['user ' + j] = data.form.submission[j].res[i]
            }
        }
        const fileName = 'DownloadedResponses'
        const exportType = exportFromJSON.types.csv
        exportFromJSON({ data: list, fileName, exportType })
    }

    const deleteRes = async () => {
        console.log("delete code for ", id)
        const data: any = await remove({
            variables: {
                input: id
            }
        })
        console.log(data);
        refetch()
    }

    return (
        <Wrapper>

            <Menu>
                <Nav
                    menu={menu}
                    setMenu={setMenu}
                    data={data}
                />
            </Menu>
            {menu === "insights" &&
                <InsightsComponent data={data} />

            }
            {
                menu === "summary" &&
                <Summary>
                    <div className='first'>
                        <span className='heading'>Response Summary</span>


                        {data && data.form.formData.map((item: any, index: number) =>
                            <div className='block' key={index}>
                                <div className='question'>


                                    {item.fieldType === "text" &&
                                        <span className='short span'>
                                            <MdShortText />
                                            <span className='index'>{index + 1}.</span>
                                        </span>}
                                    {item.fieldType === "email" &&
                                        <span className='email span'>
                                            <MdEmail />
                                            <span className='index'>{index + 1}.</span>
                                        </span>}
                                    {item.fieldType === "number" &&
                                        <span className='number span'>
                                            <BsTelephoneFill />
                                            <span className='index'>{index + 1}.</span>
                                        </span>}
                                    {item.fieldType === "url" &&
                                        <span className='url span'>
                                            <BsLink />
                                            <span className='index'>{index + 1}.</span>
                                        </span>}
                                    {item.fieldType === "choice span" &&
                                        <span className='choice'>
                                            <BsCheckLg />
                                            <span className='index'>{index + 1}.</span>
                                        </span>}

                                    {item.fieldType === "textArea" &&
                                        <span className='long'>
                                            <BsTextParagraph />
                                            <span className='index'>{index + 1}.</span>
                                        </span>}



                                    <span>{item.Question}</span>
                                </div>

                                {data.form.submission.map((i: any, a: number) =>
                                    <p className='ans' key={a}>{i.res[index]}</p>
                                )}
                            </div>

                        )}


                    </div>
                    <div className='second'>
                        <button>Generate a report</button>
                        <div className='text'>Share your results with anyone. Your report automatically updates as new answers come in.</div>
                    </div>
                </Summary>}

            {menu === "responses" &&
                <Responses>
                    <span onClick={downloadExcel} className="download">
                        <BsFillCloudDownloadFill />
                    </span>
                    {showModal &&
                        <ModalRes
                            setShowModal={setShowModal}
                            date={date}
                            deleteRes={deleteRes}
                            data={data}
                            submission={submission}
                        />
                    }
                    <div className='con'>
                        <div className='flex'>

                            <div className='block'>
                                <p>date</p>
                            </div>
                            {data && data.form.formData.map((item: any, index: number) =>
                                <div className='block' key={index}>
                                    <div className='question'>
                                        <span>{index + 1}</span>
                                        <span>{item.Question}</span>
                                    </div>
                                </div>
                            )}
                        </div>



                        {data && data.form.submission.map((i: any, id: number) =>
                            <div key={i.id} onClick={() => saveSubmission(i.res, i.date, i.id)}>
                                <div className='flex'>

                                    <div className='block'>
                                        {i.date}
                                    </div>

                                    {i.res.map((item: any) => <div className='block'>
                                        {item}
                                    </div>)}
                                </div>
                            </div>
                        )}
                    </div>

                </Responses>
            }


        </Wrapper>
    )
}

export default Results