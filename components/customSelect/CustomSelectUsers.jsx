import React, { useState } from 'react';
import Select from 'react-select';
import styles from './CustomSelect.module.scss';
import buglogo from '../../public/jiraImages/Buglogo.svg';
import storyLogo from '../../public/jiraImages/storylogo.svg';
import taskLogo from '../../public/jiraImages/Tasklogo.svg';
import Image from 'next/image';

function CustomSelectUsers() {
  // const optionsArr = [<li className={`list-group-item ${styles.option_item} p-0 m-0`}>
  //   <div className='selectField d-flex align-items-center p-1 ps-2'>
  //     <Image className='' src={buglogo} width={20} height={20} alt="Bug logo" />
  //     <p className='m-0 ps-2'>BUG</p>
  //   </div>
  // </li>, <li className={`list-group-item ${styles.option_item} p-0 m-0`}>
  //   <div className='selectField d-flex align-items-center p-1 ps-2'>
  //     <Image className='' src={storyLogo} width={20} height={20} alt="Task logo" />
  //     <p className='m-0 ps-2'>STORY</p>
  //   </div>
  // </li>, <li className={`list-group-item ${styles.option_item} p-0 m-0`}>
  //   <div className='selectField d-flex align-items-center p-1 ps-2'>
  //     <Image className='' src={taskLogo} width={20} height={20} alt="Task logo" />
  //     <p className='m-0 ps-2'>TASK</p>
  //   </div>
  // </li>];
const options = [
  { value: 'bug', label:
  <div className='selectField d-flex align-items-center px-1 ps-2'>
    <Image className='' src={buglogo} width={20} height={20} alt="Bug logo" />
    <p className='m-0 ps-2'>GOVIND</p>
  </div>},
  { value: 'story', label:
  <div className='selectField d-flex align-items-center px-1 ps-2'>
    <Image className='' src={storyLogo} width={20} height={20} alt="Task logo" />
    <p className='m-0 ps-2'>BILAL</p>
  </div> },
  { value: 'task', label:
  <div className='selectField d-flex align-items-center px-1 ps-2'>
    <Image className='' src={taskLogo} width={20} height={20} alt="Task logo" />
    <p className='m-0 ps-2'>PRAMOD</p>
  </div>
},
{ value: 'bug', label:
  <div className='selectField d-flex align-items-center px-1 ps-2'>
    <Image className='' src={buglogo} width={20} height={20} alt="Bug logo" />
    <p className='m-0 ps-2'>SUDEEP</p>
  </div>}
]
  // const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className={`${styles.selector}`}>
        {/* <div className={`${styles.selectField} d-flex align-items-center p-1 ps-2 mb-1`}>
          <Image className='' src={taskLogo} width={20} height={20} alt="Task logo" />
          <p className='m-0 ps-2'>TASK</p>
        </div> */}
        <div className={`${styles.options}`}>
          {/* <ul className='p-0 m-0'> */}
            {/* <li className={`list-group-item ${styles.option_item} p-0 m-0`}>
              <div className='selectField d-flex align-items-center p-1 ps-2'>
                <Image className='' src={buglogo} width={20} height={20} alt="Bug logo" />
                <p className='m-0 ps-2'>BUG</p>
              </div>
            </li>
            <li className={`list-group-item ${styles.option_item} p-0 m-0`}>
              <div className='selectField d-flex align-items-center p-1 ps-2'>
                <Image className='' src={storyLogo} width={20} height={20} alt="Task logo" />
                <p className='m-0 ps-2'>STORY</p>
              </div>
            </li>
            <li className={`list-group-item ${styles.option_item} p-0 m-0`}>
              <div className='selectField d-flex align-items-center p-1 ps-2'>
                <Image className='' src={taskLogo} width={20} height={20} alt="Task logo" />
                <p className='m-0 ps-2'>TASK</p>
              </div>
            </li> */}


            {/* {
              optionsArr.map((option)=>{
                return option
              })
            } */}

            <Select defaultValue={options[2]} options={options} />

          {/* </ul> */}
          
        </div>
      </div>
    </>
  )
}

export default CustomSelectUsers