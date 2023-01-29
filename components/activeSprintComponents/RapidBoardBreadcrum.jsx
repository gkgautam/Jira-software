import React from 'react';
import Image from 'next/image';
import jclogo from '../../public/jiraImages/jclg.png';
import storyLogo from '../../public/jiraImages/storylogo.svg';


function RapidBoardBreadcrum({projectID}) {
  return (
    <>
        <div className='breadcrum-content'>
            <p className='p-0 m-0' style={{"fontSize":"14px","fontWeight":"400","color":"#6B778C"}}>Projects /  <Image src={jclogo} width={12} height={12} alt="jclogo" /> Project RECHARGE / Web App {projectID ? <>/<Image width={12} height={12} src={storyLogo} alt="Storylogo" /> RECHARGE-{projectID.toString().padStart(4,0)}</> : ''}   </p>
        </div>
    </>
  )
}

export default RapidBoardBreadcrum