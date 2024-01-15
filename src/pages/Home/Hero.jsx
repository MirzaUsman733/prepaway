import React from 'react';
import FirstComponent from './../../components/homeComponents/FirstComponent';
import HomeCertifications from 'components/homeComponents/HomeCertifications';
import HomeTopCourses from 'components/homeComponents/HomeTopCourses';
import TopTrainingCourses from 'components/homeComponents/TopTrainingCourses';
import ItCertificationTutorial from 'components/homeComponents/ItCertificationTutorial';

export default function Hero() {
  return (
    <>
      <FirstComponent />
      <HomeCertifications/>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-9">
            <HomeTopCourses/>
          </div>
          <div className="col-0 col-lg-3">
            <TopTrainingCourses/>
          </div>
        </div>
      </div>
          <ItCertificationTutorial/>
    </>
  );
}
