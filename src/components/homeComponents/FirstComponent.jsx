import React from 'react';
import TypingComponent from './TypingComponent';

export default function FirstComponent() {
  const typedStrings = ['Pass Your Next Certification Exam Fast!', 'Achieve Success in Your Certification Journey with Lightning Speed!', 'Supercharge Your Exam Preparation for Guaranteed Results!'];
  return (
    <div className=" text-center firstComponent">
      <div className='container'>
        <h1 className="homeHeadingTxt1">
          {/* Pass Your Next Certification Exam Fast! */}
          <TypingComponent strings={typedStrings} speed={200} delay={50000} />
        </h1>
        <div className="homeSpan1">
          <span className="d-block">
            Everything you need to prepare, learn & pass your certification exam
            easily.
          </span>
          <span className="d-block">
            30 days free updates. First attempt guaranteed success.
          </span>
        </div>
        <div className="btnFirstComponent mt-5">
          <button className='btn btn-warning py-3 me-5 rounded-pill'>Unlimited Access</button>
          <button className='btn btn-primary py-3 rounded-pill'>Find Your Exam Now</button>
        </div>
      </div>
    </div>
  );
}
