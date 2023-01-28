import React from 'react'
import IssueGroups from './IssueGroups'
import SprintHeader from './SprintHeader'
import SprintOperations from './SprintOperations'
import Story from './Story'



function SprintContent(props) {
  console.log('sprintcontent',props.sprintcontent);
  return (
    <>
        <SprintHeader/>
        <SprintOperations/>
        <IssueGroups/>
        {/* <Story/>
        <Story/>
        <Story/>
        <Story/> */}

        {
          props.sprintcontent.map((item)=>{
            return (<>
              <Story storydata = {item}/>
            </>)
          })
        }

    </>
  )
}

export default SprintContent