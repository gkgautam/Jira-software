import React from 'react'
import SprintTicket from './SprintTicket'
import UsersIconList from './UsersIconList'

function Sprint() {
    return (
        <>
    <div className='spint-section m-0 my-3'>

            <div className='sprint-header'>
                <div className='sprint-title d-flex text-center gap-2 align-items-center'>
                    <h6 className='m-0'>Web App PIs3</h6>
                    <p className='my-1 p-0' style={{ "fontSize": "11px", "fontWeight": "400", "color": "rgba(9,30,66,0.5)" }}>35 Issues</p>
                </div>
                <div className='d-flex sprint-duration gap-4'>
                    <p className='my-1 p-0' style={{ "fontSize": "10px", "fontWeight": "400", "color": "rgba(9,30,66,0.5)" }}>01/Feb/23 8:44 AM</p>
                    <p className='my-1 p-0' style={{ "fontSize": "10px", "fontWeight": "400", "color": "rgba(9,30,66,0.5)" }}>14/Feb/23 11:23 AM</p>
                </div>
            </div>
            <UsersIconList />
            <div className='border'>
                <SprintTicket />
                <SprintTicket />
                <SprintTicket />
                <SprintTicket />
                <SprintTicket />
                <SprintTicket />
                <SprintTicket />
                <SprintTicket />
                <SprintTicket />


            </div>
    </div>

        </>
    )
}

export default Sprint