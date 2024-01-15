import React from 'react';
import { Divider, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import {MdNavigateNext} from 'react-icons/md'
export default function Hero() {
  return (
    <main className="auth mt-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="">
              <h2 level={2} className="m-0 fw-semibold blueColor">
                Free Registration
              </h2>
              <Divider />

              <Form layout="vertical">
                <Form.Item
                  label={<span style={{ fontSize: '18px' }}>Full Name</span>}
                >
                  <Input
                    className="rounded-0 authFormInput"
                    size="large"
                    placeholder="Enter full name"
                    name="fullName"
                  />
                </Form.Item>
                <Form.Item
                  label={<span style={{ fontSize: '18px' }}>Email</span>}
                >
                  <Input
                    className="rounded-0 authFormInput"
                    size="large"
                    placeholder="Enter email address"
                    name="email"
                  />
                </Form.Item>
                <Form.Item
                  label={<span style={{ fontSize: '18px' }}>Password</span>}
                >
                  <Input.Password
                    className="rounded-0 authFormInput"
                    size="large"
                    placeholder="Enter Password"
                    name="password"
                  />
                </Form.Item>
                <div
                  style={{
                    marginTop: '50px',
                  }}
                >
                  <button className="authFormBtn btn btn-warning text-uppercase">
                    Register Now
                  </button>
                  <div className="fs-6 mt-3 blueColor text-center">
                    <Link to="/login">
                      Login
                    </Link>
                    &nbsp; (Existing Members)
                  </div>
                </div>
              </Form>
            </div>
          </div>
          <div className="col-0 col-lg-5"></div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className='authLastDiv text-center'>
                  <h1 className='authLastDivFirstHeading'>Vumingo</h1>
                  <Link className='authLastDivLink1'>How to open ETE Files</Link>
                  <img className='lastDivImg' src="https://www.prepaway.com/design/img/content/sidebar-vumingo-app-screenshot.jpg" alt="" />
                  <div className='text-center'>
                  <button className='lastDivBtn btn btn-success text-start mt-5'>Sign Up <span className='formBtnIcon1'><MdNavigateNext size={30} color='white'/></span></button>
                  <button className='lastDivBtn btn btn-warning text-start mt-3'>Learn More <span className='formBtnIcon2'><MdNavigateNext size={30} color='white'/></span></button>
                  <button className='lastDivBtn btn btn-primary text-start mt-3'>Full Version <span className='formBtnIcon3'><MdNavigateNext size={30} color='white'/></span></button>

                  </div>
              
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
