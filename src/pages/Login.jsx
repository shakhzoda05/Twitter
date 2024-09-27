import React, { useContext, useState } from 'react'
import Logo from '../assets/images/twitter-logo.svg'
import LoginInput from '../components/LoginInput'
import Button from '../components/Button'
import {Link} from 'react-router-dom'
import {Context} from '../context/AuthContext'
import LoadingIcon from '../assets/images/loading.png'
import toast from 'react-hot-toast'
import toas,{Toaster} from 'react-hot-toast'


function Login() {
  const {setToken}=useContext(Context)
const [isLoading,setIsLoading]=useState(false)


function handleLoginSubmit(e){
  e.preventDefault()
  const data={
    login:e.target.login.value,
    password:e.target.password.value
  }
  if(data.login=="Shaxzoda" && data.password=="777"){
    toast.success("Welcome to Twitter "+data.login)
setIsLoading(true)
setTimeout(()=>setToken(data),3000)
  }
  else{
    setIsLoading(true)
    setTimeout(()=>{
      toast.error("User is not found, try again later!")
      setIsLoading(false)
    },2000)
  }
}
  return (

    <form onSubmit={handleLoginSubmit} className='w-[450px] mx-auto mt-[60px]' autoComplete='off'>
      <Toaster position="top-center"reverseOrder={false}/>
      <img src={Logo} alt='image' width={50} height={41}/>
      <h2 className='text-[42px] leading-[49px] font-black my-[36px]'>Log in to Twitter</h2>
      <LoginInput placeholder={"Phone number, email address"} name={"login"} type={"text"} extraStyle={"mb-[25px]"}/>
      <LoginInput placeholder={"Password"} name={"password"} type={"password"} extraStyle={"mb-[25px]"}/>
      <Button type={"submit"}>
      {isLoading ? <img className='scale-[3] mx-auto' src={LoadingIcon} alt='img' width={20}/>:"Log In"}
      </Button>
      <div className='flex justify-between items-center mt-10'>
         <p className='text-[18px] text-[#1DA1F2] font-normal leading-[23px]'>Forgot password?</p>
         <Link to={'/sign-up'} className='text-[18px] text-[#1DA1F2] font-normal leading-[23px]'>Sign up to Twitter</Link>
      </div>
    </form>
  )
}

export default Login
