import React from 'react';
import Image from 'next/image';
import profileimg from '../../../public/jiraImages/react-logo.png';
import styles from './Sidebar.module.scss'
import { FaGgCircle } from "react-icons/fa";
import Link from 'next/link';
function Sidebar() {
  return (
    // this division is for project name box
    <div className='sidebar-secondary col-9 p-0 px-3 m-0' style={{ "backgroundColor": "rgb(244 245 247)" }}>
      <div className='project-name-container d-flex justify-content-around align-items-center my-3 px-2'>
        <Link href={'/'}>
        <div className='project-avatar'>
          <div className={`project-logo mt-1`} >
            <Image src={profileimg} alt="profile-image" width={40} height={40} style={{ "borderRadius": "50%" }} />
          </div>
        </div>
        </Link>
        <div className='project-speification'>
          <h6 className='m-0' style={{ "color": "rgb(66 82 110)", "fontSize": "15px" }}>Jira Project React</h6>
          <div className='project-type'>
            <p className='m-0' style={{ "color": "rgb(94 108 132)", "fontSize": "13px" }}>Software Project</p>
          </div>
        </div>
      </div>

      {/* webapp board section */}

      {/* planning dropdown  */}
      <div className='webapp-planning d-flex align-items-baseline'>
      <div className='dropdown-icon'>
        <svg width="20" height="24" viewBox="0 0 24 24" role="presentation"><path d="M8.292 10.293a1.009 1.009 0 000 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 000-1.419.987.987 0 00-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 00-1.406 0z" fill="currentColor" fillRule="evenodd"></path></svg>
        </div>
        <div className='webapp-title d-flex flex-column ' style={{ "paddingLeft": "0px", }}>
          <h6 className='m-0' style={{ "fontSize": "11px", "fontWeight": "700", "color": "rgb(66,82,110)" }}> PLANNING</h6>
          {/* <p className='m-0 p-0' style={{ "fontSize": "12px", "fontWeight": "400", "color": "rgb(66,82,110)" }}>Board</p> */}
        </div>
        
      </div>



      <div className='webapp-board-section' style={{"backgroundColor":"#EBECF0","borderRadius":"5px"}}>
      <div className='webapp-title-section d-flex justify-content-between'>
        <div className='webapp-title d-flex flex-column ' style={{ "paddingLeft": "20px", }}>
          {/* <FaGgCircle/> */}
          <h6 className='m-0' style={{ "fontSize": "14px", "fontWeight": "500", "color": "rgb(66,82,110)" }}> Web App</h6>
          <p className='m-0 p-0' style={{ "fontSize": "12px", "fontWeight": "400", "color": "rgb(66,82,110)" }}>Board</p>
        </div>
        <div className='dropdown-icon'>
        {/* <FaGgCircle /> */}
        <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M8.292 10.293a1.009 1.009 0 000 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 000-1.419.987.987 0 00-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 00-1.406 0z" fill="currentColor" fillRule="evenodd"></path></svg>
        </div>
      </div>

    {/* items start here */}

        <Link href={'/'}>
        <div className={`${styles.webapp_item} d-flex align-items-center py-2`} style={{ "paddingLeft": "20px", "gap": "16px" }}>
          {/* <FaGgCircle /> */}
          <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M6 2h10a3 3 0 010 6H6a3 3 0 110-6zm0 2a1 1 0 100 2h10a1 1 0 000-2H6zm4 5h8a3 3 0 010 6h-8a3 3 0 010-6zm0 2a1 1 0 000 2h8a1 1 0 000-2h-8zm-4 5h6a3 3 0 010 6H6a3 3 0 010-6zm0 2a1 1 0 000 2h6a1 1 0 000-2H6z" fill="currentColor" fillRule="evenodd"></path></svg>
          <div className='m-0' style={{ "fontSize": "14px", "fontWeight": "400", "color": "rgb(66,82,110)" }}> Roadmap</div>
        </div>
        </Link>

        <Link href={'/backlog'}>
        <div className={`${styles.webapp_item} d-flex align-items-center py-2`} style={{ "paddingLeft": "20px", "gap": "16px" }}>
          {/* <FaGgCircle /> */}
          <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor"><path d="M5 19.002C5 19 17 19 17 19v-2.002C17 17 5 17 5 17v2.002zm-2-2.004C3 15.894 3.895 15 4.994 15h12.012c1.101 0 1.994.898 1.994 1.998v2.004A1.997 1.997 0 0117.006 21H4.994A1.998 1.998 0 013 19.002v-2.004z"></path><path d="M5 15h12v-2H5v2zm-2-4h16v6H3v-6z"></path><path d="M7 11.002C7 11 19 11 19 11V8.998C19 9 7 9 7 9v2.002zM5 8.998C5 7.894 5.895 7 6.994 7h12.012C20.107 7 21 7.898 21 8.998v2.004A1.997 1.997 0 0119.006 13H6.994A1.998 1.998 0 015 11.002V8.998z"></path><path d="M5 5v2h12V5H5zm-2-.002C3 3.894 3.895 3 4.994 3h12.012C18.107 3 19 3.898 19 4.998V9H3V4.998z"></path></g></svg>
          <div className='m-0' style={{ "fontSize": "14px", "fontWeight": "400", "color": "rgb(66,82,110)" }}> Backlog</div>
        </div>
        </Link>

        <Link href={'/activesprint'}>
        <div className={`${styles.webapp_item} d-flex align-items-center py-2`} style={{ "paddingLeft": "20px", "gap": "16px" }}>
          {/* <FaGgCircle /> */}
          <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor"><path d="M4 18h16.008C20 18 20 6 20 6H3.992C4 6 4 18 4 18zM2 5.994C2 4.893 2.898 4 3.99 4h16.02C21.108 4 22 4.895 22 5.994v12.012A1.997 1.997 0 0120.01 20H3.99A1.994 1.994 0 012 18.006V5.994z"></path><path d="M8 6v12h2V6zm6 0v12h2V6z"></path></g></svg>
          <div className='m-0' style={{ "fontSize": "14px", "fontWeight": "400", "color": "rgb(66,82,110)" }}> Active Sprints</div>
        </div>
        </Link>

        <div className={`${styles.webapp_item} d-flex align-items-center py-2`} style={{ "paddingLeft": "20px", "gap": "16px" }}>
          {/* <FaGgCircle /> */}
          <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor"><path d="M21 17H4.995C4.448 17 4 16.548 4 15.991V6a1 1 0 10-2 0v9.991A3.004 3.004 0 004.995 19H21a1 1 0 000-2zm-3-8v3a1 1 0 002 0V8a1 1 0 00-1-1h-4a1 1 0 000 2h3z"></path><path d="M13.293 13.707a1 1 0 001.414 0l4-4a1 1 0 10-1.414-1.414L14 11.586l-2.293-2.293a1 1 0 00-1.414 0l-4 4a1 1 0 001.414 1.414L11 11.414l2.293 2.293z"></path></g></svg>
          <div className='m-0' style={{ "fontSize": "14px", "fontWeight": "400", "color": "rgb(66,82,110)" }}> Reports</div>
        </div>

        <Link href={'/viewissue'}>
        <div className={`${styles.webapp_item} d-flex align-items-center py-2`} style={{ "paddingLeft": "20px", "gap": "16px" }}>
          {/* <FaGgCircle /> */}
          <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor" fillRule="evenodd"><path d="M5 12.991c0 .007 14.005.009 14.005.009C18.999 13 19 5.009 19 5.009 19 5.002 4.995 5 4.995 5 5.001 5 5 12.991 5 12.991zM3 5.01C3 3.899 3.893 3 4.995 3h14.01C20.107 3 21 3.902 21 5.009v7.982c0 1.11-.893 2.009-1.995 2.009H4.995A2.004 2.004 0 013 12.991V5.01zM19 19c-.005 1.105-.9 2-2.006 2H7.006A2.009 2.009 0 015 19h14zm1-3a2.002 2.002 0 01-1.994 2H5.994A2.003 2.003 0 014 16h16z" fillRule="nonzero"></path><path d="M10.674 11.331c.36.36.941.36 1.3 0l2.758-2.763a.92.92 0 00-1.301-1.298l-2.108 2.11-.755-.754a.92.92 0 00-1.3 1.3l1.406 1.405z"></path></g></svg>
          <div className='m-0' style={{ "fontSize": "14px", "fontWeight": "400", "color": "rgb(66,82,110)" }}> Issues</div>
        </div>
        </Link>

        <div className={`${styles.webapp_item} d-flex align-items-center py-2`} style={{ "paddingLeft": "20px", "gap": "16px" }}>
          {/* <FaGgCircle /> */}
          <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor" fillRule="evenodd"><path d="M5 17.991c0 .007 14.005.009 14.005.009-.006 0-.005-7.991-.005-7.991C19 10.002 4.995 10 4.995 10 5.001 10 5 17.991 5 17.991zM3 10.01C3 8.899 3.893 8 4.995 8h14.01C20.107 8 21 8.902 21 10.009v7.982c0 1.11-.893 2.009-1.995 2.009H4.995A2.004 2.004 0 013 17.991V10.01z"></path><path d="M7 8.335c0-.002 2.002-.002 2.002-.002C9 8.333 9 6.665 9 6.665c0 .002-2.002.002-2.002.002C7 6.667 7 8.335 7 8.335zm-2-1.67C5 5.745 5.898 5 6.998 5h2.004C10.106 5 11 5.749 11 6.665v1.67C11 9.255 10.102 10 9.002 10H6.998C5.894 10 5 9.251 5 8.335v-1.67zm10 1.67c0-.002 2.002-.002 2.002-.002C17 8.333 17 6.665 17 6.665c0 .002-2.002.002-2.002.002.002 0 .002 1.668.002 1.668zm-2-1.67C13 5.745 13.898 5 14.998 5h2.004C18.106 5 19 5.749 19 6.665v1.67c0 .92-.898 1.665-1.998 1.665h-2.004C13.894 10 13 9.251 13 8.335v-1.67z"></path></g></svg>
          <div className='m-0' style={{ "fontSize": "14px", "fontWeight": "400", "color": "rgb(66,82,110)" }}> Components</div>
        </div>
        
      </div>


      {/* development dropdown */}
      <div className='webapp-development d-flex align-items-baseline'>
      <div className='dropdown-icon'>
        <svg width="20" height="24" viewBox="0 0 24 24" role="presentation"><path d="M8.292 10.293a1.009 1.009 0 000 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 000-1.419.987.987 0 00-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 00-1.406 0z" fill="currentColor" fillRule="evenodd"></path></svg>
        </div>
        <div className='development-title d-flex flex-column ' style={{ "paddingLeft": "0px", }}>
          <h6 className='m-0' style={{ "fontSize": "11px", "fontWeight": "700", "color": "rgb(66,82,110)" }}> DEVELOPMENT</h6>
          {/* <p className='m-0 p-0' style={{ "fontSize": "12px", "fontWeight": "400", "color": "rgb(66,82,110)" }}>Board</p> */}
        </div>
      </div>
      <div className={`${styles.webapp_item} d-flex align-items-center py-2`} style={{ "paddingLeft": "20px", "gap": "16px" }}>
          {/* <FaGgCircle /> */}
          <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M14.155 4.055a1 1 0 00-1.271.62l-4.83 14.046a1 1 0 001.891.65l4.83-14.045a1 1 0 00-.62-1.271m-6.138 8.21l-2.58-2.501L8.236 7.05a.999.999 0 10-1.392-1.436l-3.54 3.432a1 1 0 000 1.436l3.32 3.219a1 1 0 101.393-1.436m12.219 1.568l-3.32-3.22a.999.999 0 10-1.393 1.437l2.58 2.5-2.799 2.715a.999.999 0 101.392 1.436l3.54-3.432a1 1 0 000-1.436" fill="currentColor" fillRule="evenodd"></path></svg>
          <div className='m-0' style={{ "fontSize": "14px", "fontWeight": "400", "color": "rgb(66,82,110)" }}> Code</div>
        </div>
        <div className={`${styles.webapp_item} d-flex align-items-center py-2`} style={{ "paddingLeft": "20px", "gap": "16px" }}>
          {/* <FaGgCircle /> */}
          <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor" fillRule="evenodd"><path d="M6 12h8v-2H6v2zM4 8.99C4 8.445 4.456 8 5.002 8h9.996C15.55 8 16 8.451 16 8.99V14H4V8.99z" fillRule="nonzero"></path><path d="M6 7.005C6 5.898 6.898 5 7.998 5h2.004C11.106 5 12 5.894 12 7.005V10H6V7.005zm4 0V7H7.999c.005 0 .002.003.002.005V8h2v-.995z"></path><path d="M4.5 17h13.994l1.002-3H4.14l.36 3zm-2.495-4.012A.862.862 0 012.883 12h18.393c.55 0 .857.417.681.944l-1.707 5.112c-.174.521-.758.944-1.315.944H3.725a1.149 1.149 0 01-1.118-.988l-.602-5.024z" fillRule="nonzero"></path></g></svg>
          <div className='m-0' style={{ "fontSize": "14px", "fontWeight": "400", "color": "rgb(66,82,110)" }}> Releases</div>
        </div>
        
    </div>
  )
}

export default Sidebar