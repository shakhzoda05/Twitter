import React, { useState } from 'react'
import { CommentIcon,ShareIcon,ViewIcon, Dots, GifIcon, LikeIcon, ModeIcon, ReplyIcon, SaveIcon, StatsIcon } from '../assets/images/Icons'
import EmptyFoto from '../assets/images/empty-foto.jpg'
import Button from '../components/Button'
import Designsta from '../assets/images/designsta.png'
import Cloutex from "../assets/images/cloutex.png"
import Creative from "../assets/images/creative.png"
import Shashlik from "../assets/images/shashlik.png"
import PostItem from '../components/PostItem'
// import SmileIcon from '../assets/images/smileIcon.svg'
// import DataIcon from '../assets/images/dataIcon.svg'


function Home() {
  const [inputValue, setInputValue]=useState(null)
  const [posts,setPosts]=useState([
    {
      id:1,
      avatarIcon:Designsta,
      name:"Designsta",
      nic:"@inner · 25m",
      postDeck:"Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",
      commentCount:"10",
      replyCount:"1",
      likeCount:"8",
      shareCount:null,
      viewCount:null,
      postImg:null
    },
    {
      id:2,
      avatarIcon:Cloutex,
      name:"cloutexhibition",
      nic:"@RajLahoti · 22m",
      postDeck:"YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.",
      commentCount:null,
      replyCount:"5",
      likeCount:"9",
      postImg:null

    },
    {
      id:3,
      avatarIcon:Creative,
      name:"CreativePhoto",
      nic:"@cloutexhibition · 1h",
      postDeck:"Обетда..... Кечиринглар",
      commentCount:"10",
      replyCount:"1",
      likeCount:"8",
      postImg:Shashlik,

    }
  ])
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
        <Button type={inputValue ?"submit":"button"} extraStyle={`w-[100px] absolute right-[18px] bottom-[5px] duration-300 ${inputValue} ? "" : "cursor-not-allowed opasity-50 hover:opasity-40"}`}>Tweet</Button>
      </form>
      <ul> { posts.map(item=><PostItem key={item.id} item={item} />)}</ul>
    </div>
  )
}

export default Home
