import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Navigation from './navigation/navigation/Navigation';
import { useSession, signOut } from "next-auth/react";
import Link from 'next/link';
function Layout({children}) {
  const { data: session } = useSession();
  const signOutSession= async ()=>{
    signOut();
  }

  return (
    <>
      {
            session ?<main className='page-container row p-0 m-0'>
    <Navbar/>

        <div className='sidebar-container col-3 m-0 p-0' style={{"position":"fixed","overflowX":"hidden","left":"0","height":"100%","zIndex":"1","top":"54px"}}>
        <Navigation/>
        </div>
        <div className='page-content-container  col-9 p-3 ' style={{"left":"316px","top":"54px","position":"relative"}}>
        {children}
        {console.log('mychild',children)}
        </div>
        </main>: <div>
        {children}
        </div>
        
      }
    </>
  )
}

export default Layout