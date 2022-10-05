import React from 'react'
import Navbarleft from '../navbar-left/Navbarleft'
import Sidebar from '../sidebar/Sidebar'

function Navigation() {
  return (
    <>
    <aside className='main-sidebar border border-primary d-flex row p-0 m-0'>
        <Navbarleft/>
        <Sidebar/>
        </aside>
    </>
  )
}

export default Navigation