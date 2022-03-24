import React from 'react'
import { Insights, } from './Insights.styles';

const InsightsComponent = ({ data }: any) => {
    return (
        <Insights>
            <div className='filter'>
                {/* filter for submissions */}

            </div>
            <p>Big Picture</p>
            <ul>
                <li>
                    <span className='first'>Views</span>
                    <span className='second'>{data && data.form.submission.length}</span>
                </li>
                <li>
                    <span className='first'>Starts</span>
                    <span className='second'>{data && data.form.submission.length}</span>
                </li>
                <li>
                    <span className='first'>Submissions</span>
                    <span className='second'>{data && data.form.submission.length}</span>
                </li>
                <li>
                    <span className='first'>Completion Rate</span>
                    <span className='second'>100%</span>
                </li>
                <li>
                    <span className='first'>Time to complete</span>
                    <span className='second'>00:60</span>
                </li>
            </ul>

        </Insights>
    )
}

export default InsightsComponent