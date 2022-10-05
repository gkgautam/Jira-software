import React from 'react';
import Image from 'next/image';
import profileimg from '../../../public/jiraImages/react-logo.png';
import { FaGgCircle } from "react-icons/fa";
function Sidebar() {
  return (
    // this division is for project name box
    <div className='sidebar-secondary col-9 p-0 px-3 m-0' style={{"backgroundColor":"rgb(244 245 247)"}}>
      <div className='project-name-container d-flex justify-content-around align-items-center my-3 px-2'>
        <div className='project-avatar'>
        <div className={`project-logo mt-1`} >
                    <Image src={profileimg} alt="profile-image" width={40} height={40} style={{ "borderRadius": "50%" }} />
                </div>
        </div>
        <div className='project-speification'>
          <h6 className='m-0' style={{"color":"rgb(66 82 110)","fontSize":"15px"}}>React Jira Project</h6>
          <div className='project-type'>
          <p className='m-0' style={{"color":"rgb(94 108 132)","fontSize":"13px"}}>Software Project</p>
          </div>
        </div>
      </div>

{/* webapp board section */}
<div className='webapp-board-section'>
<div className='webapp-title d-flex align-items-center' style={{"paddingLeft":"20px","gap":"16px"}}>
<FaGgCircle/>
<h6 className='m-0'> Web App</h6>
</div>
</div>
</div>
  )
}

export default Sidebar