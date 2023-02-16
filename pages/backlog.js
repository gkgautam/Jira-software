import React from 'react';
import Sprint from '../components/Sprint';

export async function getServerSideProps() {
  const res = await fetch('https://jira-software.vercel.app/api/fetchIssuesApi')
  // const res = await fetch('http://localhost:3000/api/fetchIssuesApi')
  const data = await res.json();
  return {
    props: {data}, // will be passed to the page component as props
  }
}
function backlog({ data }) {
  return (
    <>
    {/* <h1>{data.length}</h1> */}
      <Sprint  alltickets={data}/>
      <Sprint  alltickets={data}/>
      <Sprint  alltickets={data}/>
      <Sprint  alltickets={data}/>
      {/* <Sprint />
      <Sprint />
      <Sprint /> */}

    </>
  )
}

export default backlog