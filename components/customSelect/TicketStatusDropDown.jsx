import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import styles from './CustomSelect.module.scss';

function TicketStatusDropDown(props) {
const options = [
  { value: 'todo', index:0, label:'To Do'
  },
  { value: 'blocked', index:1, label:'BLOCKED'
  },
  { value: 'inprogress', index:2, label:'IN PROGRESS'
  },
  { value: 'por', index:3, label:'POR'
  },
  { value: 'qa', index:4, label:'QA'
  },
  { value: 'UAT', index:5, label:'UAT'
  },
  { value: 'Done', index:6, label:'DONE'
  },
  { value: 'Wontdo', index:7, label:'WONT DO'
  }
]
const [dropdownOptions, setDropdownOptions] = useState(props.ticketStatus);
  return (
    <>
      <div className={`${styles.selector} ticket_status_selector`}>
        <div className={`${styles.options}`}>
            <Select value={dropdownOptions} options={options} onChange={(event)=>{
              setDropdownOptions(options[event.index])
              props.setTicketStatus(event.value)
              props.updateTicketChanges();
            }} />
        </div>
      </div>
    </>
  )
}

export default TicketStatusDropDown