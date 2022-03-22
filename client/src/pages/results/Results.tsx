import { gql, useQuery } from '@apollo/client';
import { format } from 'path';
import React, { useState } from 'react'
import { BsFillEyeFill } from 'react-icons/bs'
import { BsCheckLg, BsLink, BsTelephoneFill, BsTextParagraph } from 'react-icons/bs';
import { MdEmail, MdShortText } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Header, Wrapper, Menu, Insights, Summary, Responses } from './Results.styles'

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


const Results = () => {
    const [menu, setMenu] = useState('insights');
    const formId = localStorage.getItem('formId')
    const { loading, error, data } = useQuery(GET_QUESTION, {
        variables: {
            input: formId
        },
    });
    if (loading) console.log("loading..", data);
    if (error) console.log("error", error);
    return (
        <Wrapper>
            <Header>
                <div className='first'>
                    <span>my Work space /</span>
                    <span>{data && data.form.title}</span>
                </div>

                <ul>
                    <li><Link to="/createForm">create</Link></li>
                    <li>Connect</li>
                    <li>Share</li>
                    <li>
                        <Link to="/results">Result</Link>
                    </li>
                </ul>

                <p>

                    <span className='preview' >
                        <BsFillEyeFill />
                    </span>

                    <button className='publish'>Publish</button>
                    <span className='avatar'>P</span>
                </p>
            </Header>
            <Menu>
                <ul>
                    <li onClick={() => setMenu('insights')} className={menu === "insights" ? "active" : ""}>Insights</li>
                    <li onClick={() => setMenu('summary')} className={menu === "summary" ? "active" : ""}>Summary</li>
                    <li onClick={() => setMenu('responses')} className={menu === "responses" ? "active" : ""}>Responses [{data && data.form.submission.length}]</li>
                </ul>
            </Menu>
            {menu === "insights" &&
                <Insights>
                    <div className='filter'>
                        {/* filter for submissions */}

                    </div>
                    <p>Big Picture</p>
                    <ul>
                        <li>
                            <span className='first'>Views</span>
                            <span className='second'>2</span>
                        </li>
                        <li>
                            <span className='first'>Starts</span>
                            <span className='second'>2</span>
                        </li>
                        <li>
                            <span className='first'>Submissions</span>
                            <span className='second'>2</span>
                        </li>
                        <li>
                            <span className='first'>Completion Rate</span>
                            <span className='second'>50%</span>
                        </li>
                        <li>
                            <span className='first'>Time to complete</span>
                            <span className='second'>00:60</span>
                        </li>
                    </ul>

                </Insights>

            }
            {
                menu === "summary" &&
                <Summary>
                    <div className='first'>
                        <span className='heading'>Response Summary</span>


                        {data && data.form.formData.map((item: any, index: number) =>
                            <div className='block' >
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

                                {data.form.submission.map((i: any) =>
                                    <p className='ans'>{i.res[index]}</p>
                                )}
                            </div>

                        )}


                    </div>
                    <div className='second'>
                        <button>Generate a report</button>
                        <div className='text'>Share your results with anyone. Your report automatically updates as new answers come in.</div>
                    </div>
                </Summary>


            }
            {menu === "responses" &&
                <Responses>

                    <div className='flex'>
                        <div className='block'>
                            <input type="checkbox" />
                        </div>
                        <div className='block'>
                            <p>date</p>
                        </div>
                        {data && data.form.formData.map((item: any, index: number) =>
                            <div className='block' key={item.id}>
                                <div className='question'>
                                    <span>{index + 1}</span>
                                    <span>{item.Question}</span>
                                </div>
                            </div>

                        )}
                    </div>



                    {data && data.form.submission.map((i: any, id: number) =>
                        <div key={i.id}>
                            <div className='flex'>
                                <div className='block'>
                                    <input type="checkbox" />
                                </div>
                                <div className='block'>
                                    {i.date}
                                </div>

                                {i.res.map((item: any) => <div className='block'>
                                    {item}
                                </div>)}
                            </div>
                        </div>
                    )}


                </Responses>
            }


        </Wrapper>
    )
}

export default Results