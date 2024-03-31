import React from 'react';
import { courselist } from '@/app/(dashboard)/_data/courseList';

export default function Keywords() {
    function capitalizeFirstWord(str) {
        // Check if the string is not empty
        if (str.length === 0) {
            return str;
        }
    
        // Capitalize the first letter of the first word
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const allKeywords = courselist.flatMap(course => course.keywords);

    // Step 2: Count occurrences of each keyword
    const keywordCounts = allKeywords.reduce((acc, keyword) => {
        acc[keyword] = (acc[keyword] || 0) + 1;
        return acc;
    }, {});
    
    // Step 3: Filter out keywords that occur in multiple courses
    const commonKeywords = Object.keys(keywordCounts).filter(keyword => keywordCounts[keyword] > 1);
    

    return (
        <div className='flex ml-5 gap-3 my-3'>
            {commonKeywords.map((keys) => (
                <p className='bg-[#e2e8f0] py-1 px-2 rounded-[5px] font-[500] hover:bg-[#c4cbd4]' role='button'>{capitalizeFirstWord(keys)}</p>
            ))}
        </div>
    );
}