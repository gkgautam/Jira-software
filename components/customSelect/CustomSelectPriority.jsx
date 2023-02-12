import React, { useState } from 'react';
import Select from 'react-select';
import styles from './CustomSelect.module.scss';
import mediumLogo from '../../public/jiraImages/medium.svg';
import highestLogo from '../../public/jiraImages/highest.svg';
import lowLogo from '../../public/jiraImages/low.svg';
import lowestLogo from '../../public/jiraImages/lowest.svg';
import highLogo from '../../public/jiraImages/high.svg';
import Image from 'next/image';

function CustomSelectPriority(props) {
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
  { value: 'medium',index:0, label:
  <div className='selectField d-flex align-items-center px-1 ps-2'>
    <Image className='' src={mediumLogo} width={20} height={20} alt="Bug logo" />
    <p className='m-0 ps-2'>MEDIUM</p>
  </div>},
  { value: 'lowest',index:1, label:
  <div className='selectField d-flex align-items-center px-1 ps-2'>
    <Image className='' src={lowestLogo} width={20} height={20} alt="Task logo" />
    <p className='m-0 ps-2'>LOWEST</p>
  </div> },
  { value: 'low',index:2, label:
  <div className='selectField d-flex align-items-center px-1 ps-2'>
    <Image className='' src={lowLogo} width={20} height={20} alt="Task logo" />
    <p className='m-0 ps-2'>LOW</p>
  </div> },
  { value: 'high',index:3, label:
  <div className='selectField d-flex align-items-center px-1 ps-2'>
    <Image className='' src={highLogo} width={20} height={20} alt="Task logo" />
    <p className='m-0 ps-2'>HIGH</p>
  </div>
},
{ value: 'highest',index:4, label:
  <div className='selectField d-flex align-items-center px-1 ps-2'>
    <Image className='' src={highestLogo} width={20} height={20} alt="Task logo" />
    <p className='m-0 ps-2'>HIGHEST</p>
  </div>
}
]
const [dropdownOptions, setDropdownOptions] = useState(options[0].value);
  return (
    <>
      <div className={`${styles.selector}`}>
        <div className={`${styles.options}`}>
            <Select value={dropdownOptions} name={props.name} options={options} onChange={(event)=>{
              setDropdownOptions(options[event.index])
              props.setFormData({...props.formdata,[props.name]:event.value})
            }} />
        </div>
      </div>
    </>
  )
}

export default CustomSelectPriority