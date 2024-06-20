import React, { useState } from 'react'
import { IoChatbubbleEllipses } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import Avatar from "../components/Avatar"
import { useSelector } from 'react-redux';
import EdituserDetail from './EdituserDetail';
import { FiArrowUpLeft } from "react-icons/fi";
import Search from './Search';

const Sidebar = () => {
    const user = useSelector((state)=>state.user)
    const [edituseropen, setEdituseropen] = useState(false)
    const [Alluser, setAlluser] = useState([])
    const [opensearchuser, setOpensearchuser] = useState(false)
  return (
    <div className='w-full h-full grid grid-cols-[48px,1fr]'>
        <div className='bg-slate-100 w-12 h-full rounded-tr-lg rounded-br-lg py-5 text-slate-600 flex flex-col justify-between'>
            <div>
            <NavLink className={({isActive})=> `cursor-pointer w-12 h-12 flex justify-center items-center hover:bg-slate-200 rounded ${isActive && "bg-slate-200"}`} title='Chat'>
            <IoChatbubbleEllipses
            size={25}/>
            </NavLink>

            <div onClick={()=>setOpensearchuser(true)} title='Add user' className='cursor-pointer w-12 h-12 flex justify-center items-center hover:bg-slate-200 rounded'>
             <FaUserPlus size={25}/>
            </div>
            </div>

            <div className='flex flex-col items-center'>
                <button className='mx-auto' title={user?.name} onClick={()=>setEdituseropen(true)}>
                    <Avatar
                    width={40} height={40} name={user.name} imageUrl={user?.profilePic} userId={user._id}/>
                </button>
            <button title='Logout' className='cursor-pointer w-12 h-12 flex justify-center items-center hover:bg-slate-200 rounded'>
                <IoLogOutOutline size={25}/>
            </button>
            </div>
        </div>


        <div className='w-full'>
            <div className='h-16 flex items-center'>
            <h2 className='text-2xl font-bold p-4 text-slate-800'>Message</h2>
            </div>
            <div className='bg-slate-200 p-[0.5px]'></div>
            <div className="h-[calc(100vh-65px)] overflow-x-hidden overflow-y-auto scroll">
                {
                    Alluser.length === 0 && (
                        <div className='mt-12'>
                            <div className='flex justify-center items-center text-slate-500 my-4'>
                                <FiArrowUpLeft size={50}/>
                            </div>
                            <p className='text-slate-400 text-lg text-center '>Explore users to start a convarsation with them</p>
                        </div>
                    )
                }
            </div>
        </div>

{
    edituseropen && <EdituserDetail onClose={()=>setEdituseropen(false)} user={user}/>
}

{
    opensearchuser && (
        <Search onClose={()=>setOpensearchuser(false)}/>
    )
}


    </div>
  )
}

export default Sidebar