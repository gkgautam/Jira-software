import React from 'react'
import SprintContent from '../components/activeSprintComponents/SprintContent';
import RapidBoardBreadcrum from '../components/activeSprintComponents/RapidBoardBreadcrum';
export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/fetchIssuesApi')
  const data = await res.json();
  return {
    props: {data}, // will be passed to the page component as props
  }
}

function Activesprint({data}) {
  console.log('batman333',data);
  return (
    <>
        <div className='breadcrum p-0 m-0'>
        <RapidBoardBreadcrum/>
        </div>
        <div className='sprint-container mt-1 ps-1'>
        <SprintContent sprintcontent = {data}/>
        </div>
    </>
  )
}

export default Activesprint