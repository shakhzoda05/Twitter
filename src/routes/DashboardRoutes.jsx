import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Profile,Home } from '../pages'

function DashboardRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
  )
}

export default DashboardRoutes
