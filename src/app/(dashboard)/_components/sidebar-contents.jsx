"use client"
import React from 'react';
import SideBar from './sidebar';
import { Layout, BookMarked, Compass } from "lucide-react"
import { usePathname, useRouter } from "next/navigation";
import { courselist } from '../_data/courseList';

const routes = [
    {
        icon: Layout,
        label: "Dashboard",
        href: "/"
    },
    {
        icon: BookMarked,
        label: "My Learnings",
        href: "/mylearnings"
    },
]


export default function SideBarContents() {
    const pathname = usePathname();
    const router = useRouter();

    const chapterBar = pathname?.startsWith("/courses/");
    let courseID = parseInt(pathname.split("/")[2]);

    const course = courselist.find((course) => course.id === courseID);


    return (
        <div className="flex flex-col pt-4">
            {chapterBar ? (
                <div>
                    <p className='text-[1.2em] pl-[1em] py-3 font-bold'>Chapters</p>
                    {course && course.chapters.map((ch, index) => (
                        <SideBar
                            key={index}
                            // icon={BookMarked}
                            uid={courseID}
                            label={ch.chapterName}
                            href={"/"}
                        />
                    ))}
                </div>
            ) : (
                <div>
                    {routes.map((route, index) => (
                        <SideBar
                            key={index}
                            icon={route.icon}
                            uid={route.label}
                            label={route.label}
                            href={route.href}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}