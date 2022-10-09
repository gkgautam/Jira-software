import React from 'react';
import Image from 'next/image';
import storyLogo from '../../public/jiraImages/storylogo.svg';
import StorySubtask from './StorySubtask';

function Story() {
    return (
        <>
            <div className='individual-story d-flex my-1'>
                <div className='dropdown-icon'>
                    <svg width="20" height="24" viewBox="0 0 24 24" role="presentation"><path d="M8.292 10.293a1.009 1.009 0 000 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 000-1.419.987.987 0 00-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 00-1.406 0z" fill="currentColor" fillRule="evenodd"></path></svg>
                </div>
                <Image src={storyLogo} />
                <a href=''>
                    <span style={{ "fontSize": "12px", "padding": "0 5px" }}>
                        RECHARGE-2861
                    </span>
                </a>
                <div className='subtask-info align-self-center d-flex'>

                    <div className='custom-pirmary-btn align-self-center m-0' style={{ "fontSize": "10px", "fontWeight": "500", "borderRadius": "2px", "color": "#42526E", "padding": "1px 3px", "border": "1px solid #ffe28c", "margin": "0 2px" }}>
                        <span className='m-0' >QA</span>
                    </div>
                    <span className='align-self-center' style={{ "fontSize": "10px", "padding": "0 5px", "color": "#5e6c84" }}>
                        1 sub-task
                    </span>
                    <span className='align-self-center' style={{ "fontSize": "14px", "padding": "0 2px", "color": "#5e6c84" }}>
                        Calorie Computation | Calculating customer's calorie level from BMI information provided
                    </span>
                </div>

            </div>
            <StorySubtask/>
        </>
    )
}

export default Story