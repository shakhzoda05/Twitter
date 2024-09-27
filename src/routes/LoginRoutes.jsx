import React from 'react'
import {Login,Register} from '../pages'
import { Route, Routes } from 'react-router-dom'

function LoginRoutes() {
  return (
    <Routes>
       <Route path='/' element={<Login/>} />
       <Route path='/sign-up' element={<Register/>}/>
    </Routes>
  )
}

export default LoginRoutes
