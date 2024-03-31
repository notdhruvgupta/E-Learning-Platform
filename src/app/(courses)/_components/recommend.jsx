import { courselist } from '@/app/(dashboard)/_data/courseList';
import React from 'react';
import CourseCards from '@/app/(dashboard)/(routes)/(root)/_components/course-cards';

export default function Recommended({ course }) {
    function capitalizeFirstWord(str) {
        // Check if the string is not empty
        if (str.length === 0) {
            return str;
        }

        // Capitalize the first letter of the first word
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const findCoursesWithSimilarKeywords = (course, courselist) => {
        const coursesWithSimilarKeywords = new Set();

        course.forEach(course => {
            course.keywords.forEach(keyword => {
                const similarCourses = courselist.filter(c => c.keywords.includes(keyword) && c !== course);
                similarCourses.forEach(similarCourse => {
                    coursesWithSimilarKeywords.add(similarCourse);
                });
            });
        });

        return Array.from(coursesWithSimilarKeywords);
    };

    const similarCourses = findCoursesWithSimilarKeywords(course, courselist);
    // console.log(similarCourses)

    return (
        <div className='rounded-md '>
            <p className='px-3 font- text-[1.5em]'>Recommended Courses</p>
            {course.map((features) => (
                <div key={features.id} className='flex ml-3 gap-2 my-2'>
                    {features.keywords.map((keyword, index) => (
                        <p key={index} className='bg-[#e2e8f0] py-1 px-2 rounded-[5px] font-[500] hover:bg-[#c4cbd4]'>{capitalizeFirstWord(keyword)}</p>
                    ))}
                </div>
            ))}

            <div className='grid grid-cols-4'>
                {similarCourses.map((course) => (
                    <CourseCards
                        key={course.id}
                        id={course.id}
                        image={course.image}
                        title={course.title}
                        price={course.price}
                        difficulty={course.difficulty}
                        rating={course.rating}
                        duration={course.duration}
                    />
                ))}
            </div>
        </div>
    );
}