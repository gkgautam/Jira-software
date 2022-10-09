import React from 'react'
import IssueGroups from './IssueGroups'
import SprintHeader from './SprintHeader'
import SprintOperations from './SprintOperations'
import Story from './Story'

function SprintContent() {
  return (
    <>
        <SprintHeader/>
        <SprintOperations/>
        <IssueGroups/>
        <Story/>
        <Story/>
        <Story/>
        <Story/>

    </>
  )
}

export default SprintContent