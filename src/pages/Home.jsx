import React, { useState } from 'react'
import { CommentIcon,ShareIcon,ViewIcon, Dots, GifIcon, LikeIcon, ModeIcon, ReplyIcon, SaveIcon, StatsIcon } from '../assets/images/Icons'
import EmptyFoto from '../assets/images/empty-foto.jpg'
import Button from '../components/Button'
import Designsta from '../assets/images/designsta.png'
import Cloutex from "../assets/images/cloutex.png"
import Creative from "../assets/images/creative.png"
import Shashlik from "../assets/images/shashlik.png"
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
      <ul>
          {
            posts.map(item=>(
              <li className='p-5 border-b-[1px] border-[#D8D8D8] relative'> 
                <div className='flex space-x-[15px]'>
                  <img className='rounded-full h-[60px]' src={item.avatarIcon} alt='img' width={60} height={60}/>
                  <div>
                    <strong className='font-bold mr-[5px] text-[20px] leading-[26px]'>{item.name}</strong>
                    <span>{item.nic}</span>
                    <p className='mt-[5px] text-[18px] leading-[23px]'>{item.postDeck}</p>
                  </div>
                </div>
                <button className='absolute top-5 right-5'>
                  <Dots/>
                </button>
                {item.postImg ? <img className='rounded-[20px] mx-auto mt-5' src={item.postImg} alt='img' width={679} height={45} /> : ""}
                <div className='mt-[22px] flex items-center space-x-[100px] pl-[80px]'>
                  <button className='flex items-center space-x-[10px]'> 
                        <CommentIcon/>
                        <span className='font-semibold text-[16px] leading-[21px]'>{item.commentCount ? item.commentCount : ""}</span>
                  </button>
                  <button className='flex items-center space-x-[10px]'> 
                        <ReplyIcon/>
                        <span className='font-semibold text-[16px] leading-[21px]'>{item.replyCount ? item.replyCount : ""}</span>
                  </button>
                  <button className='flex items-center space-x-[10px]'> 
                        <LikeIcon/>
                        <span className='font-semibold text-[16px] leading-[21px]'>{item.likeCount ? item.likeCount : ""}</span>
                  </button>
                  <button className='flex items-center space-x-[10px]'> 
                        <ShareIcon/>
                        <span className='font-semibold text-[16px] leading-[21px]'>{item.shareCount ? item.shareCount : ""}</span>
                  </button>
                  <button className='flex items-center space-x-[10px]'> 
                        <ViewIcon/>
                        <span className='font-semibold text-[16px] leading-[21px]'>{item.viewCount ? item.viewCount: ""}</span>
                  </button>
                </div>
              </li>
            ))
          }
      </ul>
    </div>
  )
}

export default Home
