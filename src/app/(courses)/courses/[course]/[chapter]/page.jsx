"use client"
import React, { useState } from 'react';
import MuxPlayer from "@mux/mux-player-react";
import { BookmarkCheck, Clock } from 'lucide-react'

export default function CourseChapter({ params }) {
  const normalText = decodeURIComponent(params.chapter);
  const [complete, setComplete] = useState(false);
  const [watch, setWatch] = useState(false);

  function toggleComplete() {
    setComplete(prevState => !prevState)
  }

  function toggleWatch() {
    setWatch(prevState => !prevState)
  }


  return (
    <div>
      <div>
        <p className='text-[1.5em]  font-bold mb-3'>{normalText}</p>
        <MuxPlayer
          className='w-[70%] rounded-md overflow-hidden'
          streamType="on-demand"
          playbackId="CWC01WK5701uScDOGIn00Jgq6keFgK200cWkG01e4SFG4yGI"
          metadataVideoTitle="Placeholder (optional)"
          metadataViewerUserId="Placeholder (optional)"
          primaryColor="#FFFFFF"
          secondaryColor="#000000"
        />
      </div>
      <div className='gap-4 flex'>
        <div className={`mt-4 py-[0.59em] pl-2 pr-3 gap-2 rounded-md border-[3px] border-[#bff7b5] inline-flex items-center transition-all hover:shadow-btn ${complete ? 'bg-[#c7f8be]' : 'none'}`} onClick={toggleComplete} role='button'>
          <BookmarkCheck color='#3A4D39' />
          <p className='font-[500] text-[#3A4D39]'>Mark as Completed</p>
        </div>
        <div className={`mt-4 py-[0.59em] pl-2 pr-3 gap-2 rounded-md border-[3px] border-[#F6F193] inline-flex items-center transition-all hover:shadow-btn ${watch ? 'bg-[#f7f4ab]' : 'none'}`} onClick={toggleWatch} role='button'>
          <Clock color='#3A4D39' />
          <p className='font-[500] text-[#3A4D39]'>Watch Later</p>
        </div>
      </div>
    </div>
  );
}