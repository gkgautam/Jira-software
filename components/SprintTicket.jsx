import React from 'react'
import Image from 'next/image';
import subtasklogo from '../public/jiraImages/storylogo.svg';
import medium from '../public/jiraImages/medium.svg';

function SprintTicket() {
    return (
        <>
        
            <div className='border-bottom border-left w-100 ticket-row row p-0 m-0 py-1' >
                <div className='col-9  d-flex justify-content-between'>
                    <div className='ticket-summary d-flex'>
                        <div className='ticket-logo d-flex pe-2'>
                            <Image src={subtasklogo} alt="subtask" />
                        </div>
                        <div className='summary small'>
                            <span>Design Ticket | Seamless Checkout </span>
                        </div>
                    </div>
                    <div className='epic-link '>
                        <span className='small bg-warning rounded px-1'> Seamless checkout</span>
                    </div>
                </div>
                <div className='col-3 d-flex align-items-center justify-content-center gap-2 p-0 m-0'>
                    <div className='individual-asignee' style={{ "borderRadius": "50%", "backgroundColor": "#76bbc9", "color": "#000", "height": "24px", "width": "24px", "fontSize": "13px", "textAlign": "center", "border": "2px solid #fff" }}>
                        P
                    </div>
                    <div className='ticket-num'>
        <span className='small'>RECHARGE-2856</span>
                    </div>
                    <div className='ticket-priority d-flex'>
                    <Image src={medium} alt="priority-medium" />
                    </div>
                    <div className='Story-point' style={{ "borderRadius": "45%", "backgroundColor": "#c1c1c1", "color": "#000", "height": "20px", "width": "25px", "fontSize": "13px", "textAlign": "center"}}>
                        <span>5</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SprintTicket