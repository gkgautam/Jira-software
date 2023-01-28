import React from 'react';
import Image from 'next/image';
import subtasklogo from '../public/jiraImages/subtasklogo.svg';
import medium from '../public/jiraImages/medium.svg';

function Subtask({issueType}) {
  return (
    <>
        <div className='subtask-details d-flex justify-content-between p-2' style={{"boxShadow":"0 1px 1px rgba(9,30,66,0.25),0 0 1px 1px rgba(9,30,66,0.13)","borderRadius":"3px"}}>
                            <div className='left-details'>
                                <Image src={issueType} alt="subtask" />
                                <a href='' style={{ "textDecoration": "none" }}>
                                    <span style={{ "fontSize": "12px", "padding": "0 5px" }}>
                                        RECHARGE-2132
                                    </span>
                                </a>
                                <span className='align-self-center' style={{ "fontSize": "12px", "padding": "0 2px", "color": "#5e6c84" }}>
                                    Calorie Computation | Calculating customers calorie
                                </span>
                            </div>
                            <div className='rigth-details d-flex align-items-center'>
                                <Image src={medium} alt="priority-medium" />
                                <div className='individual-asignee' style={{ "borderRadius": "50%", "backgroundColor": "#76bbc9", "color": "#000", "height": "25px", "width": "25px", "fontSize": "14px", "textAlign": "center", "border": "2px solid #fff" }}>
                                    P
                                </div>
                                <div className='status px-1' style={{ "borderRadius": "2px", "backgroundColor": "#E3FCEF","fontSize": "10px", "fontWeight": "700", "color": "#006644" }}>
                                    {/* <span style={{ "fontSize": "10px", "fontWeight": "700", "color": "#006644" }}>DONE
                                            <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M8.292 10.293a1.009 1.009 0 000 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 000-1.419.987.987 0 00-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 00-1.406 0z" fill="currentColor" fillRule="evenodd"></path></svg>
                                    </span> */}
                                    DONE
                                </div>
                            </div>
                        </div>
    </>
  )
}

export default Subtask