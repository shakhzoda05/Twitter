import React from 'react'

function Button({children,type,extraStyle}) {
  return (
   <button className={`p-[18px] font-bold text-[18px] leading-[23px] text-white bg-[#1DA1F2] w-full rounded-[76px] hover:bg-blue-400 shadow-lg ${extraStyle}`} type={type}>
    {children}
    </button>
  )
}

export default Button
