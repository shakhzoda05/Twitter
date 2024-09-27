import React, { useState } from 'react'
import Logo from '../assets/images/twitter-logo.svg'
import LoginInput from '../components/LoginInput'
import Button from '../components/Button'
import {Link} from 'react-router-dom'
import LoadingIcon from '../assets/images/loading.png'
import toast from 'react-hot-toast'
import toas,{Toaster} from 'react-hot-toast'



function Register() {
  const [isLoading,setIsLoading]=useState(false)

  function handleRegisterSubmit(e){
    e.preventDefault()
  const data={
    name:e.target.name.value,
    phone:e.target.tel.value
  }
} 
  return (
       <form onSubmit={handleRegisterSubmit} className='w-[670px] mx-auto mt-[60px]' autoComplete='off'>
      <Toaster position="top-center"reverseOrder={false}/>
      <img className='mx-auto' src={Logo} alt='image' width={40} height={30}/>
      <h2 className='text-[30px] leading-[39px] font-bold my-[35px]'>Create an account</h2>
      <LoginInput placeholder={"Name"} name={"login"} type={"text"} extraStyle={"mb-[25px]"}/>
      <LoginInput placeholder={"Phone number"} name={"password"} type={"tel"} extraStyle={"mb-[25px]"}/>
    
      <div className='mt-10'>
         <h3 className='text-[18px] font-bold leading-[23px] mb-[10px]'>Date of birth</h3>
         <p className='text-[16px] leading-[25px] text-[#272626] opasity-60'>Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.</p>
      </div>
      <Button extraStyle={"h-[59px] mt-[64px]"} type={"submit"}>
      {isLoading ? <img className='scale-[3] mx-auto ' src={LoadingIcon} alt='img' width={20}/>:"Next"}
      </Button>
    </form>
  )
}

export default Register
