"use client"
import React from 'react';
import {useSession} from "next-auth/react";
const Profile = () => {
    const {data: session} = useSession();
    return (
        <>
            {session && (
                <div className='text-gray-700 text-sm flex items-center justify-center cursor-pointer p-3 hover:bg-gray-200 transition duration-200'>
                    <img src={session.user.image} alt="profile picture" className='h-10 w-10 rounded-full xl:mr-2' />
                    <div className='hidden sm:inline'>
                        <h4>{session.user.name}</h4>
                        <p>{session.user.username}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Profile;