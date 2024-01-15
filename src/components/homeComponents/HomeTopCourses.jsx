import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeTopCourses() {
  // Sample data array
  const courseData = [
    { vendor: 'CompTIA', exam: 'SY0-601', fileName: 'Comptia.test-inside.sy0-601.v2023-09-16.by.heidi.215q.ete' },
    { vendor: 'Microsoft', exam: 'AZ-104', fileName: 'Microsoft.examlabs.az-104.v2023-08-11.by.luke.204q.ete' },
    { vendor: 'Cisco', exam: '200-301', fileName: 'Cisco.examlabs.200-301.v2023-09-08.by.imogen.289q.ete' },
    { vendor: 'Amazon', exam: '	AZ-900', fileName: 'Amazon.test-king.aws certified solutions architect - associate...' },
    { vendor: 'Microsoft', exam: 'CISSP', fileName: 'Microsoft.certkey.az-900.v2023-08-11.by.santiago.180q.ete' },
    { vendor: 'ISC', exam: '220-1101', fileName: 'Isc.pass4sure.cissp.v2023-08-07.by.thea.336q.ete' },
    { vendor: 'CompTIA', exam: 'NSE4_FGT-7.2', fileName: 'Comptia.certkey.220-1101.v2023-08-16.by.jakub.7q.ete' },
    { vendor: 'Fortinet', exam: '350-401', fileName: 'Fortinet.passcertification.nse4_fgt-7.2.v2023-08-25.by.sophie.7q.ete' },
    { vendor: 'Cisco', exam: '220-1102', fileName: 'Cisco.selftesttraining.350-401.v2023-08-23.by.gracie.216q.ete' },
    { vendor: 'VMware', exam: 'CAS-004', fileName: 'Comptia.examcollection.220-1102.v2023-07-25.by.connor.7q.ete' },
    
  ];
  
  return (
    <div className='homeTopCoursesModified'>
    <h2 className='fw-bold text-center'>Top 50 Practice Exams</h2>
    <table className="table table-responsive table-secondary table-striped modifiedTable mt-5">
      <thead>
        <tr>
          <th scope="col" className="fs-5 homeTopCoursesThModified">
            Vendor
          </th>
          <th scope="col" className="fs-5 homeTopCoursesThModified">
            Exam
          </th>
          <th scope="col" className="fs-5 homeTopCoursesThModified">
            File Name
          </th>
        </tr>
      </thead>
      <tbody>
        {courseData.map((course, index) => (
          <tr key={index} className={index % 2 === 0 ? 'evenRow' : 'oddRow'}>
            <td className='homeTopCertificateContentModified'><Link style={{color: '#354C5E'}}> {course.vendor} </Link></td>
            <td className='homeTopCertificateContentModified'><Link style={{color: '#354C5E'}}>{course.exam}</Link></td>
            <td className='homeTopCertificateContentModified'><Link style={{color: '#354C5E'}}>{course.fileName}</Link></td>
          </tr>
        ))}
      </tbody>
    </table>
   
  </div>
  
  );
}
