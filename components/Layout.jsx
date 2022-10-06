import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Navigation from './navigation/navigation/Navigation';

function Layout({children}) {
  return (
    <>
    <Navbar/>
        <main className='page-container row p-0 m-0'>
        <div className='sidebar-container col-3 m-0 p-0'>
        <Navigation/>
        </div>
        <div className='page-content-container border border-danger col-9 m-0 p-3 '>
        {children}
        </div>
        </main>
    </>
  )
}

export default Layout