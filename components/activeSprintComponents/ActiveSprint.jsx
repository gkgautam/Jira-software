import React from 'react'
import RapidBoardBreadcrum from './RapidBoardBreadcrum'
import SprintContent from './SprintContent'

function ActiveSprint() {
  return (
    <>
        <div className='breadcrum p-0 m-0'>
        <RapidBoardBreadcrum/>
        </div>
        <div className='sprint-container mt-1 ps-1'>
        <SprintContent/>
        </div>
    </>
  )
}

export default ActiveSprint