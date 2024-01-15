import React from 'react'
import { MdNavigateNext } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'

export default function VendorSideBar() {
    const navigate = useNavigate();
    const handleSignUpBtn = () => {
        navigate("/signup")
    }
  return (
    <div>
      <div className="authLastDiv text-center">
              <h1 className="authLastDivFirstHeading">Vumingo</h1>
              <Link className="authLastDivLink1">How to open ETE Files</Link>
              <img
                className="lastDivImg"
                src="https://www.prepaway.com/design/img/content/sidebar-vumingo-app-screenshot.jpg"
                alt=""
              />
              <div className="text-center">
                <button className="lastDivBtn btn btn-outline-success text-start mt-5" onClick={handleSignUpBtn} >
                  Sign Up{' '}
                  <span className="formBtnIcon1">
                    <MdNavigateNext size={30} className='successBtnIcon'/>
                  </span>
                </button>
                <button className="lastDivBtn btn btn-outline-warning text-start mt-3 ">
                  Learn More{' '}
                  <span className="formBtnIcon2">
                    <MdNavigateNext size={30} />
                  </span>
                </button>
                <button className="lastDivBtn btn btn-outline-primary text-start mt-3">
                  Full Version{' '}
                  <span className="formBtnIcon3">
                    <MdNavigateNext size={30}/>
                  </span>
                </button>
              </div>
            </div>
    </div>
  )
}
