import React from 'react'
import MicrosoftList from 'components/Vendor/MicrosoftList';
import MicrosoftSlider from 'components/Vendor/MicrosoftSlider';
import VendorSideBar from './../../components/Vendor/VendorSideBar';


export default function Hero() {
    
  return (
   <>
   <div className="container mt-5">
    <div className="row">
        <div className="col-12 col-md-8 col-lg-9 pe-5 mt-5">
            <MicrosoftSlider/>
            <MicrosoftList/>
        </div>
        <div className="col-12 col-md-4 col-lg-3 mt-5">
            <VendorSideBar/>
          </div>
    </div>
   </div>
   </>
  )
}
