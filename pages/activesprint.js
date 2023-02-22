import React from 'react'
import SprintContent from '../components/activeSprintComponents/SprintContent';
import RapidBoardBreadcrum from '../components/activeSprintComponents/RapidBoardBreadcrum';
import { useState,useEffect } from 'react';
import Spinner from '../components/spinner/Spinner';
// export async function getServerSideProps() {
//   const res = await fetch('https://jira-software.vercel.app/api/fetchIssuesApi')
//   // const res = await fetch('http://localhost:3000/api/fetchIssuesApi')
//   const data = await res.json();
  
//   return {
//     props: {data}, // will be passed to the page component as props
//   }
// }

function Activesprint() {
  const [sprintData, setSprintData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:3000/api/fetchIssuesApi");
    // const res = await fetch('https://jira-software.vercel.app/api/fetchIssuesApi');
    const data = await res.json();
    setSprintData(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  console.log('superdata',sprintData);
  // $('#loader').addClass('d-none');
  return (
    <>  
    {
      loading ? <Spinner show={loading} /> : <>
      <div className='breadcrum p-0 m-0'>
        <RapidBoardBreadcrum/>
        </div>
        <div className='sprint-container mt-1 ps-1'>
        <SprintContent sprintcontent = {sprintData}/>
        </div>
      </>
    }
       
    </>
  )
}

export default Activesprint