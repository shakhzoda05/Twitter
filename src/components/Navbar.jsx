import React from 'react'
import Logo from "../assets/images/twitter-logo.svg"
import {Link,NavLink} from 'react-router-dom'
import { HomeIcon,ExploreIcon,NotificationIcon,MessageIcon,BookmarksIcon,ListIcon,ProfileIcon,MoreIcon, Dots } from '../assets/images/Icons'
import Button from '../components/Button'
import EmptyFoto from '../assets/images/empty-foto.jpg'

function Navbar() {
    const user =JSON.parse(localStorage.getItem("token"))
     const navbarList=[
         {
             id:1,
             icon:<HomeIcon/>,
             title:"Home",
             path:"/"
         },
         {
             id:2,
             icon:<ExploreIcon/>,
             title:"Explore",
             path:"/explore"
         },
         {
             id:3,
             icon:<NotificationIcon/>,
             title:"Notifications",
             path:"/notifications"
         },
         {
             id:4,
             icon:<MessageIcon/>,
             title:"Messages",
             path:"/messages"
         },
         {
             id:5,
             icon:<BookmarksIcon/>,
             title:"Bookmarks",
             path:"/bookmarks"
         },
         {
             id:6,
             icon:<ListIcon/>,
             title:"Lists",
             path:"/lists"
         },
         {
             id:7,
             icon:<ProfileIcon/>,
             title:"Profile",
             path:"/profile"
         },
         {
             id:8,
             icon:<MoreIcon/>,
             title:"More",
             path:"/more"
         },
    ]




  return (
    <div className='w-[25%] relative  h-[100vh] overflow-y-auto pt-[31px] pl-[70px] pr-[16px]'>
    <Link to={"/"}>
    <img src={Logo} alt='img' width={40} height={33}/>
    </Link>
    <div className='mt-[49px] space-y-[30px]'>
        {navbarList.map(item=>(
            <NavLink className={"flex items-center font-semibold text-[18px] leading-[23px] space-x-5"} key={item.id} to={item.path}>
                {item.icon}
                <span>{item.title}</span>
            </NavLink>
        ))}
    </div>
        <Button type={"button"} extraStyle={"py-[15px] w-[230px] mt-[30px]"}>Tweet</Button>
        <div className='flex items-center space-x-[10px] absolute bottom-1'>
           <img className='rounded-full' src={EmptyFoto} alt='img' width={50} height={50}/>
           <div className='flex items-center justify-between space-x-[42px] w-[80%]'>
            <div>
                <strong className='font-semibold text-[16px]'>Shakhzoda</strong>
                <p className='text-[16px] opasity-60'>ShakhzodaDev@gmail.com</p>
            </div>
            <button>
                <Dots/>
            </button>
           </div>
        </div>
    </div>
  )
}

export default Navbar
