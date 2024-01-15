import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Image } from 'antd';
const carts = [
    {
      id: 1,
      imageUrl: 'https://www.prepaway.com/design/img/screen-qa/202-450/screen3.png',
      title: 'CCNA',
    },
    {
      id: 2,
      imageUrl: 'https://www.prepaway.com/design/img/screen-qa/202-450/screen4.png',
      title: 'CompTIA A+',
    },
    {
      id: 3,
      imageUrl:
        'https://www.prepaway.com/design/img/screen-sg/202-450/screen2.png',
      title: 'AWS-Certified Cloud Practitioner',
    },
    {
      id: 4,
      imageUrl:
        'https://www.prepaway.com/design/img/screen-sg/202-450/screen3.png',
      title: 'AWS-CERTIFIED-DEVELOPER-ASSOCIATE',
    },
    {
      id: 5,
      imageUrl:
        'https://www.prepaway.com/design/img/screen-sg/202-450/screen3.png',
      title: 'AWS-CERTIFIED-SOLUTION-ARCHITECT-ASSOCIATE',
    },
    {
      id: 6,
      imageUrl: 'https://www.prepaway.com/design/img/screen-sg/202-450/screen3.png',
      title: 'CASP',
    },
    {
      id: 7,
      imageUrl: 'https://www.prepaway.com/design/img/screen-sg/202-450/screen3.png',
      title: 'CCIE-COLLABORATION',
    },
    {
      id: 8,
      imageUrl:
        'https://www.prepaway.com/design/img/screen-qa/202-450/screen1.png',
      title: 'CCIE-ENTERPRISE-WIRELESS',
    },
    {
      id: 9,
      imageUrl: 'https://www.prepaway.com/design/img/screen-qa/202-450/screen1.png',
      title: 'CCIE-ENTERPRISE',
    },
    {
      id: 10,
      imageUrl: 'https://www.prepaway.com/design/img/screen-qa/202-450/screen1.png',
      title: 'JNCIA-JUNOS',
    },
    {
      id: 11,
      imageUrl: 'https://www.prepaway.com/design/img/screen-qa/202-450/screen1.png',
      title: 'CCNP ENTERPRISE',
    },
    {
      id: 12,
      imageUrl: 'https://www.prepaway.com/design/img/screen-qa/202-450/screen1.png',
      title: 'CISSP',
    },
  ];
export default function CartSlider() {
    
      
          const [slidesToShow, setSlidesToShow] = useState(4);
      
        useEffect(() => {
          const handleResize = () => {
            if (window.innerWidth >= 1200) {
              setSlidesToShow(6);
            } else if (window.innerWidth >= 992) {
              setSlidesToShow(4);
            } else if (window.innerWidth >= 768) {
              setSlidesToShow(2);
            } else {
              setSlidesToShow(1);
            }
          };
      
          handleResize();
          window.addEventListener('resize', handleResize);
      
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []);
      
        const settings = {
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: slidesToShow,
          lazyLoad: 'ondemand',
          autoplay: true,
          autoplaySpeed: 2000,
          // fade: true,
          // cssEase: 'linear'
        
        };
  return (
    <div>
      <div className="text-center">
          <Slider {...settings}>
            {carts.map((cart) => (
              <div className="mb-4 pe-2" key={cart.id}>
                <div className="cartImgDiv">
                    <div>
                  <Image
                    className="cartImg"
                    src={cart.imageUrl}
                    alt=""
                    height={100}
                  />
                </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
 
    </div>
  )
}
