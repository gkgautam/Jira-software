import React from 'react'
import LandingImg1 from '../public/jiraImages/landingimg1.jpg';
import Image from 'next/image';

import { getSession } from 'next-auth/react'
export async function getServerSideProps(ctx){
    const userSession = await getSession(ctx);
    if(!userSession){
        return {
            redirect:{
                destination:'/login',
                permanent:false
            }
        }
    } 
    return {
        props:{}
    }
    // else{
    //     return {
    //         redirect:{
    //             destination:'/dashboard',
    //             permanent:false
    //         }
    //     }
    // }
} 
function dashboard() {
  return (
    <>
    <h1 className=''>Welcome to Govind Jira</h1>
<div className='container m-0'>
                <div className='row'>
                    <div className='col-5 ps-5 text-center align-items-center d-flex flex-column justify-content-end'>
                        <h1 className=''>Its Possible</h1>
                        <h1 className=''>with teamwork</h1>
                    </div>
                    <div className='col-7'>
                        <Image src={LandingImg1} alt="homepage image" />
                    </div>
                </div>
            </div>
    </>
        
  )
}

export default dashboard