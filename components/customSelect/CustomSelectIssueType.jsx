import React, { useState } from 'react';
import Select from 'react-select';
import styles from './CustomSelect.module.scss';
import buglogo from '../../public/jiraImages/Buglogo.svg';
import storyLogo from '../../public/jiraImages/storylogo.svg';
import taskLogo from '../../public/jiraImages/Tasklogo.svg';
import Image from 'next/image';

function CustomSelectIssueType(props) {
const options = [
  { value: 'bug', index:0, label:
  <div className='selectField d-flex align-items-center px-1 ps-2'>
    <Image className='' src={buglogo} width={20} height={20} alt="Bug logo" />
    <p className='m-0 ps-2'>BUG</p>
  </div>},
  { value: 'story', index:1, label:
  <div className='selectField d-flex align-items-center px-1 ps-2'>
    <Image className='' src={storyLogo} width={20} height={20} alt="Task logo" />
    <p className='m-0 ps-2'>STORY</p>
  </div> },
  { value: 'task', index:2, label:
  <div className='selectField d-flex align-items-center px-1 ps-2'>
    <Image className='' src={taskLogo} width={20} height={20} alt="Task logo" />
    <p className='m-0 ps-2'>TASK</p>
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

export default CustomSelectIssueType