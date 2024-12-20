import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmpDashboard = () => {
  return (
    <>
      <div className='bg-black h-screen p-4'>
        <Header/>
        <TaskListNumber/>
        <TaskList/>
      </div>
    </>
  )
}

export default EmpDashboard
