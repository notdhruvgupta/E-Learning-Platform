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
         className='w-[70%]'
          playbackId="EcHgOK9coz5K4rjSwOkoE7Y7O01201YMIC200RI6lNxnhs"
          metadata={{
            video_id: "video-id-54321",
            video_title: "Test video title",
            viewer_user_id: "user-id-007",
          }}
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