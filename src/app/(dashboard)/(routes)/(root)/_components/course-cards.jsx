"use client"
import React from 'react';
import Image from "next/image"
import { Star, StarHalf } from 'lucide-react';
import { usePathname, useRouter } from "next/navigation";


export default function CourseCards(
    { id, image, title, price, rating, difficulty, duration }
) {

    const pathname = usePathname();
    const router = useRouter();

    function clicked() {
        console.log("Pressed", title)
        router.push(`courses/${id}`);
    }

    return (
        <div className="border-2 border-[#ededed] p-5 m-3 w-[18em] h-[22em] rounded-[15px] transition ease-in hover:shadow-3xl hover:border-[#c5c5c5]" onClick={clicked} role='button'>
            <div>
                <Image className="rounded-[10px] h-[172px] w-full" src={image} width={300} height={300} alt="image" />
            </div>
            <div className="flex flex-col justify-evenly h-[45%] px-1">
                <div className="font-semibold text-[1.2em] line-clamp-2 pt-2 pb-1">{title}</div>
                <div className="flex gap-4 justify-between">
                    <div className="flex gap-1 text-[1.1em] font-semibold items-center">
                        <div className='flex'>
                            {Array.from({ length: rating }, (_, index) => (
                                <Star fill='#FCDC2A' strokeWidth={0} size={20} />
                            ))}
                        </div>
                        {rating}
                    </div>
                    <div className={`text-[1em] mr-2 flex font-medium items-center font-regular px-2 rounded-[10px]
                            ${difficulty === 'Easy' && 'bg-[#16fb5783]'}
                            ${difficulty === 'Medium' && 'bg-[#fbf3168b]'}
                            ${difficulty === 'Hard' && 'bg-[#ff746ac1]'}
                        `}>
                        <span>
                            {difficulty}
                        </span>
                    </div>
                </div>
                <div className="pt-2 items-center font-semibold text-[#4e4e4e]">
                    <div className="text-[1.25em]">₹{price} • <span className="text-[0.9em]">{duration} hours</span></div>
                </div>
            </div>
        </div>
    );
}