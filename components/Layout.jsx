import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Navigation from './navigation/navigation/Navigation';

function Layout({children}) {
  return (
    <>
    <Navbar/>
        <main className='page-container row border border-secondary p-0 m-0'>
        <div className='sidebar-container col-3 m-0 p-0'>
        <Navigation/>
        </div>
        <div className='page-content-container col-9 m-0 p-0'>
        {children}
        </div>
        </main>
        {/* <footer className='footer border border-secondary' style={{"position":"fixed",
   "left":"0px",
   "bottom":"0px",
   "height":"30px",
   "width":"100%",
   "background":"#999"}}>
      I am Footer section
      </footer> */}
    </>
  )
}

export default Layout