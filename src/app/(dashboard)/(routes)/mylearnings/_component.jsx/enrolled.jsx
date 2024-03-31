import { courselist } from '@/app/(dashboard)/_data/courseList';
import CourseCards from '../../(root)/_components/course-cards';
import React from 'react';

export default function Enrolled() {
    return (
        <div className='flex'>
            {courselist.map((course) => (
                <div>
                    {course.enrolled && (
                        <CourseCards
                            id={course.id}
                            image={course.image}
                            title={course.title}
                            price={course.price}
                            difficulty={course.difficulty}
                            rating={course.rating}
                            duration={course.duration}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}