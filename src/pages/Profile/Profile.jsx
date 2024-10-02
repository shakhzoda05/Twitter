import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ModeIcon, Dots, Arrow, LocationIcon, LinkIcon, BallIcon, DataIcon} from '../../assets/images/Icons';
import ProfileImg from '../../assets/images/profileImg.png';
import Mushtariy from '../../assets/images/mushtariy.png';
import ShuhratbekImg from '../../assets/images/shuxratbek.png';
import BoburImg from "../../assets/images/bobur.png";
import { Link, Outlet } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("token"));
  
  return (
    <div className='w-[80%] flex'>
      <div className='w-[70%] border-r-[1px] border-slate-300 h-[100vh] overflow-y-auto'>
        <div className='py-[20px] border-b-[2px] pl-[31px] border-slate-300  flex items-center space-x-10'>
          <button onClick={() => navigate(-1)}>
            <Arrow />
          </button>
          <div className='flex flex-col'>
            <strong className=' font-bold text-[20px]' >{user.login}</strong>
            <span className='text-[16px] opacity-60 mt-[2px]'>1,700 Tweets</span>
          </div>
        </div>
        <div className='bg-white sticky z-40 top-0 flex items-center justify-between p-[20px] border-b-[1px] w-full border-slate-400'>
          <h2 className='font-bold text-[24px]'>Profile</h2>
          <button><ModeIcon /></button>
        </div>
        <div className='h-[280px] relative'>
          <img src={ProfileImg} alt="Profile img" width={910} height={280} />
          <div className='flex items-end justify-between px-[25px] -translate-y-[80px]'>
            <img src={BoburImg} alt="Avatar-img" width={150} height={150} />
            <button className='py-[10px] w-[120px] bg-transparent text-black text-[18px] font-bold border-[1px] border-slate-400 rounded-[50px]'>Edit Profile</button>
          </div>
          <div className='p-[25px] -mt-[85px]'>
          <strong className='text-[24px]'>{user.login}</strong>
          <p className='text-[14px] opacity-60'>@{user.login}</p>
          <p className='my-[15px] text-[18px]'>UX&UI designer at <span className='text-blue-500'>@abutechuz</span></p>
          <div className='flex items-center justify-between my-[28px] space-x-[8px]'>
           <div className='flex space-x-[8px]'>
           <LocationIcon/>
            <p className='text-[15px]  text-gray-400 font-normal'>Mashag’daman</p>
           </div>
           <div className='flex space-x-[8px]'>
           <LinkIcon/>
            <p className='text-[15px]  text-blue-400 font-normal'>t.me/boburjon_mavlonov</p>
           </div>
           <div className='flex space-x-[8px]'>
           <BallIcon/>
            <p className='text-[15px]  text-gray-400 font-normal'>Born November 24, 2000</p>
           </div>
           <div className='flex space-x-[8px]'>
           <DataIcon/>
            <p className='text-[15px]  text-gray-400 font-normal'>Joined May 2020</p>
           </div>

          </div>
          <div className='flex items-center space-x-[30px] mr-[27px]'>
            <div className='flex items-center gap-[2px]'>
              <strong className='text-[18px] text-[#000000]'>67</strong>
              <p>Following</p>
            </div>
            <div className='flex items-center gap-[2px]'>
              <strong className='text-[18px] text-[#000000]'>47</strong>
              <p> Followers</p>
            </div>
          </div>
          </div>
        </div>
       <div>
       <ul className='mt-[295px] flex items-center justify-between px-[25px]'>
          <li>
            <Link className='text-[18px] font-bold' to={""}></Link>
          </li>
          <li>
            <Link className='text-[18px] font-bold' to={"tweets-replies"}>Tweets & replies</Link>
          </li>
          <li>
            <Link className='text-[18px] font-bold' to={"media"}>Media</Link>
          </li>
          <li>
            <Link className='text-[18px] font-bold' to={"likes"}>Likes</Link>
          </li>
        </ul>
        <Outlet />
       </div>
      </div>
      
    
<div  className='w-[30%] m-[20px] relative'> 
<input className='w-full py-[15px] px-[30px] rounded-[31px] bg-[#EFF3F4] border-none overflow-none '   required type="search" placeholder='Search Twitter'   />
<div className='w-[373px] bg-[#F7F9F9] mt-[40px] '>
<strong className='pt-[20px] pl-[15px] mb-[30px]'>You might like</strong>
<div className='flex items-center space-x-4 mt-[35px]'>
<div>
<img className='pl-[15px]' src={Mushtariy} alt="" width={60} height={60} />
</div>
<div>
<strong>Mushtariy</strong>
<p>@Mushtar565266</p>
</div>
<button className='text-white p-[10px] rounded-[50px] bg-black text-[14px] font-bold'>Follow</button>
</div>
<div className='flex items-center space-x-6 mt-[35px]'>
<div>
<img className='pl-[15px]' src={ShuhratbekImg} alt="" width={60} height={60} />
</div>
<div>
<strong>Shuhratbek</strong>
<p>@mrshukhrat</p>
</div>
<button className='text-white p-[10px] rounded-[50px] bg-black text-[14px] font-bold'>Follow</button>
</div>
</div>
<div className='w-[373px] bg-[#F7F9F9] mt-[20px]   '>
<h1 className='pl-[17px] font-bold text-[24px] mb-[20px]'>Trends for you</h1>
<p className='text-[#393B41] text-[16px] pl-[17px] mb-[3px]  font-regular'>Trending in Germany</p>
<h2 className='text-[20px]  pl-[17px] font-semibold mb-[3px]  '>Revolution</h2>
<span className='text-[#393B41] text-[16px]  pl-[17px] font-regular'>50.4K Tweets</span>

<div className='absolute bottom-[20px]  top-[135px]  right-[16px] '>
<Dots/>
</div>
<p className='text-[#393B41] text-[16px] pl-[17px] mb-[3px]  font-regular'>Trending in Germany</p>
<h2 className='text-[20px]  pl-[17px] font-semibold mb-[3px]  '>Revolution</h2>
<span className='text-[#393B41] text-[16px]  pl-[17px] font-regular'>50.4K Tweets</span>

<div className='absolute bottom-[20px]  top-[135px]  right-[16px]'>
<Dots/>
</div>
</div>

<button className='text-[#1DA1F2] pt-[10px]'>Show more</button>
    </div>

    </div>
  );
}

export default Profile 