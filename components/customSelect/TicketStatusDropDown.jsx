import React, { useState } from 'react';
import Select from 'react-select';
import styles from './CustomSelect.module.scss';
import buglogo from '../../public/jiraImages/Buglogo.svg';
import storyLogo from '../../public/jiraImages/storylogo.svg';
import taskLogo from '../../public/jiraImages/Tasklogo.svg';
import Image from 'next/image';

function TicketStatusDropDown(props) {
const options = [
  { value: 'indevelopment', index:0, label:'To Do'
  },
  { value: 'blocked', index:0, label:'BLOCKED'
  },
  { value: 'inprogress', index:0, label:'IN PROGRESS'
  },
  { value: 'por', index:0, label:'POR'
  },
  { value: 'qa', index:0, label:'QA'
  },
  { value: 'UAT', index:0, label:'UAT'
  },
  { value: 'Done', index:0, label:'DONE'
  },
  { value: 'Wontdo', index:0, label:'WONT DO'
  }
]

const [dropdownOptions, setDropdownOptions] = useState(options[0].value);
  return (
    <>
      <div className={`${styles.selector} ticket_status_selector`}>
        <div className={`${styles.options}`}>
            <Select  options={options} onChange={(event)=>{
              // alert(dropdownOptions);
              setDropdownOptions(options[event.index])
              props.setTicketStatus(event.value)
            }} />
        </div>
      </div>
    </>
  )
}

export default TicketStatusDropDown