import React, { useState } from 'react';
import Select from 'react-select';
import styles from './CustomSelect.module.scss';
import buglogo from '../../public/jiraImages/Buglogo.svg';
import storyLogo from '../../public/jiraImages/storylogo.svg';
import taskLogo from '../../public/jiraImages/Tasklogo.svg';
import Image from 'next/image';

function CustomSelectUsers(props) {
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
//   const [st1, setSt1] = useState('');
// const dropdowntest = (event)=>{
// console.log('tesfunc', event.target.value);
// setSt1({[event.target.name]:event.target.value});
// console.log('hookval',st1);
// }
const options = [
  { value: 'govind',index:0, label:
  <div className='selectField d-flex align-items-center px-1 ps-2'>
    <Image className='' src={buglogo} width={20} height={20} alt="Bug logo" />
    <p className='m-0 ps-2'>GOVIND</p>
  </div>},
  { value: 'bilal', index:1, label:
  <div className='selectField d-flex align-items-center px-1 ps-2'>
    <Image className='' src={storyLogo} width={20} height={20} alt="Task logo" />
    <p className='m-0 ps-2'>BILAL</p>
  </div> },
  { value: 'pramod', index:2, label:
  <div className='selectField d-flex align-items-center px-1 ps-2'>
    <Image className='' src={taskLogo} width={20} height={20} alt="Task logo" />
    <p className='m-0 ps-2'>PRAMOD</p>
  </div>
},
{ value: 'sudeep', index:3, label:
  <div className='selectField d-flex align-items-center px-1 ps-2'>
    <Image className='' src={buglogo} width={20} height={20} alt="Bug logo" />
    <p className='m-0 ps-2'>SUDEEP</p>
  </div>}
]
const [dropdownOptions, setDropdownOptions] = useState(options[0]);
  return (
    <>
      <div className={`${styles.selector}`}>
        <div className={`${styles.options}`}>
            <Select value={dropdownOptions} name={props.name} options={options} onChange={(event)=>{
              setDropdownOptions(options[event.index])
            }} />
        </div>
      </div>
    </>
  )
}

export default CustomSelectUsers