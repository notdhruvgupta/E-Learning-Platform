"use client"
import React from 'react';
import Favorites from './_component.jsx/favs';
import Enrolled from './_component.jsx/enrolled';
import { Star, BookmarkPlus } from 'lucide-react';


export default function MyLearningPage() {
  return (
    <div className="w-[99%]">
      <div className=' px-2 py-3 rounded-[15px]'>
        <div className='flex ml-4 gap-2 items-center'>
          <Star/>
          <p className='text-[1.25em] font-semibold'>Favorites</p>
        </div>
        <Favorites/>
      </div>
      <hr className='w-[99%] my-3 ml-5' />
      <div className='px-2 py-3 mb-8 rounded-[15px] '>
        <div className='flex ml-4 gap-2 items-center'>
          <BookmarkPlus/>
          <p className='text-[1.25em] font-semibold'>Enrolled</p>
        </div>
        <Enrolled/>
      </div>
    </div>
  );
}