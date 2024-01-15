import React, { useState } from 'react';

export default function CartBlog() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mt-5">
      <h3>
        LPI 202-450 Practice Test Questions and Answers, LPI 202-450 Exam Dumps
        - PrepAway
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam
        purus ut nunc posuere, id hendrerit ligula tempor. Duis ut arcu sed
        libero commodo bibendum.
      </p>
      {isExpanded && (
        <>
          <p>
            All LPI 202-450 certification exam dumps, study guide, training
            courses are Prepared by industry experts. PrepAway's ETE files
            povide the 202-450 LPIC-2 Exam 202 practice test questions and
            answers & exam dumps, study guide and training courses help you
            study and pass hassle-free! Exam 202-450 is the second one on the
            way to getting the LIPC-2 certificate. This exam is meant to test
            one’s knowledge and the ability to administer small to medium-sized
            networks. LPIC-2 certification that you eventually obtain is part of
            the Linux Professionals program, and is mainly focused on a great
            deal of activities- from creating and maintaining domain name
            servers to web services, file sharing, apache configuration, and
            Network Client Management. All these skills come together to ensure
            that a LPIC-2 certified professional is proficient enough to create
            more secure and efficient networks within any organization. While
            these duties are essential, they are only part of a wider skill set
            that groom aspiring professionals towards the next step of their
            multi-level Linux Institute Certification Program- the LPIC-3.
          </p>
          <h3>Linux Professional Institute LPIC-2 202-450. Test Overview</h3>
          <p>
            As you already know, LPIC-2 202-450 is the 2nd exam in the sequence
            of the two (the first one is 201-450) that you need to pass to earn
            the LPIC-2 certification. It is designed for those test-takers that
            are passionate about systems administration and networking and are
            ready to upgrade their skills and boost their career to the next
            level. The exam lasts for 90 minutes and features 60-multiple choice
            and fill-in-the-blank questions. The exam cost depends on your
            location, and if you are going to take it in the USA, for instance,
            you’ll have to pay $200. Normally the LPI exam costs anything
            between $90 and $200. These numbers, set by the United Nations Human
            Development Index, and owe their disparities to the varying economic
            conditions across the world. To know the precise cost in your
            region, visit the LPI official website.
          </p>
          <p>
            The LPIC-2 202-450 exam can be taken at Pearson VUE test centers
            with a 4-language option- English, Japanese, German, Portuguese.
            Moreover, the test can be written online via OnVUE. In this case,
            you are limited to English.
          </p>
        </>
      )}
      <button className="btn btn-outline-primary" onClick={toggleContent}>
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
}
