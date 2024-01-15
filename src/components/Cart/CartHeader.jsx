import React from 'react'

export default function CartHeader() {
  return (
    <div className='mb-3'>
      <div className="cartHeader mt-5 "  style={{color: '#354C5E'}}>
    <div className="container">
        <div className="row">
            <div className="col-12 col-sm-4">
                <img className='cartImg' src="https://www.prepaway.com/design/img/content/popup/premium-study/premium-study_1x.png" alt="" />
            </div>
            <div className="col-12 col-sm-8">
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-8">
                            <h2 className=''>DS0-001 Premium Bundle</h2></div>
                        <div className="col-4 text-end">
                           <h2 className='text-success'>$64.99</h2></div>
                    </div>
                </div>
                <hr />
                <ul style={{listStyleType: 'circle',fontSize: '18px'}}>
                    <li>Premium File 119 Questions & Answers.</li>
                    <li>Last update: Oct 13, 2023</li>
                    <li>Study Guide 964 Pages</li>
                </ul>
                <div className='text-center mt-5'>
                <button className="btn btn-outline-success px- me-3">Buy Now</button>
                <button className="btn btn-outline-primary px-5">Other Amazon exams</button>
                </div>
            </div>
        </div>
    </div>
      </div>
    </div>
  )
}
