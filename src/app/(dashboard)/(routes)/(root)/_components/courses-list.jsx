import React from 'react';
import CourseCards from './course-cards';
import { courselist } from '@/app/(dashboard)/_data/courseList';

export default function CourseList() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-1 mb-5">
            {courselist.map((course) => (
                <div key={course.id}>
                    <CourseCards
                        id={course.id}
                        image={course.image}
                        title={course.title}
                        price={course.price}
                        difficulty={course.difficulty}
                        rating={course.rating}
                        duration={course.duration}
                    />
                </div>
            ))}
        </div>
    );
}