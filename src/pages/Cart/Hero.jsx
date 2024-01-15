import React from 'react'
import VendorSideBar from './../../components/Vendor/VendorSideBar';
import CartHeader from 'components/Cart/CartHeader';
import CartFirstHeader from 'components/Cart/CartFirstHeader';
import CartComment from 'components/Cart/CartComment';
import CartCommentShow from 'components/Cart/CartCommentShow';
import CartSlider from 'components/Cart/CartSlider';
import LastWeekResult from 'components/Cart/LastWeekResult';
import CartBlog from 'components/Cart/CartBlog';

export default function Hero() {
  return (
    <>
    <div>
    <div className='container'>
        <div className="row">
            <div className="col-12 col-md-8 col-lg-9 mt-5">
                <CartFirstHeader/>
                <CartHeader/>
                <CartSlider/>
                <LastWeekResult/>
                <CartBlog/>
                <CartCommentShow/>
                <CartComment/>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mt-5">
                <VendorSideBar/>
            </div>
        </div>
      
    </div>
    
    </div>
    </>
  )
}
