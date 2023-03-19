import React from 'react'

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
    <div>you are loggedin</div>
  )
}

export default dashboard