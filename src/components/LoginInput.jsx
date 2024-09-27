import React from 'react'

function LoginInput({placeholder,name,type,extraStyle}) {
  return (
   <input className={`py-[23px] outline-none pl-5 text-[18px] leading-[23px] w-full border-[1px] rounded-[6px] border-slate-400 ${extraStyle}`} type={type} required placeholder={placeholder} name={name}/>
  )
}

export default LoginInput
