"use client"
import React from 'react';
import {signIn, signOut, useSession} from "next-auth/react";

const SignUp = () => {
    const {data: session} = useSession();
    return (
        <>
            {session ? (

                <button className='bg-blue-400 text-white font-bold rounded-full mt-6  hover:bg-blue-600 transition-all duration-200 w-48 h-9 hover:brightness-95 shadow-md hidden xl:inline'
                        onClick={() => signOut()}
                >Sign out</button>
            ): (
                <button className='bg-blue-400 text-white font-bold rounded-full mt-6  hover:bg-blue-600 transition-all duration-200 w-48 h-9 hover:brightness-95 shadow-md hidden xl:inline'
                        onClick={() => signIn()}
                >Sign up</button>
            )}


        </>
    );
};

export default SignUp;