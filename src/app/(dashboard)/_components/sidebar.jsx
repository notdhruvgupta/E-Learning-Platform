"use client"
import React from 'react';
import { useState } from 'react';
import { usePathname, useRouter } from "next/navigation";


export default function SideBar({ icon: Icon, uid, label, href }) {
    const pathname = usePathname();
    const router = useRouter();
    const normalText = decodeURIComponent(pathname);
    const isActive =
        (pathname === "/" && href === "/") ||
        pathname === href ||
        pathname?.startsWith(`${href}/`) ||
        (normalText === `/courses/${uid}/${label}`);

    const isCourse = pathname.startsWith("/courses/");

    const clickBtn = () => {
        if(isCourse) {
            router.push(`/courses/${uid}/${label}`);
        } else {
            router.push(href);
        }
    }

    return (
        <div className="flex flex-col justify-center mb-2" onClick={clickBtn} role='button' key={uid}>
            <div className={`flex relative items-center transition-all bg-[#f4f4f4] border-b-4  ${isActive ? 'bg-[#c4f25193]' : 'hover:bg-slate-300/20'}`}>
                <div className="flex gap-2 pl-5 py-2 items-center">
                    {Icon && <Icon className={`${isActive ? 'text-[#000]' : 'text-slate-500'}`} size={25} />}
                    <p className={`text-[1.05em] font-regular ${isActive ? 'text-[#000] font-medium' : 'text-slate-500'}`}>{label}</p>
                </div>
                <div
                    className={` absolute opacity-0 border-2 right-0 h-[100%] flex-1 ml-auto ${isActive ? 'opacity-100 border-[#8cb81b]' : 'opacity-0'}`}
                />
            </div>
        </div>
    );
}