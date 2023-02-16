import React from 'react'
import Image from 'next/image';
import subtasklogo from '../public/jiraImages/storylogo.svg';
import medium from '../public/jiraImages/medium.svg';
import high from '../public/jiraImages/high.svg';
import highest from '../public/jiraImages/highest.svg';
import low from '../public/jiraImages/low.svg';
import lowest from '../public/jiraImages/lowest.svg';

import Link from 'next/link';
function SprintTicket({ticketdata,color}) { 
    return (
        <>
        {/* <h1>{color}</h1> */}
        <Link href={`/viewissue/${ticketdata.projectId}`}>
            <div className='border-bottom border-left w-100 pointer pe-auto ticket-row row p-0 m-0 py-1' >
                <div className='col-9  d-flex justify-content-between'>
                    <div className='ticket-summary d-flex'>
                        <div className='ticket-logo d-flex pe-2'>
                            <Image src={subtasklogo} alt="subtask" />
                        </div>
                        <div className='summary small'>
                            <span>{ticketdata.summary.substr(0,70) }... </span>
                        </div>
                    </div>
                    <div className='epic-link '>
                        <span className='small bg-warning rounded px-1'> Seamless checkout</span>
                    </div>
                </div>
                <div className='col-3 d-flex align-items-center justify-content-center gap-2 p-0 m-0'>
                    <div className='individual-asignee' style={{ "borderRadius": "50%", "backgroundColor": `${color}`, "color": "#000", "height": "24px", "width": "24px", "fontSize": "13px", "textAlign": "center", "border": "2px solid #fff" }}>
                        {ticketdata.assignee.charAt(0).toUpperCase()}
                    </div>
                    <div className='ticket-num'>
        <span className='small'>RECHARGE-{ticketdata.projectId.toString().padStart(4,0)}</span>
                    </div>
                    <div className='ticket-priority d-flex'>
                    {/* {
                        if(ticketdata.issuePriority==='medium'){ */}
                            <Image src={high} alt="priority-medium" />
                        {/* }
                    } */}
                    </div>
                    <div className='Story-point' style={{ "borderRadius": "45%", "backgroundColor": "#c1c1c1", "color": "#000", "height": "20px", "width": "25px", "fontSize": "13px", "textAlign": "center"}}>
                        <span>5</span>
                    </div>
                </div>
            </div>
            </Link>
        </>
    )
}

export default SprintTicket