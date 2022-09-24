import React from 'react'
import Navbar from '../components/navbar/Navbar';
import { FiAlertCircle } from "react-icons/fi";
function Homepage() {
  return (
    <div>
    <Navbar/>
        <FiAlertCircle/>
    <h1>Home page content </h1>
    </div>
  )
}

export default Homepage