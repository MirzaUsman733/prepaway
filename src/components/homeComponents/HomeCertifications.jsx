import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { AiOutlineStar } from 'react-icons/ai';

const certifications = [
  {
    id: 1,
    imageUrl: 'https://www.prepaway.com/design/img/cert/ccna.png',
    title: 'CCNA',
  },
  {
    id: 2,
    imageUrl: 'https://www.prepaway.com/design/img/cert/comptia-a-plus.png',
    title: 'CompTIA A+',
  },
  {
    id: 3,
    imageUrl:
      'https://www.prepaway.com/design/img/cert/aws-certified-cloud-practitioner.png',
    title: 'AWS-Certified Cloud Practitioner',
  },
  {
    id: 4,
    imageUrl:
      'https://www.prepaway.com/design/img/cert/aws-certified-developer-associate.png',
    title: 'AWS-CERTIFIED-DEVELOPER-ASSOCIATE',
  },
  {
    id: 5,
    imageUrl:
      'https://www.prepaway.com/design/img/cert/aws-certified-solutions-architect-associate.png',
    title: 'AWS-CERTIFIED-SOLUTION-ARCHITECT-ASSOCIATE',
  },
  {
    id: 6,
    imageUrl: 'https://www.prepaway.com/design/img/cert/casp.png',
    title: 'CASP',
  },
  {
    id: 7,
    imageUrl: 'https://www.prepaway.com/design/img/cert/ccie-collaboration.png',
    title: 'CCIE-COLLABORATION',
  },
  {
    id: 8,
    imageUrl:
      'https://www.prepaway.com/design/img/cert/ccie-enterprise-wireless.png',
    title: 'CCIE-ENTERPRISE-WIRELESS',
  },
  {
    id: 9,
    imageUrl: 'https://www.prepaway.com/design/img/cert/ccie-enterprise.png',
    title: 'CCIE-ENTERPRISE',
  },
  {
    id: 10,
    imageUrl: 'https://www.prepaway.com/design/img/cert/jncia-junos.png',
    title: 'JNCIA-JUNOS',
  },
  {
    id: 11,
    imageUrl: 'https://www.prepaway.com/design/img/cert/ccnp-enterprise.png',
    title: 'CCNP ENTERPRISE',
  },
  {
    id: 12,
    imageUrl: 'https://www.prepaway.com/design/img/cert/cissp.png',
    title: 'CISSP',
  },
];

const HomeCertification = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setSlidesToShow(4);
      } else if (window.innerWidth >= 992) {
        setSlidesToShow(3);
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
    <div className="homeCertification">
      <div className="container">
        <h3 className="mb-5 text-center">
          <Link className="text-primary">
            <AiOutlineStar />
            Hot Certifications
          </Link>{' '}
        </h3>
        <div className="text-center">
          <Slider {...settings}>
            {certifications.map((certification, index) => (
              <div className="mb-4" key={certification.id}>
                <div className="homeCertificationSliderContent">
                  <img
                    className="homeCertificationImg"
                    src={certification.imageUrl}
                    alt=""
                    height={130}
                  />
                </div>
                <Link className="d-block fs-5 mt-3">{certification.title}</Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HomeCertification;
