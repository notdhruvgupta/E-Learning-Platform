"use client"
import { courselist } from '@/app/(dashboard)/_data/courseList';
import React, { useState } from 'react';
import { BookMarked, BookHeart, Star, BookmarkPlus } from "lucide-react"
import Image from "next/image"
import Recommended from '../../_components/recommend';

export default function CoursePageVideo({ params }) {
    const course = courselist.find((course) => course.id === parseInt(params.course))

    const [fav, setFav] = useState(course.favorite);
    const [enr, setEnr] = useState(course.enrolled);

    function toggleFav() {
        setFav(prevState => !prevState)
        course.favorite = !course.favorite
    }
    function toggleEnrolled() {
        setEnr(prevState => !prevState)
        course.enrolled = !course.enrolled
    }

    return (
        <div>
            {course && (
                <div className='gap-7 mb-7 mt-3 flex'>
                    <div className='rounded-md'>
                        <Image className='rounded-lg border' alt='course-image' src={course.image} width={600} height={500}></Image>
                    </div>
                    <div className=''>
                        <div className='flex mb-2 gap-4 items-center'>
                            <p className='text-2xl font-bold'>
                                {course.title}
                            </p>
                            <div role='button' onClick={toggleFav} className={`gap-2 rounded-md px-2 py-1 transition-all border-2 border-[#fbe595] hover:bg-[#fff68e] hover:shadow-btn inline-flex items-center ${fav ? 'bg-[#fff68e]' : 'none'}`}>
                                <Star size={18} fill={fav ? '#FFC700' : 'none'} color={fav ? '#FFC700' : 'black'}/>
                                <p className='font-[500] '>Favorite</p>
                            </div>
                            <div role='button' onClick={toggleEnrolled} className={`gap-2 rounded-md px-2 py-1 transition-all border-2 border-[#addffa] hover:bg-[#b7f4ff] hover:shadow-btn inline-flex items-center ${enr ? 'bg-[#b7f4ff]' : 'none'}`}>
                                <BookmarkPlus size={20} fill={enr ? '#008DDA' : 'none'} color={enr ? '#b7f4ff' : 'black'}/>
                                <p className='font-[500] pr-1'>Enroll</p>
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <div className={`inline-block text-[1em] mb-2 font-medium items-center font-regular rounded-[10px]
                                ${course.difficulty === 'Easy' && 'text-[#46c56a]'}
                                ${course.difficulty === 'Medium' && 'text-[#FCDC2A]'}
                                ${course.difficulty === 'Hard' && 'text-[#ff5246]'}
                                `}>
                                <span>
                                    {course.difficulty}
                                </span>
                            </div>
                            •
                            <p className='inline-block text-[1em] mb-2 font-medium items-center font-regular rounded-[10px]'>{course.duration} hrs</p>
                            •
                            <p className='inline-block text-[1em] mb-2 font-medium items-center font-regular rounded-[8px] '>₹{course.price}</p>
                        </div>
                        <p className='text-[1.05em] w-[80%]'>{course.description}</p>
                    </div>
                </div>
            )}
            {course.chapters.map((ch, index) => (
                <div className='flex gap-3 border transition ease-in-out mb-5 w-[80%] rounded-[8px] px-3 py-4' key={index}>
                    <BookMarked />
                    <p className='text-[1.09em]'>Chapter {ch.chapterId}: {ch.chapterName}</p>
                </div>
            ))}
            <hr className='w-[85%] my-[2em]' />
            <Recommended course={[course]}/>
        </div>
    );
}