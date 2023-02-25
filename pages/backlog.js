import React, { useState,useEffect } from 'react';
import Sprint from '../components/Sprint';
import Spinner from '../components/spinner/Spinner';
// export async function getServerSideProps() {
//   const res = await fetch('https://jira-software.vercel.app/api/fetchIssuesApi')
//   // const res = await fetch('http://localhost:3000/api/fetchIssuesApi')
//   const data = await res.json();
//   return {
//     props: {data}, // will be passed to the page component as props
//   }
// }
// function backlog({ data }) {

import { getSession } from "next-auth/react";

export async function getServerSideProps(context) {
  const userSession = await getSession(context);

  if(!userSession){
    return {
      redirect:{
        destination:"/login",
        permanent: false
      }
    }
  }
     
    return{
      props:{ userSession }
    }
  }

function Backlog() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch(`${process.env.NODE_ENV=="production"?"https://jira-software.vercel.app/api/fetchIssuesApi":"http://localhost:3000/api/fetchIssuesApi"}`);
    // const res = await fetch('https://jira-software.vercel.app/api/fetchIssuesApi');
    const data = await res.json();
    setData(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>  
    {
      loading ? <Spinner show={loading} /> : <>
      <Sprint  alltickets={data}/>
      <Sprint  alltickets={data}/>
      <Sprint  alltickets={data}/>
      <Sprint  alltickets={data}/>
      </>
    }
       
    </>
  )
}

export default Backlog