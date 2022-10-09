import React from 'react'
import { FaRegSun, FaRegClock } from "react-icons/fa";

function SprintHeader() {
  return (
    <>
      <div className='sprint-Header d-flex justify-content-between'>
        <div className='sprint-Title'>
          <h5 className=''>Web App PI4s4 </h5>
        </div>
        <div className='header-action d-flex justify-content-center align-items-center' style={{ "gap": "10px" }}>
          <div className='menu-button'>
            <svg role="presentation" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.3789 4.62256C9.99914 4.62173 9.65331 4.84087 9.49192 5.18458L6.11523 12.3762C5.97308 12.679 5.9956 13.0334 6.17494 13.3157C6.35428 13.598 6.66553 13.7691 7 13.7691H8.79182L6.40251 18.1304C6.17135 18.5523 6.28163 19.0798 6.66249 19.3738C7.04335 19.6677 7.58152 19.6408 7.93117 19.3103L16.8269 10.902C17.1178 10.6269 17.2117 10.2023 17.0637 9.83032C16.9157 9.45832 16.5558 9.21418 16.1555 9.21418H14.547L17.0353 6.24031C17.2787 5.94947 17.3319 5.5441 17.1717 5.20034C17.0116 4.85658 16.6671 4.63646 16.2879 4.63562L10.3789 4.62256Z" stroke="currentColor" strokeWidth="1.95489" strokeLinejoin="round"></path></svg>
          </div>
          <div className='favourite'>
            <FaRegSun />
          </div>
          <div className='time-detail d-flex' style={{ "gap": "5px", "alignSelf": "center" }}>
            <span><FaRegClock /></span>
            <span className='mt-1' style={{ "fontSize": "14px", "color": "reg(66,82,110)", "marginTop": "4px" }}>2 days remaining</span>
          </div>
          <div className='complete-btn'>
            <span style={{ "fontSize": "14px", "color": "reg(66,82,110)", "backgroundColor": "rgb(235,236,240)", "padding": "3px", "borderRadius": "2px" }}>complete sprint</span>
          </div>
          <div className='share'>
            <svg width="20" height="20" viewBox="0 0 24 24" role="presentation"><g fill="currentColor" fillRule="evenodd"><path d="M6 15a3 3 0 100-6 3 3 0 000 6zm0-2a1 1 0 110-2 1 1 0 010 2zm12-4a3 3 0 100-6 3 3 0 000 6zm0-2a1 1 0 110-2 1 1 0 010 2zm0 14a3 3 0 100-6 3 3 0 000 6zm0-2a1 1 0 110-2 1 1 0 010 2z" fillRule="nonzero"></path><path d="M7 13.562l8.66 5 1-1.732-8.66-5z"></path><path d="M7 10.83l1 1.732 8.66-5-1-1.732z"></path></g></svg>
          </div>
          <div>...</div>
        </div>
      </div>
    </>
  )
}

export default SprintHeader