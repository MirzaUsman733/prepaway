import React from 'react';
import { AiOutlineClockCircle, AiOutlineStar } from 'react-icons/ai';
import { PiUsersDuotone } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const trainingCourses = [
  {
    id: 1,
    image: 'https://www.prepaway.com/design/img/courses/9926.jpg',
    title: 'SY0-601: CompTIA Security+',
    students: 107,
    rating: 4.1,
    duration: '23h',
  },
  {
    id: 2,
    image: 'https://www.prepaway.com/design/img/courses/9898.jpg',
    title: 'AZ-104: Microsoft Azure Administrator',
    students: 101,
    rating: 4.5,
    duration: '11h',
  },
  // Add more courses as needed
];

export default function TopTrainingCourses() {
  return (
    <div className='topTrainingCourses'>
        <h3 className="fw-bold">Top Training Courses</h3>
      {trainingCourses.map(course => (
        <div key={course.id} className=''>
          <img className='topTrainingImage' src={course.image} alt="" />
          <h4 className='mt-3'><Link to={`/course/${course.id}`}>{course.title}</Link></h4>
          <span className='d-block fs-6 mt-4'><PiUsersDuotone size={30} className='greenColor'/> Students: {course.students}</span>
          <span className='d-block fs-6 mt-3'><AiOutlineStar size={30} className='iconColor'/> Rating: {course.rating}</span>
          <span className='d-block fs-6 mt-3'><AiOutlineClockCircle size={30} className='blueColor'/> Duration: {course.duration}</span>
        </div>
      ))}
    </div>
  );
}
