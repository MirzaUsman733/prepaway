import React from 'react';
import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import { LiaDoorOpenSolid } from 'react-icons/lia';
import { AiOutlineQuestionCircle, AiOutlineShoppingCart } from 'react-icons/ai';
export default function FirstHeader() {
  return (
    <div>
      <nav className="navbar navbar-expand-md py-3">
        <div className="container">
          <Link className="navbar-brand fw-bolder fs-1" to="/">
            <span className="greenColor">Prep</span>
            <span className="blueColor">Away</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex firstHeaderForm me-3" role="search">
              <input
                className="form-control firstHeaderInput"
                type="search"
                placeholder="Enter your text"
                aria-label="Search"
              />
              <button className="btn btn-primary FirstHeaderSubmitBtn fs-5" type="submit">
                Search
              </button>
            </form>
            <ul className="navbar-nav d-flex mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active fw-semibold fs-6 ms-2"
                  aria-current="page"
                  to="/signup"
                >
                  <FiUser size={25} className="iconColor" />{' '}
                  <span className="firstHeaderTxt">Sign up</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active fw-semibold fs-6 ms-2"
                  aria-current="page"
                  to="/login"
                >
                  <LiaDoorOpenSolid size={30} className="iconColor" />{' '}
                  <span className="firstHeaderTxt">Log in</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active fw-semibold fs-6 ms-2"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  aria-current="page"
                  to="/"
                >
                  <AiOutlineQuestionCircle size={27} className="iconColor" />{' '}
                  <span className="firstHeaderTxt">How it works</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active fw-semibold fs-6 ms-2"
                  aria-current="page"
                  to="/cart"
                >
                  <AiOutlineShoppingCart size={30} className="iconColor" />{' '}
                  <span className="firstHeaderTxt">Cart</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <div
          className="modal fade modal-xl"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1
                  className="modal-title fs-2 blueColor fw-bold"
                  id="exampleModalLabel"
                >
                  How It Works
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 text-center">
                      <div className="modalCols shadow p-3 mb-5 rounded-4 text-center">
                       <img src="https://www.prepaway.com/design/img/content/popup-imgs/icon1.svg" alt="" className='pt-5' />
                      
                       <div className='shadow mb-3 rounded-pill bg-white mt-4 mx-auto fs-4 modalStep iconColor'>
                        Step 1
                       </div>
                       <div className='bg-white text-center rounded-4 pb-3'>
                        <h3 className='greenColor'>PrepAway.com</h3>
                        <p className='modalPara'>Download Certification Exams Questions & Answers</p>
                      
                      </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 rounded-4">
                    <div className="modalCols shadow p-3 mb-5 rounded-4 text-center">
                       <img src="	https://www.prepaway.com/design/img/content/popup-imgs/icon2.svg" alt="" className='pt-5' />
                      
                       <div className='shadow mb-3 rounded-pill bg-white mt-4 mx-auto fs-4 modalStep iconColor'>
                       Step 2
                       </div>
                       <div className='bg-white text-center rounded-4 pb-3'>
                        <h3 className='greenColor'>Vumingo.com</h3>
                        <p className='modalPara'>Download Testing Engine that simulates real exam environment</p>
                      
                      </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 rounded-4">
                    <div className="modalCols shadow p-3 mb-5 rounded-4 text-center">
                       <img src="https://www.prepaway.com/design/img/content/popup-imgs/icon3.svg" alt="" className='pt-5' />
                      
                       <div className='shadow mb-3 rounded-pill bg-white mt-4 mx-auto fs-4 modalStep iconColor'>
                        Step 3
                       </div>
                       <div className='bg-white text-center rounded-4 pb-5'>
                        <h3 className='greenColor'>Study & Pass</h3>
                        <p className='modalPara'>Certification Exams Anywhere, Anytime!</p>
                      
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
