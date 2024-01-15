import React from 'react'

export default function LastWeekResult() {
  return (
    <div className='mt-5'>
      <h1 className='fw-bold text-center' style={{color: '#354C5E'}}>Last Week Result</h1>
      <div className="row mt-5">
        <div className="col-12 col-md-6 col-lg-4">
            <div className='lastWeekDiv text-center pt-4 rounded-4'>
                <h1 className='text-primary'>30</h1>
                <p className='fs-5 px-3'>Customers Passed LPI 202-450 Exam</p>
            </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
        <div className='lastWeekDiv text-center pt-4 rounded-4'>
                <h1 className='text-primary'>88%</h1>
                <p className='fs-5 px-3'>Average Score In Actual Exam At Testing Centre</p>
            </div>

        </div>
        <div className="col-12 col-md-6 col-lg-4">
        <div className='lastWeekDiv text-center pt-4 rounded-4'>
                <h1 className='text-primary'>83%</h1>
                <p className='fs-5 px-3'>Questions came word for word from this dump</p>
            </div>

        </div>
      </div>
    </div>
  )
}
