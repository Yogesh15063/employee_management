import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = () => {
  return (
    <div className='h-screen p-4'>
     <Header/>
     <CreateTask/>
     <AllTask/>
    </div>
  )
}

export default AdminDashboard
