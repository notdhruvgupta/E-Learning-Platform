"use client"
import React from 'react';
import Image from "next/image"
import { useRouter } from 'next/navigation';

export default function Navbar() {
    const router = useRouter();

    const goHome = () => {
        router.push('/');
    }

  
    return (
        <div>
            <div className="bg-[#212121]">
                <div className="flex py-4 items-center gap-3 ml-8 pb-5">
                    <Image src="/logo.png" width={35} height={35} alt="logo"></Image>
                    <p className="font-petrov font-semibold text-[1.75em] text-white" role='button' onClick={goHome}>Skill<span className="text-[#c5f251]">Synth</span></p>
                </div>
            </div>
        </div>
    );
}