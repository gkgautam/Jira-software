import React from 'react';
import Image from 'next/image';
import profileimg from '../../../public/jiraImages/react-logo.png';

function Sidebar() {
  return (
    <div className='sidebar-secondary col-9 p-0 m-0' style={{"backgroundColor":"rgb(244 245 247)"}}>
      <div className='project-name-container d-flex justify-content-around align-items-center mx-3 mt-3 px-2'>
        <div className='project-avatar'>
        <div className={`project-logo mt-1`} >
                    <Image src={profileimg} alt="profile-image" width={40} height={40} style={{ "borderRadius": "50%" }} />
                </div>
        </div>
        <div className='project-speification'>
          <h6 className='m-0' style={{"color":"rgb(66 82 110)","fontSize":"15px"}}>React Jira Project</h6>
          <div className='project-type'>
          <p className='m-0' style={{"color":"rgb(94 108 132)","fontSize":"13px"}}>software project</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar