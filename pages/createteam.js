import React from 'react';
import { useFormik } from 'formik';
import { useState } from 'react';
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

function Createteam() {

  const formik = useFormik({
    initialValues:{
      teamName:"",
      memberName:"",
      memberEmail:""
    },
    onSubmit
  });
  
  async function onSubmit (values){

    try {
      const res = await fetch("/api/createteam", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      });

      const data = await res.json();
      
      if(data){
        alert(data.message);
      }

    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <form onSubmit={formik.handleSubmit}>
      <div className="form-group">
          <label htmlFor="teamName">TeamName</label>
          <input type="text" className="form-control" id="teamName" name='teamName' placeholder="Team Name" {...formik.getFieldProps('teamName')} />
        </div>
        <div className="form-group">
          <label htmlFor="memberName">Member Name</label>
          <input type="text" className="form-control" id="memberName" name="memberName" placeholder="Enter name" {...formik.getFieldProps('memberName')} />
            {/* <button type="button" className="btn btn-secondary" onClick={updateMemberList}>Add Member</button> */}
        </div>
        <div className="form-group">
          <label htmlFor="memberEmail">Member Email address</label>
          <input type="email" className="form-control" id="memberEmail" name="memberEmail" aria-describedby="emailHelp" placeholder="Enter email" {...formik.getFieldProps('memberEmail')} />
            {/* <button type="button" className="btn btn-secondary" onClick={updateMemberList}>Add Member</button> */}
        </div>
        
        <button type="submit" className="btn btn-primary">Add Member</button>
      </form>
    </>
  )
}

export default Createteam