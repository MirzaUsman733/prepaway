import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeFooter() {
  const date = new Date().getFullYear();

  const links = [
    'Unlimited Access',
    'Request Exam',
    'Archive',
    'FAQ',
    'Contact Us',
    'Privacy Policy',
    'Terms & Conditions',
    'Blog',
    'Certification Providers',
    'IT Courses',
    'IT Training',
    'Facebook',
  ];

  return (
    <div className='homeFooter'>
      <div className='container'>
        <div className="row">
          <div className="col-12 col-md-4">
            <div>
              <Link className="navbar-brand fw-bolder fs-1" to="/">
                <span className="greenColor">Prep</span>
                <span className="blueColor">Away</span>
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-8">
            {links.map((link, index) => (
              <Link key={index} className='fw-semibold pe-3 lh-lg'>
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col text-center mt-5 mb-3"  style={{color: '#354C5E'}}>&copy; {date}. All Rights Reserved.</div>
        </div>
      </div>
    </div>
  );
}
