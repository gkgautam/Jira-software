import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Navigation from './navigation/navigation/Navigation';

function Layout({children}) {
  return (
    <>
        <main className='page-container row p-0 m-0'>
    <Navbar/>

        <div className='sidebar-container col-3 m-0 p-0' style={{"position":"fixed","overflowX":"hidden","left":"0","height":"100%","zIndex":"1","top":"54px"}}>
        <Navigation/>
        </div>
        <div className='page-content-container  col-9 p-3 ' style={{"left":"316px","top":"54px","position":"relative"}}>
        {children}
        </div>
        </main>
    </>
  )
}

export default Layout