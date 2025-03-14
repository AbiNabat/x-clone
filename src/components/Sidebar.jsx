import React from 'react';
import {FaHome} from "react-icons/fa";
import Link from "next/link";
import {BsTwitterX} from "react-icons/bs";
import SignUp from "@/components/SignUp";
import Profile from "@/components/Profile";

const Sidebar = () => {
    return (
        <div className='flex flex-col p-3 justify-between h-screen'>
            <div className='flex flex-col gap-4 p-3'>
            <Link href='/'>

                <BsTwitterX className='w-16 h-16 cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200' />
            </Link>
            <Link href='/' className='flex items-center justify-center hover:bg-gray-100 rounded-full transition-all duration-200'>
                <FaHome className='w-7 h-7' />
                <span className='font-bold text-2xl hidden xl:inline'>Home</span>
            </Link>
            <SignUp/>
            </div>
            <Profile  />

        </div>
    );
};

export default Sidebar;