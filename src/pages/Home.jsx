import React, { useState } from 'react'
import { GifIcon, ModeIcon, SaveIcon, StatsIcon } from '../assets/images/Icons'
import EmptyFoto from '../assets/images/empty-foto.jpg'
import Button from '../components/Button'
// import SmileIcon from '../assets/images/smileIcon.svg'
// import DataIcon from '../assets/images/dataIcon.svg'


function Home() {
  const [inputValue, setInputValue]=useState(null)
  return (
    <div className='border-r-[1px] border-[#D8D8D8] h-[100vh] overflow-y-auto'>
      <div className='flex items-center justify-between p-5 border-b-[1px] border-[#D8D8D8]'>
        <h2 className='font-bold text-[24px] leading-[31px]'>Home</h2>
          <button>
            <ModeIcon/>
          </button>
      </div>
      <form className='relative p-5 border-b-[1px] border-[#D8D8D8]'>
        <div className='flex items-center space-x-[15px]'>
            <img className='rounded-full' src={EmptyFoto} alt='img' width={60} height={60} />
            <input onChange={(e)=> setInputValue(e.target.value)} className='w-[80%] text-[22px] leading-[29px] placeholder:text-[#828282] p-1 outline-none font-semibold' type="text" placeholder='What’s happening' name='tweetData' />
        </div>
        <div className='flex items-center space-x-5 pl-[77px] mt-8 mb-[26px]'>
          <label>
            <input className='hidden' type='file'/>
            <SaveIcon/>
          </label>
          <label>
            <input className='hidden' type='file'/>
            <GifIcon/>
          </label>
          <label>
            <input className='hidden' type='file'/>
            <StatsIcon/>
          </label>
        </div>
        <Button type={"submit"} extraStyle={`w-[108px] absolute right-[18px] bottom-[5px] duration-300 ${inputValue} ? "" : "cursor-not-allowed opasity-50 hover:opasity-50"}`}>Tweet</Button>
      </form>
    </div>
  )
}

export default Home
