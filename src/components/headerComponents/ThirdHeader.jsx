import React from 'react';
import { Link } from 'react-router-dom';

export default function ThirdHeader() {
  return (
    <div
      className="thirdHeader"
    >
      <div className="container">
        <ul className="nav thirdHeaderNav">
          <span className="thirdExam">Practice exams: </span>
          <li className="nav-item">
            <Link
              className="nav-link active text-white fw-semibold text-decoration-underline"
              aria-current="page"
              to="/microsoft"
            >
              Microsoft
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white fw-semibold text-decoration-underline"
              to="/"
            >
              CompTia
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white fw-semibold text-decoration-underline"
              to="/"
            >
              Amazon
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white fw-semibold text-decoration-underline"
              to="/"
            >
              VMware
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white fw-semibold text-decoration-underline"
              to="/"
            >
              ISC
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white fw-semibold text-decoration-underline"
              to="/"
            >
              Isaca
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white fw-semibold text-decoration-underline"
              to="/"
            >
              ECcouncil
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white fw-semibold text-decoration-underline"
              to="/"
            >
              Salesforce
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white fw-semibold text-decoration-underline"
              to="/"
            >
              View All
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
