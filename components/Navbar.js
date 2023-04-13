import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              Dee--- -Website
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="/">Home</a>
            </li>
            <li className="dropdown">
              <a href="/Product">Poduct</a>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#">
                <span className="glyphicon glyphicon-user"></span> Sign Up
              </a>
            </li>
            <li>
              <a href="#">
                <span className="glyphicon glyphicon-log-in"></span> Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
