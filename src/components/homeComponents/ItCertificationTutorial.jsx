import React from 'react';
import { Link } from 'react-router-dom';

// Sample data array
const tutorialData = [
  { id: 1, title: 'Top Career Opportunities for Financial Certified Professionals', link: '/tutorial/1' },
  { id: 2, title: 'Top Project Management Certifications to Improve Your CV', link: '/tutorial/2' },
  { id: 3, title: 'Top 10 Computer Job Titles That Will Rule the Future', link: '/tutorial/2' },
  { id: 4, title: 'Discontinuation of ITIL v3 in 2022 And New Technological Era', link: '/tutorial/2' },
  { id: 5, title: 'GAQM CSM-001 Certified Scrum Master - Chapter 04 - Meetings in Scrum Part 3', link: '/tutorial/2' },
  { id: 6, title: 'PMI PMP Project Management Professional - Introducing Project Risk Management Part 3', link: '/tutorial/2' },
  { id: 7, title: 'Python Institute PCAP - Modules; Packages and Object Oriented Programming in Python Part 3', link: '/tutorial/2' },
  { id: 8, title: 'PMI PMP Project Management Professional - Introducing Project Risk Management Part 3', link: '/tutorial/2' },
  { id: 9, title: 'CompTIA CASP+ CAS-004 - Chapter 01 - Understanding Risk Management Part 3', link: '/tutorial/2' },

  // Add more tutorial data as needed
];

export default function ItCertificationTutorial() {
  return (
    <div className='mt-5 container'>
      <h1 className='fw-bold mb-5 text-center'>IT Certification Tutorials</h1>
      <div>
        <ul style={{ listStyleType: 'decimal' }}>
          {tutorialData.map((tutorial) => (
            <li key={tutorial.id} className='iconColor fs-5 mt-2'>
              <Link to={tutorial.link} className='text-decoration-none'>{tutorial.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
