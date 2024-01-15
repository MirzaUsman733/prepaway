import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { CiMedal } from 'react-icons/ci';
import { IoBookOutline } from 'react-icons/io5';
import {
  LiaFileSignatureSolid,
  LiaFileSolid,
  LiaFileVideo,
} from 'react-icons/lia';
import { FaComputer } from 'react-icons/fa6';
import { PiNotePencilBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';

export default function SecondHeader() {
  return (
    <div className="mt-3">
       <nav className="navbar navbar-expand-md navbar-light bg-light mt-3">
      <div className="container">
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
          <ul className="nav navbar-nav justify-content-center">
            <li className="nav-item">
              <Link
                className="nav-link active text-uppercase secondHeaderLink"
                aria-current="page"
                to="/"
              >
                <AiOutlineHome size={15} color="blue" className="opacity-75" /> Home
              </Link>
            </li>
            <li className="nav-item">
          <Link
            className="nav-link text-uppercase secondHeaderLink "
            to="/"
          >
            <CiMedal size={18} color="blue" className="opacity-75" /> unlimited
            access
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link text-uppercase secondHeaderLink "
            to="/"
          >
            <IoBookOutline size={18} color="blue" className="opacity-75" />{' '}
            certifications
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link text-uppercase secondHeaderLink "
            to="/"
          >
            <LiaFileSignatureSolid
              size={17}
              color="blue"
              className="opacity-75"
            />{' '}
            premium files
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link text-uppercase secondHeaderLink "
            to="/"
          >
            <LiaFileSolid size={17} color="blue" className="opacity-75" /> free
            files
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link text-uppercase secondHeaderLink "
            to="/"
          >
            <LiaFileSolid size={18} color="blue" className="opacity-75" /> new
            files
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link text-uppercase secondHeaderLink "
            to="/"
          >
            <LiaFileVideo size={18} color="blue" className="opacity-75" /> video
            courses
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link text-uppercase secondHeaderLink "
            to="/"
          >
            <PiNotePencilBold size={18} color="blue" className="opacity-75" />{' '}
            request exam
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link text-uppercase secondHeaderLink "
            to="/"
          >
            <FaComputer size={20} color="blue" className="opacity-75" /> job
          </Link>
        </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
}
